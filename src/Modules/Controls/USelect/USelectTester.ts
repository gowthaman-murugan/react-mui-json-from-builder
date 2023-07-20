import { RankedTester, and, rankWith, schemaMatches } from "@jsonforms/core"

export const USelectTester: RankedTester = rankWith(
  3,
  and(
    schemaMatches((schema, uiSchema) => {
      return schema.hasOwnProperty("isUSelect")
    }),
  ),
)
