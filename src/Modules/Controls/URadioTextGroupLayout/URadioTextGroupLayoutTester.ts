import { RankedTester, rankWith, and, schemaMatches } from "@jsonforms/core"

export const URadioTextGroupLayoutTester: RankedTester = rankWith(
  3,
  and(
    schemaMatches((schema) => {
      return schema.hasOwnProperty("isRadioTextGroup")
    }),
  ),
)
