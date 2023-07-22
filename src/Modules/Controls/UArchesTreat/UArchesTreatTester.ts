import {
  RankedTester,
  and,
  rankWith,
  schemaMatches,
  uiTypeIs,
} from "@jsonforms/core"

// export default rankWith(
//   3, //increase rank as needed
//   scopeEndsWith("test"), //
// )

export const UArchesTreatTester: RankedTester = rankWith(
  3,
  and(
    schemaMatches((schema) => {
      return schema.hasOwnProperty("isArchesTreat")
    }),
  ),
)
