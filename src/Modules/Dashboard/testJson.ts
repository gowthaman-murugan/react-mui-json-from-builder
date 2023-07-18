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
      "type": 'boolean',
      "label": "Upper"
    },
    "lower": {
      "type": 'boolean',
      "label": "Lower"
    },
    "bracket_removal":{
      "type": 'boolean',
      "label": "Bracket Removal"
    },
    "cover_lingual_bar":{
      "type": 'boolean',
      "label": "Cover Lingual Bar"
    },
    "remove_lingual_bar":{
      "type": 'boolean',
      "label": "Remove Lingual Bar"
    },
    "upper_aligner": {
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
    "lower_aligner": {
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
      "isRadioGroup": true,
      "enum": [
        "3-3",
        "5-5",
        "6-6",
        "7-7"
      ]
    },
    "class_correction": {
      "isRadioGroup": true,
      "type": "string",
      "label": "Class Correction",
      "enum": [
        "Maintain",
        "Correct",
        "Accept best fit",
      ]
    },
    "midline_correction": {
      "isRadioGroup": true,
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
      "isRadioGroup": true,
      "enum": [
        "Not applicable",
        "Maintain",
        "Correct",
      ]
    },
    "planning_for_restorations": {
      "isRadioGroup": true,
      "type": "string",
      "label": "Planning for Restorations?",
      "enum": [
        "yes",
        "no",
      ]
    },
    "test": {
      "type": "string",
      "label": "Midline Correction",
      "isRadioGroup": true,
      "enum": [
        "Maintain",
        "Move upper to lower",
        "Move lower to upper",
        "Move both"
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
          "type": "HorizontalLayout",
          "elements": [
            {
              "type": "Control",
              "scope": "#/properties/upper",
            },
            
            {
              "type": "Control",
              "scope": "#/properties/upper_aligner",
              "label": false
            },
          ]
        },
        {
          "type": "Control",
          "scope": "#/properties/lower",
        },
        {
          "type": "Control",
          "scope": "#/properties/lower_aligner",
          "label": false
        },
        {
          "type": "Control",
          "scope": "#/properties/selected_teeth_to_treat"
        },
        {
          "type": "Control",
          "scope": "#/properties/class_correction"
        },
        {
          "type": "Control",
          "scope": "#/properties/midline_correction"
        },{
          "type": "Control",
          "scope": "#/properties/crossbite_correction",
         
        },{
          "type": "Control",
          "scope": "#/properties/planning_for_restorations",
         
        },
        {
          "type": "Control",
          "scope": "#/properties/test"
        },
       
      ],
    }
  ]
 
}
