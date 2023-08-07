import {
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material"
import { withJsonFormsControlProps } from "@jsonforms/react"
import { ControlProps } from "@jsonforms/core"
import { ChangeEvent, FC, useEffect, useState } from "react"
import { JInput } from "../UInput/UInput"

const URadioTextGroupLayout: FC<ControlProps> = (props) => {
  const { schema, label, errors, handleChange, path } = props
  const properties = schema.properties
  const [value, setValue] = useState("")
  const [outData, setOutData] = useState({})

  useEffect(() => {
    handleChange(path, Object.keys(outData).length === 0 ? undefined : outData)
  }, [outData])

  const delegateSchema = properties.planning_for_restorations

  const textProps = properties.planning_for_restorations.options

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const val = (event.target as HTMLInputElement).value
    setValue(val)
    setOutData({ planning_for_restorations: val })
    handleChange("planning_for_restorations", val)
  }

  const renderRadioList = () =>
    delegateSchema &&
    delegateSchema.enum &&
    delegateSchema.enum.map((v, index) => {
      return (
        <Box key={index}>
          <FormControlLabel value={v} control={<Radio />} label={v} />
          {textProps.propertieDisplay === v && v === value && (
            <Box sx={{ mx: 4, width: "100%" }}>
              <JInput
                path={textProps.propertieName}
                errors={
                  !outData[textProps.propertieName]
                    ? "Restoration details are required"
                    : ""
                }
                label={""}
                schema={schema.properties[textProps.propertieName]}
                data={outData[textProps.propertieName] || ""}
                handleChange={(path: string, val: any): void => {
                  const obj = {}
                  obj[textProps.propertieName] = val
                  setOutData((existingValues) => ({
                    ...existingValues,
                    ...obj,
                  }))
                }}
              />
            </Box>
          )}
        </Box>
      )
    })

  return (
    <Box sx={{ display: "flex", mt: 1 }}>
      <FormControl
        component="fieldset"
        variant="standard"
        error={errors ? true : false}
        sx={{ width: "90%" }}
      >
        <FormLabel sx={{ mb: 1 }} component="legend">
          {schema.label}
        </FormLabel>
        <RadioGroup value={value} onChange={handleChangeInput}>
          {renderRadioList()}
        </RadioGroup>
        <FormHelperText sx={{ marginLeft: 0 }}>{errors}</FormHelperText>
      </FormControl>
    </Box>
  )
}

export default withJsonFormsControlProps(URadioTextGroupLayout)
