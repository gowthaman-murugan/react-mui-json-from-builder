/* eslint-disable prettier/prettier */
export const jsonSchemaDefault = {
  "type": "object",
  "required": [
    "name",
    "due_date"
  ],
  "properties": {
    "estimated_treatment_time": {
      "type": "string",
      "minLength": 1,
      "label": "Estimated Treatment Time (months)"
    },
    "upper": {
      "oneOf": [
        {
          "const": "aligner",
          "title": "Aligner"
        },
        {
          "const": "retainer_only",
          "title": "Retainer Only"
        }
      ]
    },
    "lower": {
      "oneOf": [
        {
          "const": "aligner",
          "title": "Aligner"
        },
        {
          "const": "retainer_only",
          "title": "Retainer Only"
        }
      ]
    },
    "selected_teeth_to_treat": {
      "type": "string",
      "label": "Select teeth to treat",
      "enum": [
        "3-3",
        "5-5",
        "6-6",
        "7-7"
      ]
    },
    "class_correction": {
      "type": "string",
      "label": "Class Correction",
      "enum": [
        "Maintain",
        "Correct",
        "Accept best fit",
      ]
    },
    "midline_correction": {
      "type": "string",
      "label": "Midline Correction",
      "enum": [
        "Maintain",
        "Move upper to lower",
        "Move lower to upper",
        "Move both"
      ]
    },
    "crossbite_correction": {
      "type": "string",
      "label": "Crossbite Correction",
      "enum": [
        "Not applicable",
        "Maintain",
        "Correct",
      ]
    },
    "planning_for_restorations": {
      "type": "string",
      "label": "Planning for Restorations?",
      "enum": [
        "yes",
        "no",
      ]
    },
   
    "recurrence_interval": {
      "type": "integer"
    }
  }
}
 

export const uiSchemaDefault = {
  "type": "Group",
  "label": "uAssist Prescription",
  "elements":[
    {
      "type": "VerticalLayout",
      "elements": [
        {
          "type": "Control",
          "label": true,
          "scope": "#/properties/estimated_treatment_time"
        },
        {
          "type": "Control",
          "scope": "#/properties/upper"
        },
        {
          "type": "Control",
          "scope": "#/properties/lower"
        },
        {
          "type": "Control",
          "scope": "#/properties/selected_teeth_to_treat",
          "options": {
            "format": "radio"
          }
        },
        {
          "type": "Control",
          "scope": "#/properties/class_correction",
          "options": {
            "format": "radio"
          }
        },
        {
          "type": "Control",
          "scope": "#/properties/midline_correction",
          "options": {
            "format": "radio"
          }
        },{
          "type": "Control",
          "scope": "#/properties/crossbite_correction",
          "options": {
            "format": "radio"
          }
        },{
          "type": "Control",
          "scope": "#/properties/planning_for_restorations",
          "options": {
            "format": "radio"
          }
        }
       
      ],
    }
  ]
 
}
