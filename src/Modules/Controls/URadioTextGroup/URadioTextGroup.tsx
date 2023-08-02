import {
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material"
import { JsonFormsDispatch, withJsonFormsLayoutProps } from "@jsonforms/react"
import { LayoutProps, resolveSchema } from "@jsonforms/core"
import { FC } from "react"

const URadioTextGroup: FC<LayoutProps> = (props) => {
  const { uischema, schema, path, visible, renderers, cells, enabled, data } =
    props

  const layoutProps = {
    elements: uischema.elements,
    schema: schema,
    path: path,
    visible: visible,
    uischema: uischema,
    renderers: renderers,
    cells: cells,
    enabled: enabled,
    data: data,
  }

  console.log(uischema, "......sss.....sss...", layoutProps)

  const delegateSchema = resolveSchema(
    schema,
    layoutProps.elements[0].scope,
    schema,
  )

  const UiSchemaByScope = (scope: string) => {
    return layoutProps.elements.find((obj) => obj.scope === scope)
  }

  const textProps = delegateSchema.options

  const renderRadioList = () =>
    delegateSchema &&
    delegateSchema.enum &&
    delegateSchema.enum.map((v, index) => {
      return (
        <Box key={index}>
          <FormControlLabel value={v} control={<Radio />} label={v} />
          {textProps.propertieDisplay === v && layoutProps.visible && (
            <Box sx={{ mx: 4 }}>
              <JsonFormsDispatch
                {...layoutProps}
                uischema={UiSchemaByScope(textProps.propertyScope)}
              />
            </Box>
          )}
        </Box>
      )
    })

  return (
    <Box sx={{ display: "flex", my: 2 }}>
      <FormControl
        component="fieldset"
        variant="standard"
        error={Object.keys(data).length === 0}
      >
        <FormLabel sx={{ mb: 1 }} component="legend">
          {uischema.label}
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          {renderRadioList()}
        </RadioGroup>
        <FormHelperText sx={{ marginLeft: 0 }}>{"error "}</FormHelperText>
      </FormControl>
    </Box>
  )
}

export default withJsonFormsLayoutProps(URadioTextGroup)
