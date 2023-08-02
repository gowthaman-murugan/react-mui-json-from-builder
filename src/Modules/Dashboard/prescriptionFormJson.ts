/* eslint-disable prettier/prettier */
export const jsonSchemaDefault = {
	"type": "object",
	"properties": {
		"estimated_treatment_time": {
			"type": "string",
			"isInput": true,
			"label": "Estimated Treatment Time (months)"
		},

		"arches_to_treat": {
			"isArchesTreat": true,
			"title": "Which Arches would you like to treat?",
			"archKeys": ["isChecked", "aligner_type", "aligner_items"],
			"type": "object",
			"properties": {
				"upper": {
					"type": "object",
					"title": "",
					"properties": {
						"isChecked": {
							"type": "boolean",
							"label": "Upper"
						},
						"aligner_type": {
							"isUSelect": true,
							"type": "string",
							"enum": [
								"Aligner",
								"Retainer Only"
							],
							"default": "Aligner"
						},
						"aligner_items": {
							"type": "array",
							"uniqueItems": true,
							"items": {
								"oneOf": [
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
					},

				},
				"lower": {
					"type": "object",
					"properties": {
						"isChecked": {
							"type": "boolean",
							"label": "Lower"
						},
						"aligner_type": {
							"isUSelect": true,
							"type": "string",
							"enum": [
								"Aligner",
								"Retainer Only"
							],
							"default": "Aligner"
						},
						"aligner_items": {
							"type": "array",
							"uniqueItems": true,
							"items": {
								"oneOf": [
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
		"restorations": {
			"isRadioTextGroup": true,
			"label": "Planning for Restoration, Pontic or Eruption Dome?",
			"type": "object",
			"properties": {
				"planning_for_restorations": {
					"type": "string",
					"enum": [
						"Yes",
						"No"
					],
					"options": {
						"propertieName": "planning_for_restorations_details",
						"propertyScope": "planning_for_restorations_details",
						"propertieDisplay": "Yes"
					}
				},
				"planning_for_restorations_details": {
					"isInput": true,
					"type": "string",
					"options": {
						"placeholder": "Please add details for restorations",

					}

				}
			},
			"required": [
				"planning_for_restorations_details",
				"planning_for_restorations"
			]

		},
		"smart_rx_template": {
			"title": "Which Smart Rx Template would you like to use for this case?",
			"isUSelect": true,
			"type": "string",
			"enum": [
				"Crowding",
				"Spacing",
				"Open Bite",
				"Deep Bite",
				"Limited Treatment"],

		},
		"case_specific_instructions":{
			"label": "Case Specific Instructions",
			"type": "string",
			"isInput": true,
 		}
	},
	"required": [
		"estimated_treatment_time",
		"arches_to_treat",
		"selected_teeth_to_treat",
		"class_correction",
		"midline_correction",
		"crossbite_correction",
		"restorations"

	],
	"definitions": {
		"aligner_items": {
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
		},
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
					"type": "Control",
					"label": true,
					"scope": "#/properties/arches_to_treat"
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
					"label": true,
					"scope": "#/properties/restorations",

				},
				{
					"type": "Control",
					"scope": "#/properties/smart_rx_template",
					"label": true,
				},
				{
					"type": "Control",
					"scope": "#/properties/case_specific_instructions",
					"label": true,
				},
			]
		}
	]
}


export const defaultData = {
	"arches_to_treat": {
		"upper": {
			"isChecked": true,
			"aligner_type": "Retainer Only",
			"bracket_removal": true
		},
		"lower": {
			"isChecked": true,
			"cover_lingual_bar": true,
			"bracket_removal": true,
			"aligner_type": "Retainer Only"
		}
	},
	"restorations": {
		"planning_for_restorations": "Yes",
		"planning_for_restorations_details": "Please space mesial and distal of the upper right lateral. Approx .5mm "
	},
	"planning_for_restorations": "Yes",
	"crossbite_correction": "Maintain",
	"midline_correction": "Move upper to lower",
	"class_correction": "Correct",
	"estimated_treatment_time": "24"
}