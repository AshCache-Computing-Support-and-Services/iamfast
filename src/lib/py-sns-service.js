export default {
  "service": {
    "actions": {
      "CreatePlatformApplication": {
        "request": { "operation": "CreatePlatformApplication" },
        "resource": {
          "type": "PlatformApplication",
          "identifiers": [
            { "target": "Arn", "source": "response", "path": "PlatformApplicationArn" }
          ]
        }
      },
      "CreateTopic": {
        "request": { "operation": "CreateTopic" },
        "resource": {
          "type": "Topic",
          "identifiers": [
            { "target": "Arn", "source": "response", "path": "TopicArn" }
          ]
        }
      }
    },
    "has": {
      "PlatformApplication": {
        "resource": {
          "type": "PlatformApplication",
          "identifiers": [
            { "target": "Arn", "source": "input" }
          ]
        }
      },
      "PlatformEndpoint": {
        "resource": {
          "type": "PlatformEndpoint",
          "identifiers": [
            { "target": "Arn", "source": "input" }
          ]
        }
      },
      "Subscription": {
        "resource": {
          "type": "Subscription",
          "identifiers": [
            { "target": "Arn", "source": "input" }
          ]
        }
      },
      "Topic": {
        "resource": {
          "type": "Topic",
          "identifiers": [
            { "target": "Arn", "source": "input" }
          ]
        }
      }
    },
    "hasMany": {
      "PlatformApplications": {
        "request": { "operation": "ListPlatformApplications" },
        "resource": {
          "type": "PlatformApplication",
          "identifiers": [
            { "target": "Arn", "source": "response", "path": "PlatformApplications[].PlatformApplicationArn" }
          ]
        }
      },
      "Subscriptions": {
        "request": { "operation": "ListSubscriptions" },
        "resource": {
          "type": "Subscription",
          "identifiers": [
            { "target": "Arn", "source": "response", "path": "Subscriptions[].SubscriptionArn" }
          ]
        }
      },
      "Topics": {
        "request": { "operation": "ListTopics" },
        "resource": {
          "type": "Topic",
          "identifiers": [
            { "target": "Arn", "source": "response", "path": "Topics[].TopicArn" }
          ]
        }
      }
    }
  },
  "resources": {
    "PlatformApplication": {
      "identifiers": [
        { "name": "Arn" }
      ],
      "shape": "GetPlatformApplicationAttributesResponse",
      "load": {
        "request": {
          "operation": "GetPlatformApplicationAttributes",
          "params": [
            { "target": "PlatformApplicationArn", "source": "identifier", "name": "Arn" }
          ]
        },
        "path": "@"
      },
      "actions": {
        "CreatePlatformEndpoint": {
          "request": {
            "operation": "CreatePlatformEndpoint",
            "params": [
              { "target": "PlatformApplicationArn", "source": "identifier", "name": "Arn" }
            ]
          },
          "resource": {
            "type": "PlatformEndpoint",
            "identifiers": [
              { "target": "Arn", "source": "response", "path": "EndpointArn" }
            ]
          }
        },
        "Delete": {
          "request": {
            "operation": "DeletePlatformApplication",
            "params": [
              { "target": "PlatformApplicationArn", "source": "identifier", "name": "Arn" }
            ]
          }
        },
        "SetAttributes": {
          "request": {
            "operation": "SetPlatformApplicationAttributes",
            "params": [
              { "target": "PlatformApplicationArn", "source": "identifier", "name": "Arn" }
            ]
          }
        }
      },
      "hasMany": {
        "Endpoints": {
          "request": {
            "operation": "ListEndpointsByPlatformApplication",
            "params": [
              { "target": "PlatformApplicationArn", "source": "identifier", "name": "Arn" }
            ]
          },
          "resource": {
            "type": "PlatformEndpoint",
            "identifiers": [
              { "target": "Arn", "source": "response", "path": "Endpoints[].EndpointArn" }
            ]
          }
        }
      }
    },
    "PlatformEndpoint": {
      "identifiers": [
        { "name": "Arn" }
      ],
      "shape": "GetEndpointAttributesResponse",
      "load": {
        "request": {
          "operation": "GetEndpointAttributes",
          "params": [
            { "target": "EndpointArn", "source": "identifier", "name": "Arn" }
          ]
        },
        "path": "@"
      },
      "actions": {
        "Delete": {
          "request": {
            "operation": "DeleteEndpoint",
            "params": [
              { "target": "EndpointArn", "source": "identifier", "name": "Arn" }
            ]
          }
        },
        "Publish": {
          "request": {
            "operation": "Publish",
            "params": [
              { "target": "TargetArn", "source": "identifier", "name": "Arn" }
            ]
          }
        },
        "SetAttributes": {
          "request": {
            "operation": "SetEndpointAttributes",
            "params": [
              { "target": "EndpointArn", "source": "identifier", "name": "Arn" }
            ]
          }
        }
      }
    },
    "Subscription": {
      "identifiers": [
        { "name": "Arn" }
      ],
      "shape": "GetSubscriptionAttributesResponse",
      "load": {
        "request": {
          "operation": "GetSubscriptionAttributes",
          "params": [
            { "target": "SubscriptionArn", "source": "identifier", "name": "Arn" }
          ]
        },
        "path": "@"
      },
      "actions": {
        "Delete": {
          "request": {
            "operation": "Unsubscribe",
            "params": [
              { "target": "SubscriptionArn", "source": "identifier", "name": "Arn" }
            ]
          }
        },
        "SetAttributes": {
          "request": {
            "operation": "SetSubscriptionAttributes",
            "params": [
              { "target": "SubscriptionArn", "source": "identifier", "name": "Arn" }
            ]
          }
        }
      }
    },
    "Topic": {
      "identifiers": [
        { "name": "Arn" }
      ],
      "shape": "GetTopicAttributesResponse",
      "load": {
        "request": {
          "operation": "GetTopicAttributes",
          "params": [
            { "target": "TopicArn", "source": "identifier", "name": "Arn" }
          ]
        },
        "path": "@"
      },
      "actions": {
        "AddPermission": {
          "request": {
            "operation": "AddPermission",
            "params": [
              { "target": "TopicArn", "source": "identifier", "name": "Arn" }
            ]
          }
        },
        "ConfirmSubscription": {
          "request": {
            "operation": "ConfirmSubscription",
            "params": [
              { "target": "TopicArn", "source": "identifier", "name": "Arn" }
            ]
          },
          "resource": {
            "type": "Subscription",
            "identifiers": [
              { "target": "Arn", "source": "response", "path": "SubscriptionArn" }
            ]
          }
        },
        "Delete": {
          "request": {
            "operation": "DeleteTopic",
            "params": [
              { "target": "TopicArn", "source": "identifier", "name": "Arn" }
            ]
          }
        },
        "Publish": {
          "request": {
            "operation": "Publish",
            "params": [
              { "target": "TopicArn", "source": "identifier", "name": "Arn" }
            ]
          }
        },
        "RemovePermission": {
          "request": {
            "operation": "RemovePermission",
            "params": [
              { "target": "TopicArn", "source": "identifier", "name": "Arn" }
            ]
          }
        },
        "SetAttributes": {
          "request": {
            "operation": "SetTopicAttributes",
            "params": [
              { "target": "TopicArn", "source": "identifier", "name": "Arn" }
            ]
          }
        },
        "Subscribe": {
          "request": {
            "operation": "Subscribe",
            "params": [
              { "target": "TopicArn", "source": "identifier", "name": "Arn" }
            ]
          },
          "resource": {
            "type": "Subscription",
            "identifiers": [
              { "target": "Arn", "source": "response", "path": "SubscriptionArn" }
            ]
          }
        }
      },
      "hasMany": {
        "Subscriptions": {
          "request": {
            "operation": "ListSubscriptionsByTopic",
            "params": [
              { "target": "TopicArn", "source": "identifier", "name": "Arn" }
            ]
          },
          "resource": {
            "type": "Subscription",
            "identifiers": [
              { "target": "Arn", "source": "response", "path": "Subscriptions[].SubscriptionArn" }
            ]
          }
        }
      }
    }
  }
}
