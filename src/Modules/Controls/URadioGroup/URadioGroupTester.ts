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
      return schema.hasOwnProperty("isRadioGroup")
    }),
  ),

)
