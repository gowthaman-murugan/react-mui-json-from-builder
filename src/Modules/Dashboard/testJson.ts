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
		"upper_arch": {
      "archKeys": ["upper","upper_aligner", "upper_aligner_items"],
      "isArchesTreat": true,
			"type": "object",
			"properties": {
				"upper": {
					"type": "boolean",
					"label": "Upper"
				},
				"upper_aligner": {
					"isUSelect": true,
					"type": "string",
					"enum": [
						"Aligner",
						"Retainer Only"
					],
					"default": "Aligner"
				},
        "upper_aligner_items": {
         "type": "array",
         "uniqueItems": true,
         "isMultiChoice": "true",
          "items": {
            "anyOf": [
              {
                "const": "bracket_removal",
                "title": "Bracket Removal"
              },
              {
                "const": "cover_lingual_bar",
                "title": "Cover Lingual Bar"
              },
              {
                "const": "remove_lingual_bar",
                "title": "Remove Lingual Bar"
              }
            ]
         }
        }


			}
		},
    "lower_arch": {
      "archKeys": ["lower","lower_aligner", "lower_aligner_items"],
      "isArchesTreat": true,
			"type": "object",
			"properties": {
				"lower": {
					"type": "boolean",
					"label": "Lower"
				},
				"lower_aligner": {
					"isUSelect": true,
					"type": "string",
					"enum": [
						"Aligner",
						"Retainer Only"
					],
					"default": "Aligner"
				},
        "lower_aligner_items": {
         "type": "array",
         "uniqueItems": true,
         "isMultiChoice": "true",
          "items": {
            "anyOf": [
              {
                "const": "bracket_removal",
                "title": "Bracket Removal"
              },
              {
                "const": "cover_lingual_bar",
                "title": "Cover Lingual Bar"
              },
              {
                "const": "remove_lingual_bar",
                "title": "Remove Lingual Bar"
              }
            ]
         }
        }


			}
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
				"Accept best fit"
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
				"Correct"
			]
		},
		"planning_for_restorations": {
			"isRadioGroup": true,
			"type": "string",
			"label": "Planning for Restorations?",
			"enum": [
				"yes",
				"no"
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
          "type": "ArchGroup",
          "label": "Which Arches would you like to treat?",
          "elements": [
            {
              "type": "Control",
              "label":false,
                "scope": "#/properties/upper_arch"
            },
            {
              "type": "Control",
              "label":false,
                "scope": "#/properties/lower_arch"
            }
          ]
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
        },
        {
          "type": "Control",
          "scope": "#/properties/crossbite_correction"
        },
        {
          "type": "Control",
          "scope": "#/properties/planning_for_restorations"
        }
      ]
    }
  ]
}