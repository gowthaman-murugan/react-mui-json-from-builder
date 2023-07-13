export  const jsonSchemaDefault = {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        minLength: 1,
      },
      description: {
        type: 'string',
      },
      done: {
        type: 'boolean',
      },
      due_date: {
        type: 'string',
        format: 'date',
      },
      rating: {
        type: 'integer',
        maximum: 5,
      },
      recurrence: {
        type: 'string',
        enum: ['Never', 'Daily', 'Weekly', 'Monthly'],
      },
      recurrence_interval: {
        type: 'integer',
      },
    },
    required: ['name', 'due_date'],
  }


  export const uiSchemaDefault = {
    "type": "VerticalLayout",
    "elements": [
      {
        "type": "Control",
        "label": false,
        "scope": "#/properties/done"
      },
      {
        "type": "Control",
        "scope": "#/properties/name"
      },
      {
        "type": "HorizontalLayout",
        "elements": [
          {
            "type": "Control",
            "scope": "#/properties/due_date"
          },
          {
            "type": "Control",
            "scope": "#/properties/rating"
          }
        ]
      },
      {
        "type": "Control",
        "scope": "#/properties/description",
        "options": {
          "multi": true
        }
      },
      {
        "type": "HorizontalLayout",
        "elements": [
          {
            "type": "Control",
            "scope": "#/properties/recurrence"
          },
          {
            "type": "Control",
            "scope": "#/properties/recurrence_interval",
            "rule": {
              "effect": "HIDE",
              "condition": {
                "scope": "#/properties/recurrence",
                "schema": {
                  "const": "Never"
                }
              }
            }
          }
        ]
      }
    ]
  }