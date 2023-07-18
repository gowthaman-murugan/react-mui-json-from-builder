import {
  RankedTester,
  and,
  isBooleanControl,
  rankWith,
  schemaMatches,
  scopeEndsWith,
} from "@jsonforms/core"

// export default rankWith(
//   3, //increase rank as needed
//   scopeEndsWith("test"), //
// )

export const URadioGroupTester: RankedTester = rankWith(
  3,
  and(
    schemaMatches((schema, uiSchema) => {
      console.log(uiSchema, "...schema..sss: ", schema)

      return schema.hasOwnProperty("isRadioGroup")
    }),
  ),

)
