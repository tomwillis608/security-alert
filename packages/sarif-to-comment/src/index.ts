import { sarifToMarkdown } from "@security-alert/sarif-to-markdown";
import { issueComment } from "./issue-comment";

// SARIF pattern
export type CreatedOptions = {
    /**
     * The title of post content
     */
    title?: string;
    /**
     * issue url of pull request url
     */
    postingURL: string;
    // SARIF v2.1.0
    sarifContent: string;
    sarifContentOwner: string;
    sarifContentRepo: string;
    sarifContentBranch: string;
    sarifContentSourceRoot?: string;
    token: string;
    dryRun?: boolean;
    ghActionAuthenticationMode?: boolean;
    ruleDetails?: boolean;
    suppressedResults?: boolean;
    simple?: boolean;
    severity?: readonly string[];
};

export type PostedCommentResult = { posted: true; commentUrl: string } | { posted: false; reason: string };

export async function postComment(options: CreatedOptions): Promise<PostedCommentResult> {
    const dryRun = options.dryRun !== undefined ? options.dryRun : false;
    const owner = options.sarifContentOwner;
    const repo = options.sarifContentRepo;
    const branch = options.sarifContentBranch;
    // https://github.com/owner/repo/issues/85
    const issuePattern =
        /^https:\/\/github.com\/(?<owner>[0-9a-zA-Z-_.]+)\/(?<repo>[0-9a-zA-Z-_.]+)\/issues\/(?<issueNumber>[0-9]+)/;
    const matchObj = issuePattern.exec(options.postingURL);
    const content = JSON.parse(options.sarifContent);
    if (!matchObj || !matchObj.groups) {
        throw new Error(
            "Should set security alert url.\n" +
                "\n" +
                "Example: https://github.com/owner/reponame/network/alert/package-lock.json/axios/open"
        );
    }
    if (content?.runs?.[0]?.results.length === 0) {
        return { posted: false, reason: "There are no results in this SARIF run 0, exiting without a comment !" };
    }
    const postingOwner: string = matchObj.groups.owner;
    const postringRepo: string = matchObj.groups.repo;
    const postringNumber: number = Number(matchObj.groups.issueNumber);
    const results = sarifToMarkdown({
        title: options.title,
        owner,
        repo,
        branch,
        sourceRoot: options.sarifContentSourceRoot ?? "",
        details: options.ruleDetails,
        suppressedResults: options.suppressedResults,
        simple: options.simple,
        severities: options.severity
    })(JSON.parse(options.sarifContent));
    const resultsHasMessage = results.filter((result) => result.hasMessages);
    const body = resultsHasMessage
        .map((result) => {
            return result.body;
        })
        .join("\n\n");
    if (dryRun) {
        if (resultsHasMessage.length === 0) {
            console.log("It will not post, because the markdown is empty");
        }
        console.log(`DryRun results:
owner: ${owner}
repo: ${repo}
issue: ${options.postingURL}
title: ${options.title}
body: ${body}
`);
        return { posted: false, reason: "This is a dry run" };
    } else {
        if (resultsHasMessage.length === 0) {
            return { posted: false, reason: "Markdown extracted from SARIF was empty" };
        }
        const url = await issueComment({
            owner: postingOwner,
            repo: postringRepo,
            issue_number: postringNumber,
            body: body,
            token: options.token,
            ghActionAuthentication: options.ghActionAuthenticationMode
        });
        return { posted: true, commentUrl: url.html_url.toString() };
    }
}
