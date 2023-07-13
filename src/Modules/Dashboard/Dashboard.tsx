import { Grid } from "@mui/material"
import { FC, useEffect, useState } from "react"
import { jsonSchemaDefault } from "./testJson"

const Dashboard: FC = () => {
  const [jsonSchema, setJsonSchema] = useState<any>(jsonSchemaDefault)

  useEffect(() => {
    console.log("..jsonSchema", jsonSchema)
  })

  return (
    <>
      <Grid container spacing={1}>
        <Grid item md={8}>
          <Grid item md={12}>
            {"JSON Schema"}
          </Grid>
          <Grid item container md={12}>
            <Grid item md={10}>
              UiSchema
            </Grid>
            <Grid item md={2}>
              Data
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={4}>
          {" "}
          Render
        </Grid>
      </Grid>
    </>
  )
}
export default Dashboard
