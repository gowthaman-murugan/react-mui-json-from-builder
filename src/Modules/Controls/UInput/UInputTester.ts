import { RankedTester, and, rankWith, schemaMatches } from "@jsonforms/core"

// export default rankWith(
//   3, //increase rank as needed
//   scopeEndsWith("test"), //
// )

export const UInputTester: RankedTester = rankWith(
  3,
  and(
    schemaMatches((schema) => {
      return schema.hasOwnProperty("isInput")
    }),
  ),
)
