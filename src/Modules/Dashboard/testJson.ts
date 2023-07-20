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
      "isInput": true,
      "label": "Estimated Treatment Time (months)"
    },
    // "arches_to_treat":{
    //   "isArchesTreat": true,
    //   "type": "object",
    //   "properties": {
    //     "upper_to_treat": {
    //         "type": "object",
    //           "properties": {
    //             "upper": {
    //               "type": 'boolean',
    //               "label": "Upper"
    //             },
    //             "upper_aligner": {
    //               "isUSelect": true,
    //               "oneOf": [
    //                 {
    //                   "const": "aligner",
    //                   "title": "Aligner"
    //                 },
    //                 {
    //                   "const": "retainer_only",
    //                   "title": "Retainer Only"
    //                 }
    //               ]
    //             },
    //             "enum": {
    //               "type": "array",
    //               "enum": [
    //                 "Bracket Removal",
    //                 "Cover Lingual Bar",
    //                 "Remove Lingual Bar"
    //               ]
    //             }
               
    //         }
    //       },
    //       "lower_to_treat": {
    //         "type": "object",
    //           "properties": {
    //             "lower": {
    //               "type": 'boolean',
    //               "label": "Lower"
    //             },
    //             "lower_aligner": {
    //               "isUSelect": true,
    //               "oneOf": [
    //                 {
    //                   "const": "aligner",
    //                   "title": "Aligner"
    //                 },
    //                 {
    //                   "const": "retainer_only",
    //                   "title": "Retainer Only"
    //                 }
    //               ]
    //             },
    //             "enum": {
    //               "type": "array",
    //               "enum": [
    //                 "Bracket Removal",
    //                 "Cover Lingual Bar",
    //                 "Remove Lingual Bar"
    //               ]
    //             }
               
    //         }
    //       },
    //   }
    // },
 
    // "upper_to_treat": {
    //   "isArchesTreat": true,
    //   "type": "object",
    //     "properties": {
    //       "upper": {
    //         "type": 'boolean',
    //         "label": "Upper"
    //       },
    //       "upper_aligner": {
    //         "isUSelect": true,
    //         "oneOf": [
    //           {
    //             "const": "aligner",
    //             "title": "Aligner"
    //           },
    //           {
    //             "const": "retainer_only",
    //             "title": "Retainer Only"
    //           }
    //         ]
    //       },
    //   }
    // },
    // "lower_to_treat": {
    //   "isArchesTreat": true,
    //   "type": "object",
    //     "properties": {
    //       "lower": {
    //         "type": 'boolean',
    //         "label": "Lower"
    //       },
    //       "lower_aligner": {
    //         "isUSelect": true,
    //         "oneOf": [
    //           {
    //             "const": "aligner",
    //             "title": "Aligner"
    //           },
    //           {
    //             "const": "retainer_only",
    //             "title": "Retainer Only"
    //           }
    //         ]
    //       },
    //       "enum": {
    //         "type": "array",
    //         "enum": [
    //           "Bracket Removal",
    //           "Cover Lingual Bar",
    //           "Remove Lingual Bar"
    //         ]
    //       }
         
    //   }
    // },
    "upper": {
      "type": 'boolean',
      "label": "Upper"
    },
    "upper_aligner": {
      "isUSelect": true,
      "type": "string",
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
  "elements": [
    {
      "type": "VerticalLayout",
      "elements": [
        {
          "type": "Control",
          "label": true,
          "scope": "#/properties/estimated_treatment_time"
        },
       
        {
          "type": "Group",
          "label": "Which Arches would you like to treat?",
          "elements": [
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
                  "label": false,
                },
                
              ]
            },
            {
                "type": "VerticalLayout",
                "elements": [
                  {
                    "type": "Control",
                    "scope": "#/properties/bracket_removal",
                  },
                  {
                    "type": "Control",
                    "scope": "#/properties/cover_lingual_bar",
                  },
                  {
                    "type": "Control",
                    "scope": "#/properties/remove_lingual_bar",
                  },
                ]
              },
            // {
            //   "type": "Control",
            //   "scope": "#/properties/lower_to_treat",
            //   "label": false,
            // }
          ]
        },
        // {
        //   "type": "Control",
        //   "label": "Which Arches would you like to treat?",
        //   "scope": "#/properties/arches_to_treat"
        // },
          // {
          //   "type": "Group",
          //   "elements": [
          //     {
          //       "type": "HorizontalLayout",
          //       "elements": [
          //         {
          //           "type": "Control",
          //           "scope": "#/properties/upper",
          //         },
    
          //         {
          //           "type": "Control",
          //           "scope": "#/properties/upper_aligner",
          //           "label": false
          //         },
          //       ]
          //     },
          //     {
          //       "type": "VerticalLayout",
          //       "elements": [
          //         {
          //           "type": "Control",
          //           "scope": "#/properties/bracket_removal",
          //         },
          //         {
          //           "type": "Control",
          //           "scope": "#/properties/cover_lingual_bar",
          //         },
          //         {
          //           "type": "Control",
          //           "scope": "#/properties/remove_lingual_bar",
          //         },
          //       ]
          //     },
          //   ]
          // },
          // {
          //   "type": "Group",
          //   "elements": [
          //     {
          //       "type": "HorizontalLayout",
          //       "elements": [
          //         {
          //           "type": "Control",
          //           "scope": "#/properties/lower",
          //         },
          //         {
          //           "type": "Control",
          //           "scope": "#/properties/lower_aligner",
          //           "label": false
          //         },
          //       ]
          //     },
          //     {
          //       "type": "VerticalLayout",
          //       "elements": [
          //         {
          //           "type": "Control",
          //           "scope": "#/properties/bracket_removal",
          //         },
          //         {
          //           "type": "Control",
          //           "scope": "#/properties/cover_lingual_bar",
          //         },
          //         {
          //           "type": "Control",
          //           "scope": "#/properties/remove_lingual_bar",
          //         },
          //       ]
          //     },
          //   ]
          // },
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
        }, {
          "type": "Control",
          "scope": "#/properties/crossbite_correction",

        }, {
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
