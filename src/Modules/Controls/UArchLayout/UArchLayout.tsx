import { MaterialLayoutRenderer } from "@jsonforms/material-renderers"
import { Box, FormControl, FormLabel } from "@mui/material"
import { withJsonFormsLayoutProps } from "@jsonforms/react"
import { LayoutProps } from "@jsonforms/core"
import { FC } from "react"

const MyGroupRenderer: FC<LayoutProps> = (props) => {
  const { uischema, schema, path, visible, renderers } = props

  const layoutProps = {
    elements: uischema.elements,
    schema: schema,
    path: path,
    visible: visible,
    uischema: uischema,
    renderers: renderers
  }

  console.log(".........sdsd...dsd...", layoutProps)
  return (
    <Box sx={{ display: "flex", my: 2 }}>
      <FormControl component="fieldset" variant="standard">
        <FormLabel sx={{ mb: 1 }} component="legend">
          {uischema.label}
        </FormLabel>
        <MaterialLayoutRenderer direction={"column"} {...layoutProps} />
      </FormControl>
    </Box>
  )
}

export default withJsonFormsLayoutProps(MyGroupRenderer)
