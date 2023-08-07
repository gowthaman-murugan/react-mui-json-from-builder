import { ControlProps, computeLabel } from "@jsonforms/core"
import { withJsonFormsControlProps } from "@jsonforms/react"
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Box,
} from "@mui/material"
import { FC, useState } from "react"

const USelect: FC<ControlProps> = (props) => {
  const { label, path, schema, errors, data, handleChange } = props
  const [value, setValue] = useState(schema.default || "")

  const handleChangeSelect = (event: SelectChangeEvent) => {
    setValue(event.target.value as string)
    handleChange(path, event.target.value)
  }
  return (
    <>
      <Box sx={{ my: 1 }}>
        {label && (
          <InputLabel
            sx={{ mb: 1 }}
            error={errors ? true : false}
            id={`${path}-label}`}
          >
            {label}
          </InputLabel>
        )}
        <FormControl fullWidth error={errors ? true : false}>
          <Select
            labelId={`${path}-label}`}
            id={`${path}-select}`}
            value={value}
            onChange={handleChangeSelect}
            displayEmpty
            placeholder={"select"}
          >
            <MenuItem value="">{"Select"}</MenuItem>
            {schema &&
              schema.enum &&
              schema.enum.map((e, index) => {
                return (
                  <MenuItem key={index} value={e}>
                    {e}
                  </MenuItem>
                )
              })}
          </Select>
        </FormControl>
      </Box>
    </>
  )
}

export default withJsonFormsControlProps(USelect)
