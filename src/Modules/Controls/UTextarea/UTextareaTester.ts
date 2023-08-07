import { RankedTester, and, rankWith, schemaMatches } from "@jsonforms/core"
export const UTextareaTester: RankedTester = rankWith(
  3,
  and(
    schemaMatches((schema) => {
      return schema.hasOwnProperty("isTextarea")
    }),
  ),
)
