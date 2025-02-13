export default {
  "service": {
    "actions": {
      "BatchGetItem": {
        "request": { "operation": "BatchGetItem" }
      },
      "BatchWriteItem": {
        "request": { "operation": "BatchWriteItem" }
      },
      "CreateTable": {
        "request": { "operation": "CreateTable" },
        "resource": {
          "type": "Table",
          "identifiers": [
            { "target": "Name", "source": "response", "path": "TableDescription.TableName" }
          ],
          "path": "TableDescription"
        }
      }
    },
    "has": {
      "Table": {
        "resource": {
          "type": "Table",
          "identifiers": [
            { "target": "Name", "source": "input" }
          ]
        }
      }
    },
    "hasMany": {
      "Tables": {
        "request": { "operation": "ListTables" },
        "resource": {
          "type": "Table",
          "identifiers": [
            { "target": "Name", "source": "response", "path": "TableNames[]" }
          ]
        }
      }
    }
  },
  "resources": {
    "Table": {
      "identifiers": [
        { 
          "name": "Name",
          "memberName": "TableName"
        }
      ],
      "shape": "TableDescription",
      "load": {
        "request": {
          "operation": "DescribeTable",
          "params": [
            { "target": "TableName", "source": "identifier", "name": "Name" }
          ]
        },
        "path": "Table"
      },
      "actions": {
        "Delete": {
          "request": {
            "operation": "DeleteTable",
            "params": [
              { "target": "TableName", "source": "identifier", "name": "Name" }
            ]
          }
        },
        "DeleteItem": {
          "request": {
            "operation": "DeleteItem",
            "params": [
              { "target": "TableName", "source": "identifier", "name": "Name" }
            ]
          }
        },
        "GetItem": {
          "request": {
            "operation": "GetItem",
            "params": [
              { "target": "TableName", "source": "identifier", "name": "Name" }
            ]
          }
        },
        "PutItem": {
          "request": {
            "operation": "PutItem",
            "params": [
              { "target": "TableName", "source": "identifier", "name": "Name" }
            ]
          }
        },
        "Query": {
          "request": {
            "operation": "Query",
            "params": [
              { "target": "TableName", "source": "identifier", "name": "Name" }
            ]
          }
        },
        "Scan": {
          "request": {
            "operation": "Scan",
            "params": [
              { "target": "TableName", "source": "identifier", "name": "Name" }
            ]
          }
        },
        "Update": {
          "request": {
            "operation": "UpdateTable",
            "params": [
              { "target": "TableName", "source": "identifier", "name": "Name" }
            ]
          },
          "resource": {
            "type": "Table",
            "identifiers": [
              { "target": "Name", "source": "identifier", "name": "Name" }
            ],
            "path": "TableDescription"
          }
        },
        "UpdateItem": {
          "request": {
            "operation": "UpdateItem",
            "params": [
              { "target": "TableName", "source": "identifier", "name": "Name" }
            ]
          }
        }
      },
      "waiters":{
        "Exists": {
          "waiterName": "TableExists",
          "params": [
            { "target": "TableName", "source": "identifier", "name": "Name" }
          ]
        },
        "NotExists": {
          "waiterName": "TableNotExists",
          "params": [
            { "target": "TableName", "source": "identifier", "name": "Name" }
          ]
        }
      }
    }
  }
}
