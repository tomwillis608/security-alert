import { postComment } from "./index";
const content = `{
  "$schema" : "https://raw.githubusercontent.com/oasis-tcs/sarif-spec/master/Schemata/sarif-schema-2.1.0.json",
  "version" : "2.1.0",
  "runs" : [ {
    "tool" : {
      "driver" : {
        "name" : "CodeQL command-line toolchain",
        "organization" : "GitHub",
        "semanticVersion" : "2.2.4",
        "rules" : [ {
          "id" : "js/xss",
          "name" : "js/xss",
          "shortDescription" : {
            "text" : "Client-side cross-site scripting"
          },
          "fullDescription" : {
            "text" : "Writing user input directly to the DOM allows for a cross-site scripting vulnerability."
          },
          "defaultConfiguration" : {
            "level" : "error"
          },
          "properties" : {
            "tags" : [ "security", "external/cwe/cwe-079", "external/cwe/cwe-116" ],
            "kind" : "path-problem",
            "precision" : "high",
            "name" : "Client-side cross-site scripting",
            "description" : "Writing user input directly to the DOM allows for\\n              a cross-site scripting vulnerability.",
            "id" : "js/xss",
            "problem.severity" : "error"
          }
        } ]
      }
    },
    "artifacts" : [ {
      "location" : {
        "uri" : "examples/Xss.js",
        "uriBaseId" : "%SRCROOT%",
        "index" : 0
      }
    }, {
      "location" : {
        "uri" : "examples/Xss2.js",
        "uriBaseId" : "%SRCROOT%",
        "index" : 1
      }
    } ],
    "results" : [ {
      "ruleId" : "js/xss",
      "ruleIndex" : 0,
      "message" : {
        "text" : "Cross-site scripting vulnerability due to [user-provided value](1)."
      },
      "locations" : [ {
        "physicalLocation" : {
          "artifactLocation" : {
            "uri" : "examples/Xss.js",
            "uriBaseId" : "%SRCROOT%",
            "index" : 0
          },
          "region" : {
            "startLine" : 4,
            "startColumn" : 20,
            "endColumn" : 56
          }
        }
      } ],
      "partialFingerprints" : {
        "primaryLocationLineHash" : "f10617abe5e779f0:1",
        "primaryLocationStartColumnFingerprint" : "15"
      },
      "codeFlows" : [ {
        "threadFlows" : [ {
          "locations" : [ {
            "location" : {
              "physicalLocation" : {
                "artifactLocation" : {
                  "uri" : "examples/Xss.js",
                  "uriBaseId" : "%SRCROOT%",
                  "index" : 0
                },
                "region" : {
                  "startLine" : 2,
                  "startColumn" : 16,
                  "endColumn" : 33
                }
              },
              "message" : {
                "text" : "document.location"
              }
            }
          }, {
            "location" : {
              "physicalLocation" : {
                "artifactLocation" : {
                  "uri" : "examples/Xss.js",
                  "uriBaseId" : "%SRCROOT%",
                  "index" : 0
                },
                "region" : {
                  "startLine" : 2,
                  "startColumn" : 16,
                  "endColumn" : 38
                }
              },
              "message" : {
                "text" : "documen ... on.href"
              }
            }
          }, {
            "location" : {
              "physicalLocation" : {
                "artifactLocation" : {
                  "uri" : "examples/Xss.js",
                  "uriBaseId" : "%SRCROOT%",
                  "index" : 0
                },
                "region" : {
                  "startLine" : 2,
                  "startColumn" : 9,
                  "endColumn" : 38
                }
              },
              "message" : {
                "text" : "href"
              }
            }
          }, {
            "location" : {
              "physicalLocation" : {
                "artifactLocation" : {
                  "uri" : "examples/Xss.js",
                  "uriBaseId" : "%SRCROOT%",
                  "index" : 0
                },
                "region" : {
                  "startLine" : 3,
                  "startColumn" : 17,
                  "endColumn" : 21
                }
              },
              "message" : {
                "text" : "href"
              }
            }
          }, {
            "location" : {
              "physicalLocation" : {
                "artifactLocation" : {
                  "uri" : "examples/Xss.js",
                  "uriBaseId" : "%SRCROOT%",
                  "index" : 0
                },
                "region" : {
                  "startLine" : 3,
                  "startColumn" : 17,
                  "endColumn" : 59
                }
              },
              "message" : {
                "text" : "href.su ... t=\\")+8)"
              }
            }
          }, {
            "location" : {
              "physicalLocation" : {
                "artifactLocation" : {
                  "uri" : "examples/Xss.js",
                  "uriBaseId" : "%SRCROOT%",
                  "index" : 0
                },
                "region" : {
                  "startLine" : 3,
                  "startColumn" : 9,
                  "endColumn" : 59
                }
              },
              "message" : {
                "text" : "deflt"
              }
            }
          }, {
            "location" : {
              "physicalLocation" : {
                "artifactLocation" : {
                  "uri" : "examples/Xss.js",
                  "uriBaseId" : "%SRCROOT%",
                  "index" : 0
                },
                "region" : {
                  "startLine" : 4,
                  "startColumn" : 39,
                  "endColumn" : 44
                }
              },
              "message" : {
                "text" : "deflt"
              }
            }
          }, {
            "location" : {
              "physicalLocation" : {
                "artifactLocation" : {
                  "uri" : "examples/Xss.js",
                  "uriBaseId" : "%SRCROOT%",
                  "index" : 0
                },
                "region" : {
                  "startLine" : 4,
                  "startColumn" : 20,
                  "endColumn" : 56
                }
              },
              "message" : {
                "text" : "\\"<OPTIO ... PTION>\\""
              }
            }
          } ]
        } ]
      } ],
      "relatedLocations" : [ {
        "id" : 1,
        "physicalLocation" : {
          "artifactLocation" : {
            "uri" : "examples/Xss.js",
            "uriBaseId" : "%SRCROOT%",
            "index" : 0
          },
          "region" : {
            "startLine" : 2,
            "startColumn" : 16,
            "endColumn" : 33
          }
        },
        "message" : {
          "text" : "user-provided value"
        }
      } ]
    }, {
      "ruleId" : "js/xss",
      "ruleIndex" : 0,
      "message" : {
        "text" : "Cross-site scripting vulnerability due to [user-provided value](1)."
      },
      "locations" : [ {
        "physicalLocation" : {
          "artifactLocation" : {
            "uri" : "examples/Xss2.js",
            "uriBaseId" : "%SRCROOT%",
            "index" : 1
          },
          "region" : {
            "startLine" : 4,
            "startColumn" : 20,
            "endColumn" : 56
          }
        }
      } ],
      "partialFingerprints" : {
        "primaryLocationLineHash" : "f10617abe5e779f0:1",
        "primaryLocationStartColumnFingerprint" : "15"
      },
      "codeFlows" : [ {
        "threadFlows" : [ {
          "locations" : [ {
            "location" : {
              "physicalLocation" : {
                "artifactLocation" : {
                  "uri" : "examples/Xss2.js",
                  "uriBaseId" : "%SRCROOT%",
                  "index" : 1
                },
                "region" : {
                  "startLine" : 2,
                  "startColumn" : 16,
                  "endColumn" : 33
                }
              },
              "message" : {
                "text" : "document.location"
              }
            }
          }, {
            "location" : {
              "physicalLocation" : {
                "artifactLocation" : {
                  "uri" : "examples/Xss2.js",
                  "uriBaseId" : "%SRCROOT%",
                  "index" : 1
                },
                "region" : {
                  "startLine" : 2,
                  "startColumn" : 16,
                  "endColumn" : 38
                }
              },
              "message" : {
                "text" : "documen ... on.href"
              }
            }
          }, {
            "location" : {
              "physicalLocation" : {
                "artifactLocation" : {
                  "uri" : "examples/Xss2.js",
                  "uriBaseId" : "%SRCROOT%",
                  "index" : 1
                },
                "region" : {
                  "startLine" : 2,
                  "startColumn" : 9,
                  "endColumn" : 38
                }
              },
              "message" : {
                "text" : "href"
              }
            }
          }, {
            "location" : {
              "physicalLocation" : {
                "artifactLocation" : {
                  "uri" : "examples/Xss2.js",
                  "uriBaseId" : "%SRCROOT%",
                  "index" : 1
                },
                "region" : {
                  "startLine" : 3,
                  "startColumn" : 17,
                  "endColumn" : 21
                }
              },
              "message" : {
                "text" : "href"
              }
            }
          }, {
            "location" : {
              "physicalLocation" : {
                "artifactLocation" : {
                  "uri" : "examples/Xss2.js",
                  "uriBaseId" : "%SRCROOT%",
                  "index" : 1
                },
                "region" : {
                  "startLine" : 3,
                  "startColumn" : 17,
                  "endColumn" : 59
                }
              },
              "message" : {
                "text" : "href.su ... t=\\")+8)"
              }
            }
          }, {
            "location" : {
              "physicalLocation" : {
                "artifactLocation" : {
                  "uri" : "examples/Xss2.js",
                  "uriBaseId" : "%SRCROOT%",
                  "index" : 1
                },
                "region" : {
                  "startLine" : 3,
                  "startColumn" : 9,
                  "endColumn" : 59
                }
              },
              "message" : {
                "text" : "deflt"
              }
            }
          }, {
            "location" : {
              "physicalLocation" : {
                "artifactLocation" : {
                  "uri" : "examples/Xss2.js",
                  "uriBaseId" : "%SRCROOT%",
                  "index" : 1
                },
                "region" : {
                  "startLine" : 4,
                  "startColumn" : 39,
                  "endColumn" : 44
                }
              },
              "message" : {
                "text" : "deflt"
              }
            }
          }, {
            "location" : {
              "physicalLocation" : {
                "artifactLocation" : {
                  "uri" : "examples/Xss2.js",
                  "uriBaseId" : "%SRCROOT%",
                  "index" : 1
                },
                "region" : {
                  "startLine" : 4,
                  "startColumn" : 20,
                  "endColumn" : 56
                }
              },
              "message" : {
                "text" : "\\"<OPTIO ... PTION>\\""
              }
            }
          } ]
        } ]
      } ],
      "relatedLocations" : [ {
        "id" : 1,
        "physicalLocation" : {
          "artifactLocation" : {
            "uri" : "examples/Xss2.js",
            "uriBaseId" : "%SRCROOT%",
            "index" : 1
          },
          "region" : {
            "startLine" : 2,
            "startColumn" : 16,
            "endColumn" : 33
          }
        },
        "message" : {
          "text" : "user-provided value"
        }
      } ]
    } ],
    "newlineSequences" : [ "\\r\\n", "\\n", " ", " " ],
    "columnKind" : "utf16CodeUnits",
    "properties" : {
      "semmle.formatSpecifier" : "sarifv2.1.0"
    }
  } ]
}`;
postComment({
    postingURL: "https://github.com/azu/codeql-scan-example/issues/1",
    sarifContentOwner: "azu",
    sarifContentRepo: "codeql-scan-example",
    sarifContentBranch: "356bd49080c765cf1d81c97e20e9c045cad28352", // master
    sarifContent: content,
    token: process.env.GITHUB_TOKEN!,
    dryRun: false
}).then((res) => {
    console.log(res?.html_url);
})
