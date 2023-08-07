import { RankedTester, and, rankWith, schemaMatches } from "@jsonforms/core"

export const UArchesTreatTester: RankedTester = rankWith(
  3,
  and(
    schemaMatches((schema) => {
      return schema.hasOwnProperty("isArchesTreat")
    }),
  ),
)
