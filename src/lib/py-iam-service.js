export default {
  "service": {
    "actions": {
      "ChangePassword": {
        "request": { "operation": "ChangePassword" }
      },
      "CreateAccountAlias": {
        "request": { "operation": "CreateAccountAlias" }
      },
      "CreateAccountPasswordPolicy": {
        "request": { "operation": "UpdateAccountPasswordPolicy" },
        "resource": {
          "type": "AccountPasswordPolicy",
          "identifiers": [  ]
        }
      },
      "CreateGroup": {
        "request": { "operation": "CreateGroup" },
        "resource": {
          "type": "Group",
          "identifiers": [
            { "target": "Name", "source": "requestParameter", "path": "GroupName" }
          ],
          "path": "Group"
        }
      },
      "CreateInstanceProfile": {
        "request": { "operation": "CreateInstanceProfile" },
        "resource": {
          "type": "InstanceProfile",
          "identifiers": [
            { "target": "Name", "source": "requestParameter", "path": "InstanceProfileName" }
          ],
          "path": "InstanceProfile"
        }
      },
      "CreatePolicy": {
        "request": { "operation": "CreatePolicy" },
        "resource": {
          "type": "Policy",
          "identifiers": [
            { "target": "Arn", "source": "response", "path": "Policy.Arn" }
          ]
        }
      },
      "CreateRole": {
        "request": { "operation": "CreateRole" },
        "resource": {
          "type": "Role",
          "identifiers": [
            { "target": "Name", "source": "requestParameter", "path": "RoleName" }
          ],
          "path": "Role"
        }
      },
      "CreateSamlProvider": {
        "request": { "operation": "CreateSAMLProvider" },
        "resource": {
          "type": "SamlProvider",
          "identifiers": [
            { "target": "Arn", "source": "response", "path": "SAMLProviderArn" }
          ]
        }
      },
      "CreateServerCertificate": {
        "request": { "operation": "UploadServerCertificate" },
        "resource": {
          "type": "ServerCertificate",
          "identifiers": [
            { "target": "Name", "source": "requestParameter", "path": "ServerCertificateName" }
          ]
        }
      },
      "CreateSigningCertificate": {
        "request": { "operation": "UploadSigningCertificate" },
        "resource": {
          "type": "SigningCertificate",
          "identifiers": [
            { "target": "Id", "source": "response", "path": "Certificate.CertificateId" }
          ],
          "path": "Certificate"
        }
      },
      "CreateUser": {
        "request": { "operation": "CreateUser" },
        "resource": {
          "type": "User",
          "identifiers": [
            { "target": "Name", "source": "requestParameter", "path": "UserName" }
          ],
          "path": "User"
        }
      },
      "CreateVirtualMfaDevice": {
        "request": { "operation": "CreateVirtualMFADevice" },
        "resource": {
          "type": "VirtualMfaDevice",
          "identifiers": [
            { "target": "SerialNumber", "source": "response", "path": "VirtualMFADevice.SerialNumber" }
          ],
          "path": "VirtualMFADevice"
        }
      }
    },
    "has": {
      "AccountPasswordPolicy": {
        "resource": {
          "type": "AccountPasswordPolicy",
          "identifiers": [  ]
        }
      },
      "AccountSummary": {
        "resource": {
          "type": "AccountSummary",
          "identifiers": [  ]
        }
      },
      "CurrentUser": {
        "resource": {
          "type": "CurrentUser",
          "identifiers": [  ]
        }
      },
      "Group": {
        "resource": {
          "type": "Group",
          "identifiers": [
            { "target": "Name", "source": "input" }
          ]
        }
      },
      "InstanceProfile": {
        "resource": {
          "type": "InstanceProfile",
          "identifiers": [
            { "target": "Name", "source": "input" }
          ]
        }
      },
      "Policy": {
        "resource": {
          "type": "Policy",
          "identifiers": [
            { "target": "PolicyArn", "source": "input" }
          ]
        }
      },
      "Role": {
        "resource": {
          "type": "Role",
          "identifiers": [
            { "target": "Name", "source": "input" }
          ]
        }
      },
      "SamlProvider": {
        "resource": {
          "type": "SamlProvider",
          "identifiers": [
            { "target": "Arn", "source": "input" }
          ]
        }
      },
      "ServerCertificate": {
        "resource": {
          "type": "ServerCertificate",
          "identifiers": [
            { "target": "Name", "source": "input" }
          ]
        }
      },
      "User": {
        "resource": {
          "type": "User",
          "identifiers": [
            { "target": "Name", "source": "input" }
          ]
        }
      },
      "VirtualMfaDevice": {
        "resource": {
          "type": "VirtualMfaDevice",
          "identifiers": [
            { "target": "SerialNumber", "source": "input" }
          ]
        }
      }
    },
    "hasMany": {
      "Groups": {
        "request": { "operation": "ListGroups" },
        "resource": {
          "type": "Group",
          "identifiers": [
            { "target": "Name", "source": "response", "path": "Groups[].GroupName" }
          ],
          "path": "Groups[]"
        }
      },
      "InstanceProfiles": {
        "request": { "operation": "ListInstanceProfiles" },
        "resource": {
          "type": "InstanceProfile",
          "identifiers": [
            { "target": "Name", "source": "response", "path": "InstanceProfiles[].InstanceProfileName" }
          ],
          "path": "InstanceProfiles[]"
        }
      },
      "Policies": {
        "request": { "operation": "ListPolicies" },
        "resource": {
          "type": "Policy",
          "identifiers": [
            { "target": "Arn", "source": "response", "path": "Policies[].Arn" }
          ],
          "path": "Policies[]"
        }
      },
      "Roles": {
        "request": { "operation": "ListRoles" },
        "resource": {
          "type": "Role",
          "identifiers": [
            { "target": "Name", "source": "response", "path": "Roles[].RoleName" }
          ],
          "path": "Roles[]"
        }
      },
      "SamlProviders": {
        "request": { "operation": "ListSAMLProviders" },
        "resource": {
          "type": "SamlProvider",
          "identifiers": [
            { "target": "Arn", "source": "response", "path": "SAMLProviderList[].Arn" }
          ]
        }
      },
      "ServerCertificates": {
        "request": { "operation": "ListServerCertificates" },
        "resource": {
          "type": "ServerCertificate",
          "identifiers": [
            { "target": "Name", "source": "response", "path": "ServerCertificateMetadataList[].ServerCertificateName" }
          ]
        }
      },
      "Users": {
        "request": { "operation": "ListUsers" },
        "resource": {
          "type": "User",
          "identifiers": [
            { "target": "Name", "source": "response", "path": "Users[].UserName" }
          ],
          "path": "Users[]"
        }
      },
      "VirtualMfaDevices": {
        "request": { "operation": "ListVirtualMFADevices" },
        "resource": {
          "type": "VirtualMfaDevice",
          "identifiers": [
            { "target": "SerialNumber", "source": "response", "path": "VirtualMFADevices[].SerialNumber" }
          ],
          "path": "VirtualMFADevices[]"
        }
      }
    }
  },
  "resources": {
    "AccessKey": {
      "identifiers": [
        {
          "name": "UserName",
          "memberName": "UserName"
        },
        {
          "name": "Id",
          "memberName": "AccessKeyId"
        }
      ],
      "shape": "AccessKeyMetadata",
      "actions": {
        "Activate": {
          "request": {
            "operation": "UpdateAccessKey",
            "params": [
              { "target": "UserName", "source": "identifier", "name": "UserName" },
              { "target": "AccessKeyId", "source": "identifier", "name": "Id" },
              { "target": "Status", "source": "string", "value": "Active" }
            ]
          }
        },
        "Deactivate": {
          "request": {
            "operation": "UpdateAccessKey",
            "params": [
              { "target": "UserName", "source": "identifier", "name": "UserName" },
              { "target": "AccessKeyId", "source": "identifier", "name": "Id" },
              { "target": "Status", "source": "string", "value": "Inactive" }
            ]
          }
        },
        "Delete": {
          "request": {
            "operation": "DeleteAccessKey",
            "params": [
              { "target": "UserName", "source": "identifier", "name": "UserName" },
              { "target": "AccessKeyId", "source": "identifier", "name": "Id" }
            ]
          }
        }
      },
      "has": {
        "User": {
          "resource": {
            "type": "User",
            "identifiers": [
              { "target": "Name", "source": "identifier", "name": "UserName" }
            ]
          }
        }
      }
    },
    "AccessKeyPair": {
      "identifiers": [
        {
          "name": "UserName",
          "memberName": "UserName"
        },
        {
          "name": "Id",
          "memberName": "AccessKeyId"
        },
        {
          "name": "Secret",
          "memberName": "SecretAccessKey"
        }
      ],
      "shape": "AccessKey",
      "actions": {
        "Activate": {
          "request": {
            "operation": "UpdateAccessKey",
            "params": [
              { "target": "UserName", "source": "identifier", "name": "UserName" },
              { "target": "AccessKeyId", "source": "identifier", "name": "Id" },
              { "target": "Status", "source": "string", "value": "Active" }
            ]
          }
        },
        "Deactivate": {
          "request": {
            "operation": "UpdateAccessKey",
            "params": [
              { "target": "UserName", "source": "identifier", "name": "UserName" },
              { "target": "AccessKeyId", "source": "identifier", "name": "Id" },
              { "target": "Status", "source": "string", "value": "Inactive" }
            ]
          }
        },
        "Delete": {
          "request": {
            "operation": "DeleteAccessKey",
            "params": [
              { "target": "UserName", "source": "identifier", "name": "UserName" },
              { "target": "AccessKeyId", "source": "identifier", "name": "Id" }
            ]
          }
        }
      }
    },
    "AccountPasswordPolicy": {
      "identifiers": [  ],
      "shape": "PasswordPolicy",
      "load": {
        "request": { "operation": "GetAccountPasswordPolicy" },
        "path": "PasswordPolicy"
      },
      "actions": {
        "Delete": {
          "request": { "operation": "DeleteAccountPasswordPolicy" }
        },
        "Update": {
          "request": { "operation": "UpdateAccountPasswordPolicy" }
        }
      }
    },
    "AccountSummary": {
      "identifiers": [  ],
      "shape": "GetAccountSummaryResponse",
      "load": {
        "request": { "operation": "GetAccountSummary" },
        "path": "@"
      }
    },
    "AssumeRolePolicy": {
      "identifiers": [
        { "name": "RoleName" }
      ],
      "actions": {
        "Update": {
          "request": {
            "operation": "UpdateAssumeRolePolicy",
            "params": [
              { "target": "RoleName", "source": "identifier", "name": "RoleName" }
            ]
          }
        }
      },
      "has": {
        "Role": {
          "resource": {
            "type": "Role",
            "identifiers": [
              { "target": "Name", "source": "identifier", "name": "RoleName" }
            ]
          }
        }
      }
    },
    "CurrentUser": {
      "identifiers": [  ],
      "shape": "User",
      "load": {
        "request": { "operation": "GetUser" },
        "path": "User"
      },
      "has": {
        "User": {
          "resource": {
            "type": "User",
            "identifiers": [
              { "target": "Name", "source": "data", "path": "UserName" }
            ]
          }
        }
      },
      "hasMany": {
        "AccessKeys": {
          "request": { "operation": "ListAccessKeys" },
          "resource": {
            "type": "AccessKey",
            "identifiers": [
              { "target": "UserName", "source": "response", "path": "AccessKeyMetadata[].UserName" },
              { "target": "Id", "source": "response", "path": "AccessKeyMetadata[].AccessKeyId" }
            ],
            "path": "AccessKeyMetadata[]"
          }
        },
        "MfaDevices": {
          "request": { "operation": "ListMFADevices" },
          "resource": {
            "type": "MfaDevice",
            "identifiers": [
              { "target": "UserName", "source": "response", "path": "MFADevices[].UserName" },
              { "target": "SerialNumber", "source": "response", "path": "MFADevices[].SerialNumber" }
            ],
            "path": "MFADevices[]"
          }
        },
        "SigningCertificates": {
          "request": { "operation": "ListSigningCertificates" },
          "resource": {
            "type": "SigningCertificate",
            "identifiers": [
              { "target": "UserName", "source": "response", "path": "Certificates[].UserName" },
              { "target": "Id", "source": "response", "path": "Certificates[].CertificateId" }
            ],
            "path": "Certificates[]"
          }
        }
      }
    },
    "Group": {
      "identifiers": [
        {
          "name": "Name",
          "memberName": "GroupName"
        }
      ],
      "shape": "Group",
      "load": {
        "request": {
          "operation": "GetGroup",
          "params": [
            { "target": "GroupName", "source": "identifier", "name": "Name" }
          ]
        },
        "path": "Group"
      },
      "actions": {
        "AddUser": {
          "request": {
            "operation": "AddUserToGroup",
            "params": [
              { "target": "GroupName", "source": "identifier", "name": "Name" }
            ]
          }
        },
        "AttachPolicy": {
          "request": {
            "operation": "AttachGroupPolicy",
            "params": [
              { "target": "GroupName", "source": "identifier", "name": "Name" }
            ]
          }
        },
        "Create": {
          "request": {
            "operation": "CreateGroup",
            "params": [
              { "target": "GroupName", "source": "identifier", "name": "Name" }
            ]
          },
          "resource": {
            "type": "Group",
            "identifiers": [
              { "target": "Name", "source": "requestParameter", "path": "GroupName" }
            ],
            "path": "Group"
          }
        },
        "CreatePolicy": {
          "request": {
            "operation": "PutGroupPolicy",
            "params": [
              { "target": "GroupName", "source": "identifier", "name": "Name" }
            ]
          },
          "resource": {
            "type": "GroupPolicy",
            "identifiers": [
              { "target": "GroupName", "source": "identifier", "name": "Name" },
              { "target": "Name", "source": "requestParameter", "path": "PolicyName" }
            ]
          }
        },
        "Delete": {
          "request": {
            "operation": "DeleteGroup",
            "params": [
              { "target": "GroupName", "source": "identifier", "name": "Name" }
            ]
          }
        },
        "DetachPolicy": {
          "request": {
            "operation": "DetachGroupPolicy",
            "params": [
              { "target": "GroupName", "source": "identifier", "name": "Name" }
            ]
          }
        },
        "RemoveUser": {
          "request": {
            "operation": "RemoveUserFromGroup",
            "params": [
              { "target": "GroupName", "source": "identifier", "name": "Name" }
            ]
          }
        },
        "Update": {
          "request": {
            "operation": "UpdateGroup",
            "params": [
              { "target": "GroupName", "source": "identifier", "name": "Name" }
            ]
          },
          "resource": {
            "type": "Group",
            "identifiers": [
              { "target": "Name", "source": "requestParameter", "path": "NewGroupName" }
            ]
          }
        }
      },
      "has": {
        "Policy": {
          "resource": {
            "type": "GroupPolicy",
            "identifiers": [
              { "target": "GroupName", "source": "identifier", "name": "Name" },
              { "target": "Name", "source": "input" }
            ]
          }
        }
      },
      "hasMany": {
        "AttachedPolicies": {
          "request": {
            "operation": "ListAttachedGroupPolicies",
            "params": [
              { "target": "GroupName", "source": "identifier", "name": "Name" }
            ]
          },
          "resource": {
            "type": "Policy",
            "identifiers": [
              { "target": "Arn", "source": "response", "path": "AttachedPolicies[].PolicyArn" }
            ]
          }
        },
        "Policies": {
          "request": {
            "operation": "ListGroupPolicies",
            "params": [
              { "target": "GroupName", "source": "identifier", "name": "Name" }
            ]
          },
          "resource": {
            "type": "GroupPolicy",
            "identifiers": [
              { "target": "GroupName", "source": "identifier", "name": "Name" },
              { "target": "Name", "source": "response", "path": "PolicyNames[]" }
            ]
          }
        },
        "Users": {
          "request": {
            "operation": "GetGroup",
            "params": [
              { "target": "GroupName", "source": "identifier", "name": "Name" }
            ]
          },
          "resource": {
            "type": "User",
            "identifiers": [
              { "target": "Name", "source": "response", "path": "Users[].UserName" }
            ],
            "path": "Users[]"
          }
        }
      }
    },
    "GroupPolicy": {
      "identifiers": [
        {
          "name": "GroupName",
          "memberName": "GroupName"
        },
        {
          "name": "Name",
          "memberName": "PolicyName"
        }
      ],
      "shape": "GetGroupPolicyResponse",
      "load": {
        "request": {
          "operation": "GetGroupPolicy",
          "params": [
            { "target": "GroupName", "source": "identifier", "name": "GroupName" },
            { "target": "PolicyName", "source": "identifier", "name": "Name" }
          ]
        },
        "path": "@"
      },
      "actions": {
        "Delete": {
          "request": {
            "operation": "DeleteGroupPolicy",
            "params": [
              { "target": "GroupName", "source": "identifier", "name": "GroupName" },
              { "target": "PolicyName", "source": "identifier", "name": "Name" }
            ]
          }
        },
        "Put": {
          "request": {
            "operation": "PutGroupPolicy",
            "params": [
              { "target": "GroupName", "source": "identifier", "name": "GroupName" },
              { "target": "PolicyName", "source": "identifier", "name": "Name" }
            ]
          }
        }
      },
      "has": {
        "Group": {
          "resource": {
            "type": "Group",
            "identifiers": [
              { "target": "Name", "source": "identifier", "name": "GroupName" }
            ]
          }
        }
      }
    },
    "InstanceProfile": {
      "identifiers": [
        {
          "name": "Name",
          "memberName": "InstanceProfileName"
        }
      ],
      "shape": "InstanceProfile",
      "load": {
        "request": {
          "operation": "GetInstanceProfile",
          "params": [
            { "target": "InstanceProfileName", "source": "identifier", "name": "Name" }
          ]
        },
        "path": "InstanceProfile"
      },
      "actions": {
        "AddRole": {
          "request": {
            "operation": "AddRoleToInstanceProfile",
            "params": [
              { "target": "InstanceProfileName", "source": "identifier", "name": "Name" }
            ]
          }
        },
        "Delete": {
          "request": {
            "operation": "DeleteInstanceProfile",
            "params": [
              { "target": "InstanceProfileName", "source": "identifier", "name": "Name" }
            ]
          }
        },
        "RemoveRole": {
          "request": {
            "operation": "RemoveRoleFromInstanceProfile",
            "params": [
              { "target": "InstanceProfileName", "source": "identifier", "name": "Name" }
            ]
          }
        }
      },
      "has": {
        "Roles": {
          "resource": {
            "type": "Role",
            "identifiers": [
              { "target": "Name", "source": "data", "path": "Roles[].RoleName" }
            ],
            "path": "Roles[]"
          }
        }
      }
    },
    "LoginProfile": {
      "identifiers": [
        {
          "name": "UserName",
          "memberName": "UserName"
        }
      ],
      "shape": "LoginProfile",
      "load": {
        "request": {
          "operation": "GetLoginProfile",
          "params": [
            { "target": "UserName", "source": "identifier", "name": "UserName" }
          ]
        },
        "path": "LoginProfile"
      },
      "actions": {
        "Create": {
          "request": {
            "operation": "CreateLoginProfile",
            "params": [
              { "target": "UserName", "source": "identifier", "name": "UserName" }
            ]
          },
          "resource": {
            "type": "LoginProfile",
            "identifiers": [
              { "target": "UserName", "source": "response", "path": "LoginProfile.UserName" }
            ],
            "path": "LoginProfile"
          }
        },
        "Delete": {
          "request": {
            "operation": "DeleteLoginProfile",
            "params": [
              { "target": "UserName", "source": "identifier", "name": "UserName" }
            ]
          }
        },
        "Update": {
          "request": {
            "operation": "UpdateLoginProfile",
            "params": [
              { "target": "UserName", "source": "identifier", "name": "UserName" }
            ]
          }
        }
      },
      "has": {
        "User": {
          "resource": {
            "type": "User",
            "identifiers": [
              { "target": "Name", "source": "identifier", "name": "UserName" }
            ]
          }
        }
      }
    },
    "MfaDevice": {
      "identifiers": [
        {
          "name": "UserName",
          "memberName": "UserName"
        },
        {
          "name": "SerialNumber",
          "memberName": "SerialNumber"
        }
      ],
      "shape": "MFADevice",
      "actions": {
        "Associate": {
          "request": {
            "operation": "EnableMFADevice",
            "params": [
              { "target": "UserName", "source": "identifier", "name": "UserName" },
              { "target": "SerialNumber", "source": "identifier", "name": "SerialNumber" }
            ]
          }
        },
        "Disassociate": {
          "request": {
            "operation": "DeactivateMFADevice",
            "params": [
              { "target": "UserName", "source": "identifier", "name": "UserName" },
              { "target": "SerialNumber", "source": "identifier", "name": "SerialNumber" }
            ]
          }
        },
        "Resync": {
          "request": {
            "operation": "ResyncMFADevice",
            "params": [
              { "target": "UserName", "source": "identifier", "name": "UserName" },
              { "target": "SerialNumber", "source": "identifier", "name": "SerialNumber" }
            ]
          }
        }
      },
      "has": {
        "User": {
          "resource": {
            "type": "User",
            "identifiers": [
              { "target": "Name", "source": "identifier", "name": "UserName" }
            ]
          }
        }
      }
    },
    "Policy": {
      "identifiers": [
        {
          "name": "Arn",
          "memberName": "Arn"
        }
      ],
      "shape": "Policy",
      "load": {
        "request": {
          "operation": "GetPolicy",
          "params": [
            { "target": "PolicyArn", "source": "identifier", "name": "Arn" }
          ]
        },
        "path": "Policy"
      },
      "actions": {
        "AttachGroup": {
          "request": {
            "operation": "AttachGroupPolicy",
            "params": [
              { "target": "PolicyArn", "source": "identifier", "name": "Arn" }
            ]
          }
        },
        "AttachRole": {
          "request": {
            "operation": "AttachRolePolicy",
            "params": [
              { "target": "PolicyArn", "source": "identifier", "name": "Arn" }
            ]
          }
        },
        "AttachUser": {
          "request": {
            "operation": "AttachUserPolicy",
            "params": [
              { "target": "PolicyArn", "source": "identifier", "name": "Arn" }
            ]
          }
        },
        "CreateVersion": {
          "request": {
            "operation": "CreatePolicyVersion",
            "params": [
              { "target": "PolicyArn", "source": "identifier", "name": "Arn" }
            ]
          },
          "resource": {
            "type": "PolicyVersion",
            "identifiers": [
              { "target": "Arn", "source": "identifier", "name": "Arn" },
              { "target": "VersionId", "source": "response", "path": "PolicyVersion.VersionId" }
            ]
          }
        },
        "Delete": {
          "request": {
            "operation": "DeletePolicy",
            "params": [
              { "target": "PolicyArn", "source": "identifier", "name": "Arn" }
            ]
          }
        },
        "DetachGroup": {
          "request": {
            "operation": "DetachGroupPolicy",
            "params": [
              { "target": "PolicyArn", "source": "identifier", "name": "Arn" }
            ]
          }
        },
        "DetachRole": {
          "request": {
            "operation": "DetachRolePolicy",
            "params": [
              { "target": "PolicyArn", "source": "identifier", "name": "Arn" }
            ]
          }
        },
        "DetachUser": {
          "request": {
            "operation": "DetachUserPolicy",
            "params": [
              { "target": "PolicyArn", "source": "identifier", "name": "Arn" }
            ]
          }
        }
      },
      "has": {
        "DefaultVersion": {
          "resource": {
            "type": "PolicyVersion",
            "identifiers": [
              { "target": "Arn", "source": "identifier", "name": "Arn" },
              { "target": "VersionId", "source": "data", "path": "DefaultVersionId" }
            ]
          }
        }
      },
      "hasMany": {
        "AttachedGroups": {
          "request": {
            "operation": "ListEntitiesForPolicy",
            "params": [
              { "target": "PolicyArn", "source": "identifier", "name": "Arn" },
              { "target": "EntityFilter", "source": "string", "value": "Group" }
            ]
          },
          "resource": {
            "type": "Group",
            "identifiers": [
              { "target": "Name", "source": "response", "path": "PolicyGroups[].GroupName" }
            ]
          }
        },
        "AttachedRoles": {
          "request": {
            "operation": "ListEntitiesForPolicy",
            "params": [
              { "target": "PolicyArn", "source": "identifier", "name": "Arn" },
              { "target": "EntityFilter", "source": "string", "value": "Role" }
            ]
          },
          "resource": {
            "type": "Role",
            "identifiers": [
              { "target": "Name", "source": "response", "path": "PolicyRoles[].RoleName" }
            ]
          }
        },
        "AttachedUsers": {
          "request": {
            "operation": "ListEntitiesForPolicy",
            "params": [
              { "target": "PolicyArn", "source": "identifier", "name": "Arn" },
              { "target": "EntityFilter", "source": "string", "value": "User" }
            ]
          },
          "resource": {
            "type": "User",
            "identifiers": [
              { "target": "Name", "source": "response", "path": "PolicyUsers[].UserName" }
            ]
          }
        },
        "Versions": {
          "request": {
            "operation": "ListPolicyVersions",
            "params": [
              { "target": "PolicyArn", "source": "identifier", "name": "Arn" }
            ]
          },
          "resource": {
            "type": "PolicyVersion",
            "identifiers": [
              { "target": "Arn", "source": "identifier", "name": "Arn" },
              { "target": "VersionId", "source": "response", "path": "Versions[].VersionId" }
            ],
            "path": "Versions[]"
          }
        }
      }
    },
    "PolicyVersion": {
      "identifiers": [
        { "name": "Arn" },
        { "name": "VersionId" }
      ],
      "shape": "PolicyVersion",
      "load": {
        "request": {
          "operation": "GetPolicyVersion",
          "params": [
            { "target": "PolicyArn", "source": "identifier", "name": "Arn" },
            { "target": "VersionId", "source": "identifier", "name": "VersionId" }
          ]
        },
        "path": "PolicyVersion"
      },
      "actions": {
        "Delete": {
          "request": {
            "operation": "DeletePolicyVersion",
            "params": [
              { "target": "PolicyArn", "source": "identifier", "name": "Arn" },
              { "target": "VersionId", "source": "identifier", "name": "VersionId" }
            ]
          }
        },
        "SetAsDefault": {
          "request": {
            "operation": "SetDefaultPolicyVersion",
            "params": [
              { "target": "PolicyArn", "source": "identifier", "name": "Arn" },
              { "target": "VersionId", "source": "identifier", "name": "VersionId" }
            ]
          }
        }
      }
    },
    "Role": {
      "identifiers": [
        {
          "name": "Name",
          "memberName": "RoleName"
        }
      ],
      "shape": "Role",
      "load": {
        "request": {
          "operation": "GetRole",
          "params": [
            { "target": "RoleName", "source": "identifier", "name": "Name" }
          ]
        },
        "path": "Role"
      },
      "actions": {
        "AttachPolicy": {
          "request": {
            "operation": "AttachRolePolicy",
            "params": [
              { "target": "RoleName", "source": "identifier", "name": "Name" }
            ]
          }
        },
        "Delete": {
          "request": {
            "operation": "DeleteRole",
            "params": [
              { "target": "RoleName", "source": "identifier", "name": "Name" }
            ]
          }
        },
        "DetachPolicy": {
          "request": {
            "operation": "DetachRolePolicy",
            "params": [
              { "target": "RoleName", "source": "identifier", "name": "Name" }
            ]
          }
        }
      },
      "has": {
        "AssumeRolePolicy": {
          "resource": {
            "type": "AssumeRolePolicy",
            "identifiers": [
              { "target": "RoleName", "source": "identifier", "name": "Name" }
            ]
          }
        },
        "Policy": {
          "resource": {
            "type": "RolePolicy",
            "identifiers": [
              { "target": "RoleName", "source": "identifier", "name": "Name" },
              { "target": "Name", "source": "input" }
            ]
          }
        }
      },
      "hasMany": {
        "AttachedPolicies": {
          "request": {
            "operation": "ListAttachedRolePolicies",
            "params": [
              { "target": "RoleName", "source": "identifier", "name": "Name" }
            ]
          },
          "resource": {
            "type": "Policy",
            "identifiers": [
              { "target": "Arn", "source": "response", "path": "AttachedPolicies[].PolicyArn" }
            ]
          }
        },
        "InstanceProfiles": {
          "request": {
            "operation": "ListInstanceProfilesForRole",
            "params": [
              { "target": "RoleName", "source": "identifier", "name": "Name" }
            ]
          },
          "resource": {
            "type": "InstanceProfile",
            "identifiers": [
              { "target": "Name", "source": "response", "path": "InstanceProfiles[].InstanceProfileName" }
            ],
            "path": "InstanceProfiles[]"
          }
        },
        "Policies": {
          "request": {
            "operation": "ListRolePolicies",
            "params": [
              { "target": "RoleName", "source": "identifier", "name": "Name" }
            ]
          },
          "resource": {
            "type": "RolePolicy",
            "identifiers": [
              { "target": "RoleName", "source": "identifier", "name": "Name" },
              { "target": "Name", "source": "response", "path": "PolicyNames[]" }
            ]
          }
        }
      }
    },
    "RolePolicy": {
      "identifiers": [
        {
          "name": "RoleName",
          "memberName": "RoleName"
        },
        {
          "name": "Name",
          "memberName": "PolicyName"
        }
      ],
      "shape": "GetRolePolicyResponse",
      "load": {
        "request": {
          "operation": "GetRolePolicy",
          "params": [
            { "target": "RoleName", "source": "identifier", "name": "RoleName" },
            { "target": "PolicyName", "source": "identifier", "name": "Name" }
          ]
        },
        "path": "@"
      },
      "actions": {
        "Delete": {
          "request": {
            "operation": "DeleteRolePolicy",
            "params": [
              { "target": "RoleName", "source": "identifier", "name": "RoleName" },
              { "target": "PolicyName", "source": "identifier", "name": "Name" }
            ]
          }
        },
        "Put": {
          "request": {
            "operation": "PutRolePolicy",
            "params": [
              { "target": "RoleName", "source": "identifier", "name": "RoleName" },
              { "target": "PolicyName", "source": "identifier", "name": "Name" }
            ]
          }
        }
      },
      "has": {
        "Role": {
          "resource": {
            "type": "Role",
            "identifiers": [
              { "target": "Name", "source": "identifier", "name": "RoleName" }
            ]
          }
        }
      }
    },
    "SamlProvider": {
      "identifiers": [
        { "name": "Arn" }
      ],
      "shape": "GetSAMLProviderResponse",
      "load": {
        "request": {
          "operation": "GetSAMLProvider",
          "params": [
            { "target": "SAMLProviderArn", "source": "identifier", "name": "Arn" }
          ]
        },
        "path": "@"
      },
      "actions": {
        "Delete": {
          "request": {
            "operation": "DeleteSAMLProvider",
            "params": [
              { "target": "SAMLProviderArn", "source": "identifier", "name": "Arn" }
            ]
          }
        },
        "Update": {
          "request": {
            "operation": "UpdateSAMLProvider",
            "params": [
              { "target": "SAMLProviderArn", "source": "identifier", "name": "Arn" }
            ]
          }
        }
      }
    },
    "ServerCertificate": {
      "identifiers": [
        { "name": "Name" }
      ],
      "shape": "ServerCertificate",
      "load": {
        "request": {
          "operation": "GetServerCertificate",
          "params": [
            { "target": "ServerCertificateName", "source": "identifier", "name": "Name" }
          ]
        },
        "path": "ServerCertificate"
      },
      "actions": {
        "Delete": {
          "request": {
            "operation": "DeleteServerCertificate",
            "params": [
              { "target": "ServerCertificateName", "source": "identifier", "name": "Name" }
            ]
          }
        },
        "Update": {
          "request": {
            "operation": "UpdateServerCertificate",
            "params": [
              { "target": "ServerCertificateName", "source": "identifier", "name": "Name" }
            ]
          },
          "resource": {
            "type": "ServerCertificate",
            "identifiers": [
              { "target": "Name", "source": "requestParameter", "path": "NewServerCertificateName" }
            ]
          }
        }
      }
    },
    "SigningCertificate": {
      "identifiers": [
        {
          "name": "UserName",
          "memberName": "UserName"
        },
        {
          "name": "Id",
          "memberName": "CertificateId"
        }
      ],
      "shape": "SigningCertificate",
      "actions": {
        "Activate": {
          "request": {
            "operation": "UpdateSigningCertificate",
            "params": [
              { "target": "UserName", "source": "identifier", "name": "UserName" },
              { "target": "CertificateId", "source": "identifier", "name": "Id" },
              { "target": "Status", "source": "string", "value": "Active" }
            ]
          }
        },
        "Deactivate": {
          "request": {
            "operation": "UpdateSigningCertificate",
            "params": [
              { "target": "UserName", "source": "identifier", "name": "UserName" },
              { "target": "CertificateId", "source": "identifier", "name": "Id" },
              { "target": "Status", "source": "string", "value": "Inactive" }
            ]
          }
        },
        "Delete": {
          "request": {
            "operation": "DeleteSigningCertificate",
            "params": [
              { "target": "UserName", "source": "identifier", "name": "UserName" },
              { "target": "CertificateId", "source": "identifier", "name": "Id" }
            ]
          }
        }
      },
      "has": {
        "User": {
          "resource": {
            "type": "User",
            "identifiers": [
              { "target": "Name", "source": "identifier", "name": "UserName" }
            ]
          }
        }
      }
    },
    "User": {
      "identifiers": [
        {
          "name": "Name",
          "memberName": "UserName"
        }
      ],
      "shape": "User",
      "load": {
        "request": {
          "operation": "GetUser",
          "params": [
            { "target": "UserName", "source": "identifier", "name": "Name" }
          ]
        },
        "path": "User"
      },
      "actions": {
        "AddGroup": {
          "request": {
            "operation": "AddUserToGroup",
            "params": [
              { "target": "UserName", "source": "identifier", "name": "Name" }
            ]
          }
        },
        "AttachPolicy": {
          "request": {
            "operation": "AttachUserPolicy",
            "params": [
              { "target": "UserName", "source": "identifier", "name": "Name" }
            ]
          }
        },
        "Create": {
          "request": {
            "operation": "CreateUser",
            "params": [
              { "target": "UserName", "source": "identifier", "name": "Name" }
            ]
          },
          "resource": {
            "type": "User",
            "identifiers": [
              { "target": "Name", "source": "requestParameter", "path": "UserName" }
            ],
            "path": "User"
          }
        },
        "CreateAccessKeyPair": {
          "request": {
            "operation": "CreateAccessKey",
            "params": [
              { "target": "UserName", "source": "identifier", "name": "Name" }
            ]
          },
          "resource": {
            "type": "AccessKeyPair",
            "identifiers": [
              { "target": "UserName", "source": "identifier", "name": "Name" },
              { "target": "Id", "source": "response", "path": "AccessKey.AccessKeyId" },
              { "target": "Secret", "source": "response", "path": "AccessKey.SecretAccessKey" }
            ],
            "path": "AccessKey"
          }
        },
        "CreateLoginProfile": {
          "request": {
            "operation": "CreateLoginProfile",
            "params": [
              { "target": "UserName", "source": "identifier", "name": "Name" }
            ]
          },
          "resource": {
            "type": "LoginProfile",
            "identifiers": [
              { "target": "UserName", "source": "response", "path": "LoginProfile.UserName" }
            ],
            "path": "LoginProfile"
          }
        },
        "CreatePolicy": {
          "request": {
            "operation": "PutUserPolicy",
            "params": [
              { "target": "UserName", "source": "identifier", "name": "Name" }
            ]
          },
          "resource": {
            "type": "UserPolicy",
            "identifiers": [
              { "target": "UserName", "source": "identifier", "name": "Name" },
              { "target": "Name", "source": "requestParameter", "path": "PolicyName" }
            ]
          }
        },
        "Delete": {
          "request": {
            "operation": "DeleteUser",
            "params": [
              { "target": "UserName", "source": "identifier", "name": "Name" }
            ]
          }
        },
        "DetachPolicy": {
          "request": {
            "operation": "DetachUserPolicy",
            "params": [
              { "target": "UserName", "source": "identifier", "name": "Name" }
            ]
          }
        },
        "EnableMfa": {
          "request": {
            "operation": "EnableMFADevice",
            "params": [
              { "target": "UserName", "source": "identifier", "name": "Name" }
            ]
          },
          "resource": {
            "type": "MfaDevice",
            "identifiers": [
              { "target": "UserName", "source": "identifier", "name": "Name" },
              { "target": "SerialNumber", "source": "requestParameter", "path": "SerialNumber" }
            ]
          }
        },
        "RemoveGroup": {
          "request": {
            "operation": "RemoveUserFromGroup",
            "params": [
              { "target": "UserName", "source": "identifier", "name": "Name" }
            ]
          }
        },
        "Update": {
          "request": {
            "operation": "UpdateUser",
            "params": [
              { "target": "UserName", "source": "identifier", "name": "Name" }
            ]
          },
          "resource": {
            "type": "User",
            "identifiers": [
              { "target": "Name", "source": "requestParameter", "path": "NewUserName" }
            ]
          }
        }
      },
      "has": {
        "AccessKey": {
          "resource": {
            "type": "AccessKey",
            "identifiers": [
              { "target": "UserName", "source": "identifier", "name": "Name" },
              { "target": "Id", "source": "input" }
            ]
          }
        },
        "LoginProfile": {
          "resource": {
            "type": "LoginProfile",
            "identifiers": [
              { "target": "UserName", "source": "identifier", "name": "Name" }
            ]
          }
        },
        "MfaDevice": {
          "resource": {
            "type": "MfaDevice",
            "identifiers": [
              { "target": "UserName", "source": "identifier", "name": "Name" },
              { "target": "SerialNumber", "source": "input" }
            ]
          }
        },
        "Policy": {
          "resource": {
            "type": "UserPolicy",
            "identifiers": [
              { "target": "UserName", "source": "identifier", "name": "Name" },
              { "target": "Name", "source": "input" }
            ]
          }
        },
        "SigningCertificate": {
          "resource": {
            "type": "SigningCertificate",
            "identifiers": [
              { "target": "UserName", "source": "identifier", "name": "Name" },
              { "target": "Id", "source": "input" }
            ]
          }
        }
      },
      "hasMany": {
        "AccessKeys": {
          "request": {
            "operation": "ListAccessKeys",
            "params": [
              { "target": "UserName", "source": "identifier", "name": "Name" }
            ]
          },
          "resource": {
            "type": "AccessKey",
            "identifiers": [
              { "target": "UserName", "source": "identifier", "name": "Name" },
              { "target": "Id", "source": "response", "path": "AccessKeyMetadata[].AccessKeyId" }
            ],
            "path": "AccessKeyMetadata[]"
          }
        },
        "AttachedPolicies": {
          "request": {
            "operation": "ListAttachedUserPolicies",
            "params": [
              { "target": "UserName", "source": "identifier", "name": "Name" }
            ]
          },
          "resource": {
            "type": "Policy",
            "identifiers": [
              { "target": "Arn", "source": "response", "path": "AttachedPolicies[].PolicyArn" }
            ]
          }
        },
        "Groups": {
          "request": {
            "operation": "ListGroupsForUser",
            "params": [
              { "target": "UserName", "source": "identifier", "name": "Name" }
            ]
          },
          "resource": {
            "type": "Group",
            "identifiers": [
              { "target": "Name", "source": "response", "path": "Groups[].GroupName" }
            ],
            "path": "Groups[]"
          }
        },
        "MfaDevices": {
          "request": {
            "operation": "ListMFADevices",
            "params": [
              { "target": "UserName", "source": "identifier", "name": "Name" }
            ]
          },
          "resource": {
            "type": "MfaDevice",
            "identifiers": [
              { "target": "UserName", "source": "identifier", "name": "Name" },
              { "target": "SerialNumber", "source": "response", "path": "MFADevices[].SerialNumber" }
            ],
            "path": "MFADevices[]"
          }
        },
        "Policies": {
          "request": {
            "operation": "ListUserPolicies",
            "params": [
              { "target": "UserName", "source": "identifier", "name": "Name" }
            ]
          },
          "resource": {
            "type": "UserPolicy",
            "identifiers": [
              { "target": "UserName", "source": "identifier", "name": "Name" },
              { "target": "Name", "source": "response", "path": "PolicyNames[]" }
            ]
          }
        },
        "SigningCertificates": {
          "request": {
            "operation": "ListSigningCertificates",
            "params": [
              { "target": "UserName", "source": "identifier", "name": "Name" }
            ]
          },
          "resource": {
            "type": "SigningCertificate",
            "identifiers": [
              { "target": "UserName", "source": "identifier", "name": "Name" },
              { "target": "Id", "source": "response", "path": "Certificates[].CertificateId" }
            ],
            "path": "Certificates[]"
          }
        }
      }
    },
    "UserPolicy": {
      "identifiers": [
        {
          "name": "UserName",
          "memberName": "UserName"
        },
        {
          "name": "Name",
          "memberName": "PolicyName"
        }
      ],
      "shape": "GetUserPolicyResponse",
      "load": {
        "request": {
          "operation": "GetUserPolicy",
          "params": [
            { "target": "UserName", "source": "identifier", "name": "UserName" },
            { "target": "PolicyName", "source": "identifier", "name": "Name" }
          ]
        },
        "path": "@"
      },
      "actions": {
        "Delete": {
          "request": {
            "operation": "DeleteUserPolicy",
            "params": [
              { "target": "UserName", "source": "identifier", "name": "UserName" },
              { "target": "PolicyName", "source": "identifier", "name": "Name" }
            ]
          }
        },
        "Put": {
          "request": {
            "operation": "PutUserPolicy",
            "params": [
              { "target": "UserName", "source": "identifier", "name": "UserName" },
              { "target": "PolicyName", "source": "identifier", "name": "Name" }
            ]
          }
        }
      },
      "has": {
        "User": {
          "resource": {
            "type": "User",
            "identifiers": [
              { "target": "Name", "source": "identifier", "name": "UserName" }
            ]
          }
        }
      }
    },
    "VirtualMfaDevice": {
      "identifiers": [
        {
          "name": "SerialNumber",
          "memberName": "SerialNumber"
        }
      ],
      "shape": "VirtualMFADevice",
      "actions": {
        "Delete": {
          "request": {
            "operation": "DeleteVirtualMFADevice",
            "params": [
              { "target": "SerialNumber", "source": "identifier", "name": "SerialNumber" }
            ]
          }
        }
      },
      "has": {
        "User": {
          "resource": {
            "type": "User",
            "identifiers": [
              { "target": "Name", "source": "data", "path": "User.UserName" }
            ]
          }
        }
      }
    }
  }
}
