export default {
  "service": {
    "actions": {
      "CreateBucket": {
        "request": { "operation": "CreateBucket" },
        "resource": {
          "type": "Bucket",
          "identifiers": [
            { "target": "Name", "source": "requestParameter", "path": "Bucket" }
          ]
        }
      }
    },
    "has": {
      "Bucket": {
        "resource": {
          "type": "Bucket",
          "identifiers": [
            { "target": "Name", "source": "input" }
          ]
        }
      }
    },
    "hasMany": {
      "Buckets": {
        "request": { "operation": "ListBuckets" },
        "resource": {
          "type": "Bucket",
          "identifiers": [
            { "target": "Name", "source": "response", "path": "Buckets[].Name" }
          ],
          "path": "Buckets[]"
        }
      }
    }
  },
  "resources": {
    "Bucket": {
      "identifiers": [
        { "name": "Name" }
      ],
      "shape": "Bucket",
      "actions": {
        "Create": {
          "request": {
            "operation": "CreateBucket",
            "params": [
              { "target": "Bucket", "source": "identifier", "name": "Name" }
            ]
          }
        },
        "Delete": {
          "request": {
            "operation": "DeleteBucket",
            "params": [
              { "target": "Bucket", "source": "identifier", "name": "Name" }
            ]
          }
        },
        "DeleteObjects": {
          "request": {
            "operation": "DeleteObjects",
            "params": [
              { "target": "Bucket", "source": "identifier", "name": "Name" }
            ]
          }
        },
        "PutObject": {
          "request": {
            "operation": "PutObject",
            "params": [
              { "target": "Bucket", "source": "identifier", "name": "Name" }
            ]
          },
          "resource": {
            "type": "Object",
            "identifiers": [
              { "target": "BucketName", "source": "identifier", "name": "Name" },
              { "target": "Key", "source": "requestParameter", "path": "Key" }
            ]
          }
        }
      },
      "waiters": {
        "Exists": {
          "waiterName": "BucketExists",
          "params": [
            { "target": "Bucket", "source": "identifier", "name": "Name" }
          ]
        },
        "NotExists": {
          "waiterName": "BucketNotExists",
          "params": [
            { "target": "Bucket", "source": "identifier", "name": "Name" }
          ]
        }
      },
      "has": {
        "Acl": {
          "resource": {
            "type": "BucketAcl",
            "identifiers": [
              { "target": "BucketName", "source": "identifier", "name": "Name" }
            ]
          }
        },
        "Cors": {
          "resource": {
            "type": "BucketCors",
            "identifiers": [
              { "target": "BucketName", "source": "identifier", "name": "Name" }
            ]
          }
        },
        "Lifecycle": {
          "resource": {
            "type": "BucketLifecycle",
            "identifiers": [
              { "target": "BucketName", "source": "identifier", "name": "Name" }
            ]
          }
        },
        "LifecycleConfiguration": {
          "resource": {
            "type": "BucketLifecycleConfiguration",
            "identifiers": [
              {
                "target": "BucketName",
                "source": "identifier",
                "name": "Name"
              }
            ]
          }
        },
        "Logging": {
          "resource": {
            "type": "BucketLogging",
            "identifiers": [
              { "target": "BucketName", "source": "identifier", "name": "Name" }
            ]
          }
        },
        "Notification": {
          "resource": {
            "type": "BucketNotification",
            "identifiers": [
              { "target": "BucketName", "source": "identifier", "name": "Name" }
            ]
          }
        },
        "Object": {
          "resource": {
            "type": "Object",
            "identifiers": [
              { "target": "BucketName", "source": "identifier", "name": "Name" },
              { "target": "Key", "source": "input" }
            ]
          }
        },
        "Policy": {
          "resource": {
            "type": "BucketPolicy",
            "identifiers": [
              { "target": "BucketName", "source": "identifier", "name": "Name" }
            ]
          }
        },
        "RequestPayment": {
          "resource": {
            "type": "BucketRequestPayment",
            "identifiers": [
              { "target": "BucketName", "source": "identifier", "name": "Name" }
            ]
          }
        },
        "Tagging": {
          "resource": {
            "type": "BucketTagging",
            "identifiers": [
              { "target": "BucketName", "source": "identifier", "name": "Name" }
            ]
          }
        },
        "Versioning": {
          "resource": {
            "type": "BucketVersioning",
            "identifiers": [
              { "target": "BucketName", "source": "identifier", "name": "Name" }
            ]
          }
        },
        "Website": {
          "resource": {
            "type": "BucketWebsite",
            "identifiers": [
              { "target": "BucketName", "source": "identifier", "name": "Name" }
            ]
          }
        }
      },
      "hasMany": {
        "MultipartUploads": {
          "request": {
            "operation": "ListMultipartUploads",
            "params": [
              { "target": "Bucket", "source": "identifier", "name": "Name" }
            ]
          },
          "resource": {
            "type": "MultipartUpload",
            "identifiers": [
              { "target": "BucketName", "source": "identifier", "name": "Name" },
              { "target": "ObjectKey", "source": "response", "path": "Uploads[].Key" },
              { "target": "Id", "source": "response", "path": "Uploads[].UploadId" }
            ],
            "path": "Uploads[]"
          }
        },
        "ObjectVersions": {
          "request": {
            "operation": "ListObjectVersions",
            "params": [
              { "target": "Bucket", "source": "identifier", "name": "Name" }
            ]
          },
          "resource": {
            "type": "ObjectVersion",
            "identifiers": [
              { "target": "BucketName", "source": "identifier", "name": "Name" },
              { "target": "ObjectKey", "source": "response", "path": "[Versions,DeleteMarkers]|[].Key" },
              { "target": "Id", "source": "response", "path": "[Versions,DeleteMarkers]|[].VersionId" }
            ],
            "path": "[Versions,DeleteMarkers]|[]"
          }
        },
        "Objects": {
          "request": {
            "operation": "ListObjects",
            "params": [
              { "target": "Bucket", "source": "identifier", "name": "Name" }
            ]
          },
          "resource": {
            "type": "ObjectSummary",
            "identifiers": [
              { "target": "BucketName", "source": "identifier", "name": "Name" },
              { "target": "Key", "source": "response", "path": "Contents[].Key" }
            ],
            "path": "Contents[]"
          }
        }
      }
    },
    "BucketAcl": {
      "identifiers": [
        { "name": "BucketName" }
      ],
      "shape": "GetBucketAclOutput",
      "load": {
        "request": {
          "operation": "GetBucketAcl",
          "params": [
            { "target": "Bucket", "source": "identifier", "name": "BucketName" }
          ]
        },
        "path": "@"
      },
      "actions": {
        "Put": {
          "request": {
            "operation": "PutBucketAcl",
            "params": [
              { "target": "Bucket", "source": "identifier", "name": "BucketName" }
            ]
          }
        }
      },
      "has": {
        "Bucket": {
          "resource": {
            "type": "Bucket",
            "identifiers": [
              { "target": "Name", "source": "identifier", "name": "BucketName" }
            ]
          }
        }
      }
    },
    "BucketCors": {
      "identifiers": [
        { "name": "BucketName" }
      ],
      "shape": "GetBucketCorsOutput",
      "load": {
        "request": {
          "operation": "GetBucketCors",
          "params": [
            { "target": "Bucket", "source": "identifier", "name": "BucketName" }
          ]
        },
        "path": "@"
      },
      "actions": {
        "Delete": {
          "request": {
            "operation": "DeleteBucketCors",
            "params": [
              { "target": "Bucket", "source": "identifier", "name": "BucketName" }
            ]
          }
        },
        "Put": {
          "request": {
            "operation": "PutBucketCors",
            "params": [
              { "target": "Bucket", "source": "identifier", "name": "BucketName" }
            ]
          }
        }
      },
      "has": {
        "Bucket": {
          "resource": {
            "type": "Bucket",
            "identifiers": [
              { "target": "Name", "source": "identifier", "name": "BucketName" }
            ]
          }
        }
      }
    },
    "BucketLifecycle": {
      "identifiers": [
        { "name": "BucketName" }
      ],
      "shape": "GetBucketLifecycleOutput",
      "load": {
        "request": {
          "operation": "GetBucketLifecycle",
          "params": [
            { "target": "Bucket", "source": "identifier", "name": "BucketName" }
          ]
        },
        "path": "@"
      },
      "actions": {
        "Delete": {
          "request": {
            "operation": "DeleteBucketLifecycle",
            "params": [
              { "target": "Bucket", "source": "identifier", "name": "BucketName" }
            ]
          }
        },
        "Put": {
          "request": {
            "operation": "PutBucketLifecycle",
            "params": [
              { "target": "Bucket", "source": "identifier", "name": "BucketName" }
            ]
          }
        }
      },
      "has": {
        "Bucket": {
          "resource": {
            "type": "Bucket",
            "identifiers": [
              { "target": "Name", "source": "identifier", "name": "BucketName" }
            ]
          }
        }
      }
    },
    "BucketLifecycleConfiguration": {
      "identifiers": [
        {
          "name": "BucketName"
        }
      ],
      "shape": "GetBucketLifecycleConfigurationOutput",
      "load": {
        "request": {
          "operation": "GetBucketLifecycleConfiguration",
          "params": [
            {
              "target": "Bucket",
              "source": "identifier",
              "name": "BucketName"
            }
          ]
        },
        "path": "@"
      },
      "actions": {
        "Delete": {
          "request": {
            "operation": "DeleteBucketLifecycle",
            "params": [
              {
                "target": "Bucket",
                "source": "identifier",
                "name": "BucketName"
              }
            ]
          }
        },
        "Put": {
          "request": {
            "operation": "PutBucketLifecycleConfiguration",
            "params": [
              {
                "target": "Bucket",
                "source": "identifier",
                "name": "BucketName"
              }
            ]
          }
        }
      },
      "has": {
        "Bucket": {
          "resource": {
            "type": "Bucket",
            "identifiers": [
              {
                "target": "Name",
                "source": "identifier",
                "name": "BucketName"
              }
            ]
          }
        }
      }
    },
    "BucketLogging": {
      "identifiers": [
        { "name": "BucketName" }
      ],
      "shape": "GetBucketLoggingOutput",
      "load": {
        "request": {
          "operation": "GetBucketLogging",
          "params": [
            { "target": "Bucket", "source": "identifier", "name": "BucketName" }
          ]
        },
        "path": "@"
      },
      "actions": {
        "Put": {
          "request": {
            "operation": "PutBucketLogging",
            "params": [
              { "target": "Bucket", "source": "identifier", "name": "BucketName" }
            ]
          }
        }
      },
      "has": {
        "Bucket": {
          "resource": {
            "type": "Bucket",
            "identifiers": [
              { "target": "Name", "source": "identifier", "name": "BucketName" }
            ]
          }
        }
      }
    },
    "BucketNotification": {
      "identifiers": [
        { "name": "BucketName" }
      ],
      "shape": "NotificationConfiguration",
      "load": {
        "request": {
          "operation": "GetBucketNotificationConfiguration",
          "params": [
            { "target": "Bucket", "source": "identifier", "name": "BucketName" }
          ]
        },
        "path": "@"
      },
      "actions": {
        "Put": {
          "request": {
            "operation": "PutBucketNotificationConfiguration",
            "params": [
              { "target": "Bucket", "source": "identifier", "name": "BucketName" }
            ]
          }
        }
      },
      "has": {
        "Bucket": {
          "resource": {
            "type": "Bucket",
            "identifiers": [
              { "target": "Name", "source": "identifier", "name": "BucketName" }
            ]
          }
        }
      }
    },
    "BucketPolicy": {
      "identifiers": [
        { "name": "BucketName" }
      ],
      "shape": "GetBucketPolicyOutput",
      "load": {
        "request": {
          "operation": "GetBucketPolicy",
          "params": [
            { "target": "Bucket", "source": "identifier", "name": "BucketName" }
          ]
        },
        "path": "@"
      },
      "actions": {
        "Delete": {
          "request": {
            "operation": "DeleteBucketPolicy",
            "params": [
              { "target": "Bucket", "source": "identifier", "name": "BucketName" }
            ]
          }
        },
        "Put": {
          "request": {
            "operation": "PutBucketPolicy",
            "params": [
              { "target": "Bucket", "source": "identifier", "name": "BucketName" }
            ]
          }
        }
      },
      "has": {
        "Bucket": {
          "resource": {
            "type": "Bucket",
            "identifiers": [
              { "target": "Name", "source": "identifier", "name": "BucketName" }
            ]
          }
        }
      }
    },
    "BucketRequestPayment": {
      "identifiers": [
        { "name": "BucketName" }
      ],
      "shape": "GetBucketRequestPaymentOutput",
      "load": {
        "request": {
          "operation": "GetBucketRequestPayment",
          "params": [
            { "target": "Bucket", "source": "identifier", "name": "BucketName" }
          ]
        },
        "path": "@"
      },
      "actions": {
        "Put": {
          "request": {
            "operation": "PutBucketRequestPayment",
            "params": [
              { "target": "Bucket", "source": "identifier", "name": "BucketName" }
            ]
          }
        }
      },
      "has": {
        "Bucket": {
          "resource": {
            "type": "Bucket",
            "identifiers": [
              { "target": "Name", "source": "identifier", "name": "BucketName" }
            ]
          }
        }
      }
    },
    "BucketTagging": {
      "identifiers": [
        { "name": "BucketName" }
      ],
      "shape": "GetBucketTaggingOutput",
      "load": {
        "request": {
          "operation": "GetBucketTagging",
          "params": [
            { "target": "Bucket", "source": "identifier", "name": "BucketName" }
          ]
        },
        "path": "@"
      },
      "actions": {
        "Delete": {
          "request": {
            "operation": "DeleteBucketTagging",
            "params": [
              { "target": "Bucket", "source": "identifier", "name": "BucketName" }
            ]
          }
        },
        "Put": {
          "request": {
            "operation": "PutBucketTagging",
            "params": [
              { "target": "Bucket", "source": "identifier", "name": "BucketName" }
            ]
          }
        }
      },
      "has": {
        "Bucket": {
          "resource": {
            "type": "Bucket",
            "identifiers": [
              { "target": "Name", "source": "identifier", "name": "BucketName" }
            ]
          }
        }
      }
    },
    "BucketVersioning": {
      "identifiers": [
        { "name": "BucketName" }
      ],
      "shape": "GetBucketVersioningOutput",
      "load": {
        "request": {
          "operation": "GetBucketVersioning",
          "params": [
            { "target": "Bucket", "source": "identifier", "name": "BucketName" }
          ]
        },
        "path": "@"
      },
      "actions": {
        "Enable": {
          "request": {
            "operation": "PutBucketVersioning",
            "params": [
              { "target": "Bucket", "source": "identifier", "name": "BucketName" },
              { "target": "VersioningConfiguration.Status", "source": "string", "value": "Enabled" }
            ]
          }
        },
        "Put": {
          "request": {
            "operation": "PutBucketVersioning",
            "params": [
              { "target": "Bucket", "source": "identifier", "name": "BucketName" }
            ]
          }
        },
        "Suspend": {
          "request": {
            "operation": "PutBucketVersioning",
            "params": [
              { "target": "Bucket", "source": "identifier", "name": "BucketName" },
              { "target": "VersioningConfiguration.Status", "source": "string", "value": "Suspended" }
            ]
          }
        }
      },
      "has": {
        "Bucket": {
          "resource": {
            "type": "Bucket",
            "identifiers": [
              { "target": "Name", "source": "identifier", "name": "BucketName" }
            ]
          }
        }
      }
    },
    "BucketWebsite": {
      "identifiers": [
        { "name": "BucketName" }
      ],
      "shape": "GetBucketWebsiteOutput",
      "load": {
        "request": {
          "operation": "GetBucketWebsite",
          "params": [
            { "target": "Bucket", "source": "identifier", "name": "BucketName" }
          ]
        },
        "path": "@"
      },
      "actions": {
        "Delete": {
          "request": {
            "operation": "DeleteBucketWebsite",
            "params": [
              { "target": "Bucket", "source": "identifier", "name": "BucketName" }
            ]
          }
        },
        "Put": {
          "request": {
            "operation": "PutBucketWebsite",
            "params": [
              { "target": "Bucket", "source": "identifier", "name": "BucketName" }
            ]
          }
        }
      },
      "has": {
        "Bucket": {
          "resource": {
            "type": "Bucket",
            "identifiers": [
              { "target": "Name", "source": "identifier", "name": "BucketName" }
            ]
          }
        }
      }
    },
    "MultipartUpload": {
      "identifiers": [
        { "name": "BucketName" },
        { "name": "ObjectKey" },
        { "name": "Id" }
      ],
      "shape": "MultipartUpload",
      "actions": {
        "Abort": {
          "request": {
            "operation": "AbortMultipartUpload",
            "params": [
              { "target": "Bucket", "source": "identifier", "name": "BucketName" },
              { "target": "Key", "source": "identifier", "name": "ObjectKey" },
              { "target": "UploadId", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "Complete": {
          "request": {
            "operation": "CompleteMultipartUpload",
            "params": [
              { "target": "Bucket", "source": "identifier", "name": "BucketName" },
              { "target": "Key", "source": "identifier", "name": "ObjectKey" },
              { "target": "UploadId", "source": "identifier", "name": "Id" }
            ]
          },
          "resource": {
            "type": "Object",
            "identifiers": [
              { "target": "BucketName", "source": "identifier", "name": "BucketName" },
              { "target": "Key", "source": "identifier", "name": "ObjectKey" }
            ]
          }
        }
      },
      "has": {
        "Object": {
          "resource": {
            "type": "Object",
            "identifiers": [
              { "target": "BucketName", "source": "identifier", "name": "BucketName" },
              { "target": "Key", "source": "identifier", "name": "ObjectKey" }
            ]
          }
        },
        "Part": {
          "resource": {
            "type": "MultipartUploadPart",
            "identifiers": [
              { "target": "BucketName", "source": "identifier", "name": "BucketName" },
              { "target": "ObjectKey", "source": "identifier", "name": "ObjectKey" },
              { "target": "MultipartUploadId", "source": "identifier", "name": "Id" },
              { "target": "PartNumber", "source": "input" }
            ]
          }
        }
      },
      "hasMany": {
        "Parts": {
          "request": {
            "operation": "ListParts",
            "params": [
              { "target": "Bucket", "source": "identifier", "name": "BucketName" },
              { "target": "Key", "source": "identifier", "name": "ObjectKey" },
              { "target": "UploadId", "source": "identifier", "name": "Id" }
            ]
          },
          "resource": {
            "type": "MultipartUploadPart",
            "identifiers": [
              { "target": "BucketName", "source": "requestParameter", "path": "Bucket" },
              { "target": "ObjectKey", "source": "requestParameter", "path": "Key" },
              { "target": "MultipartUploadId", "source": "requestParameter", "path": "UploadId" },
              { "target": "PartNumber", "source": "response", "path": "Parts[].PartNumber" }
            ],
            "path": "Parts[]"
          }
        }
      }
    },
    "MultipartUploadPart": {
      "identifiers": [
        { "name": "BucketName" },
        { "name": "ObjectKey" },
        { "name": "MultipartUploadId" },
        {
          "name": "PartNumber",
          "type": "integer",
          "memberName": "PartNumber"
        }
      ],
      "shape": "Part",
      "actions": {
        "CopyFrom": {
          "request": {
            "operation": "UploadPartCopy",
            "params": [
              { "target": "Bucket", "source": "identifier", "name": "BucketName" },
              { "target": "Key", "source": "identifier", "name": "ObjectKey" },
              { "target": "UploadId", "source": "identifier", "name": "MultipartUploadId" },
              { "target": "PartNumber", "source": "identifier", "name": "PartNumber" }
            ]
          }
        },
        "Upload": {
          "request": {
            "operation": "UploadPart",
            "params": [
              { "target": "Bucket", "source": "identifier", "name": "BucketName" },
              { "target": "Key", "source": "identifier", "name": "ObjectKey" },
              { "target": "UploadId", "source": "identifier", "name": "MultipartUploadId" },
              { "target": "PartNumber", "source": "identifier", "name": "PartNumber" }
            ]
          }
        }
      },
      "has": {
        "MultipartUpload": {
          "resource": {
            "type": "MultipartUpload",
            "identifiers": [
              { "target": "BucketName", "source": "identifier", "name": "BucketName" },
              { "target": "ObjectKey", "source": "identifier", "name": "ObjectKey" },
              { "target": "Id", "source": "identifier", "name": "MultipartUploadId" }
            ]
          }
        }
      }
    },
    "Object": {
      "identifiers": [
        { "name": "BucketName" },
        { "name": "Key" }
      ],
      "shape": "HeadObjectOutput",
      "load": {
        "request": {
          "operation": "HeadObject",
          "params": [
            { "target": "Bucket", "source": "identifier", "name": "BucketName" },
            { "target": "Key", "source": "identifier", "name": "Key" }
          ]
        },
        "path": "@"
      },
      "actions": {
        "CopyFrom": {
          "request": {
            "operation": "CopyObject",
            "params": [
              { "target": "Bucket", "source": "identifier", "name": "BucketName" },
              { "target": "Key", "source": "identifier", "name": "Key" }
            ]
          }
        },
        "Delete": {
          "request": {
            "operation": "DeleteObject",
            "params": [
              { "target": "Bucket", "source": "identifier", "name": "BucketName" },
              { "target": "Key", "source": "identifier", "name": "Key" }
            ]
          }
        },
        "Get": {
          "request": {
            "operation": "GetObject",
            "params": [
              { "target": "Bucket", "source": "identifier", "name": "BucketName" },
              { "target": "Key", "source": "identifier", "name": "Key" }
            ]
          }
        },
        "InitiateMultipartUpload": {
          "request": {
            "operation": "CreateMultipartUpload",
            "params": [
              { "target": "Bucket", "source": "identifier", "name": "BucketName" },
              { "target": "Key", "source": "identifier", "name": "Key" }
            ]
          },
          "resource": {
            "type": "MultipartUpload",
            "identifiers": [
              { "target": "BucketName", "source": "identifier", "name": "BucketName" },
              { "target": "ObjectKey", "source": "identifier", "name": "Key" },
              { "target": "Id", "source": "response", "path": "UploadId" }
            ]
          }
        },
        "Put": {
          "request": {
            "operation": "PutObject",
            "params": [
              { "target": "Bucket", "source": "identifier", "name": "BucketName" },
              { "target": "Key", "source": "identifier", "name": "Key" }
            ]
          }
        },
        "RestoreObject": {
          "request": {
            "operation": "RestoreObject",
            "params": [
              { "target": "Bucket", "source": "identifier", "name": "BucketName" },
              { "target": "Key", "source": "identifier", "name": "Key" }
            ]
          }
        }
      },
      "batchActions": {
        "Delete": {
          "request": {
            "operation": "DeleteObjects",
            "params": [
              { "target": "Bucket", "source": "identifier", "name": "BucketName" },
              { "target": "Delete.Objects[].Key", "source": "identifier", "name": "Key" }
            ]
          }
        }
      },
      "waiters": {
        "Exists": {
          "waiterName": "ObjectExists",
          "params": [
            { "target": "Bucket", "source": "identifier", "name": "BucketName" },
            { "target": "Key", "source": "identifier", "name": "Key" }
          ]
        },
        "NotExists": {
          "waiterName": "ObjectNotExists",
          "params": [
            { "target": "Bucket", "source": "identifier", "name": "BucketName" },
            { "target": "Key", "source": "identifier", "name": "Key" }
          ]
        }
      },
      "has": {
        "Acl": {
          "resource": {
            "type": "ObjectAcl",
            "identifiers": [
              { "target": "BucketName", "source": "identifier", "name": "BucketName" },
              { "target": "ObjectKey", "source": "identifier", "name": "Key" }
            ]
          }
        },
        "Bucket": {
          "resource": {
            "type": "Bucket",
            "identifiers": [
              { "target": "Name", "source": "identifier", "name": "BucketName" }
            ]
          }
        },
        "MultipartUpload": {
          "resource": {
            "type": "MultipartUpload",
            "identifiers": [
              { "target": "BucketName", "source": "identifier", "name": "BucketName" },
              { "target": "ObjectKey", "source": "identifier", "name": "Key" },
              { "target": "Id", "source": "input" }
            ]
          }
        },
        "Version": {
          "resource": {
            "type": "ObjectVersion",
            "identifiers": [
              { "target": "BucketName", "source": "identifier", "name": "BucketName" },
              { "target": "ObjectKey", "source": "identifier", "name": "Key" },
              { "target": "Id", "source": "input" }
            ]
          }
        }
      }
    },
    "ObjectAcl": {
      "identifiers": [
        { "name": "BucketName" },
        { "name": "ObjectKey" }
      ],
      "shape": "GetObjectAclOutput",
      "load": {
        "request": {
          "operation": "GetObjectAcl",
          "params": [
            { "target": "Bucket", "source": "identifier", "name": "BucketName" },
            { "target": "Key", "source": "identifier", "name": "ObjectKey" }
          ]
        },
        "path": "@"
      },
      "actions": {
        "Put": {
          "request": {
            "operation": "PutObjectAcl",
            "params": [
              { "target": "Bucket", "source": "identifier", "name": "BucketName" },
              { "target": "Key", "source": "identifier", "name": "ObjectKey" }
            ]
          }
        }
      },
      "has": {
        "Object": {
          "resource": {
            "type": "Object",
            "identifiers": [
              { "target": "BucketName", "source": "identifier", "name": "BucketName" },
              { "target": "Key", "source": "identifier", "name": "ObjectKey" }
            ]
          }
        }
      }
    },
    "ObjectSummary": {
      "identifiers": [
        { "name": "BucketName" },
        { "name": "Key" }
      ],
      "shape": "Object",
      "actions": {
        "CopyFrom": {
          "request": {
            "operation": "CopyObject",
            "params": [
              { "target": "Bucket", "source": "identifier", "name": "BucketName" },
              { "target": "Key", "source": "identifier", "name": "Key" }
            ]
          }
        },
        "Delete": {
          "request": {
            "operation": "DeleteObject",
            "params": [
              { "target": "Bucket", "source": "identifier", "name": "BucketName" },
              { "target": "Key", "source": "identifier", "name": "Key" }
            ]
          }
        },
        "Get": {
          "request": {
            "operation": "GetObject",
            "params": [
              { "target": "Bucket", "source": "identifier", "name": "BucketName" },
              { "target": "Key", "source": "identifier", "name": "Key" }
            ]
          }
        },
        "InitiateMultipartUpload": {
          "request": {
            "operation": "CreateMultipartUpload",
            "params": [
              { "target": "Bucket", "source": "identifier", "name": "BucketName" },
              { "target": "Key", "source": "identifier", "name": "Key" }
            ]
          },
          "resource": {
            "type": "MultipartUpload",
            "identifiers": [
              { "target": "BucketName", "source": "identifier", "name": "BucketName" },
              { "target": "ObjectKey", "source": "identifier", "name": "Key" },
              { "target": "Id", "source": "response", "path": "UploadId" }
            ]
          }
        },
        "Put": {
          "request": {
            "operation": "PutObject",
            "params": [
              { "target": "Bucket", "source": "identifier", "name": "BucketName" },
              { "target": "Key", "source": "identifier", "name": "Key" }
            ]
          }
        },
        "RestoreObject": {
          "request": {
            "operation": "RestoreObject",
            "params": [
              { "target": "Bucket", "source": "identifier", "name": "BucketName" },
              { "target": "Key", "source": "identifier", "name": "Key" }
            ]
          }
        }
      },
      "batchActions": {
        "Delete": {
          "request": {
            "operation": "DeleteObjects",
            "params": [
              { "target": "Bucket", "source": "identifier", "name": "BucketName" },
              { "target": "Delete.Objects[].Key", "source": "identifier", "name": "Key" }
            ]
          }
        }
      },
      "waiters": {
        "Exists": {
          "waiterName": "ObjectExists",
          "params": [
            { "target": "Bucket", "source": "identifier", "name": "BucketName" },
            { "target": "Key", "source": "identifier", "name": "Key" }
          ]
        },
        "NotExists": {
          "waiterName": "ObjectNotExists",
          "params": [
            { "target": "Bucket", "source": "identifier", "name": "BucketName" },
            { "target": "Key", "source": "identifier", "name": "Key" }
          ]
        }
      },
      "has": {
        "Acl": {
          "resource": {
            "type": "ObjectAcl",
            "identifiers": [
              { "target": "BucketName", "source": "identifier", "name": "BucketName" },
              { "target": "ObjectKey", "source": "identifier", "name": "Key" }
            ]
          }
        },
        "Bucket": {
          "resource": {
            "type": "Bucket",
            "identifiers": [
              { "target": "Name", "source": "identifier", "name": "BucketName" }
            ]
          }
        },
        "MultipartUpload": {
          "resource": {
            "type": "MultipartUpload",
            "identifiers": [
              { "target": "BucketName", "source": "identifier", "name": "BucketName" },
              { "target": "ObjectKey", "source": "identifier", "name": "Key" },
              { "target": "Id", "source": "input" }
            ]
          }
        },
        "Object": {
          "resource": {
            "type": "Object",
            "identifiers": [
              { "target": "BucketName", "source": "identifier", "name": "BucketName" },
              { "target": "Key", "source": "identifier", "name": "Key" }
            ]
          }
        },
        "Version": {
          "resource": {
            "type": "ObjectVersion",
            "identifiers": [
              { "target": "BucketName", "source": "identifier", "name": "BucketName" },
              { "target": "ObjectKey", "source": "identifier", "name": "Key" },
              { "target": "Id", "source": "input" }
            ]
          }
        }
      }
    },
    "ObjectVersion": {
      "identifiers": [
        { "name": "BucketName" },
        { "name": "ObjectKey" },
        { "name": "Id" }
      ],
      "shape": "ObjectVersion",
      "actions": {
        "Delete": {
          "request": {
            "operation": "DeleteObject",
            "params": [
              { "target": "Bucket", "source": "identifier", "name": "BucketName" },
              { "target": "Key", "source": "identifier", "name": "ObjectKey" },
              { "target": "VersionId", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "Get": {
          "request": {
            "operation": "GetObject",
            "params": [
              { "target": "Bucket", "source": "identifier", "name": "BucketName" },
              { "target": "Key", "source": "identifier", "name": "ObjectKey" },
              { "target": "VersionId", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "Head": {
          "request": {
            "operation": "HeadObject",
            "params": [
              { "target": "Bucket", "source": "identifier", "name": "BucketName" },
              { "target": "Key", "source": "identifier", "name": "ObjectKey" },
              { "target": "VersionId", "source": "identifier", "name": "Id" }
            ]
          }
        }
      },
      "batchActions": {
        "Delete": {
          "request": {
            "operation": "DeleteObjects",
            "params": [
              { "target": "Bucket", "source": "identifier", "name": "BucketName" },
              { "target": "Delete.Objects[*].Key", "source": "identifier", "name": "ObjectKey" },
              { "target": "Delete.Objects[*].VersionId", "source": "identifier", "name": "Id" }
            ]
          }
        }
      },
      "has": {
        "Object": {
          "resource": {
            "type": "Object",
            "identifiers": [
              { "target": "BucketName", "source": "identifier", "name": "BucketName" },
              { "target": "Key", "source": "identifier", "name": "ObjectKey" }
            ]
          }
        }
      }
    }
  }
}
