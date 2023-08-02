import { ControlProps } from "@jsonforms/core"
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

const USelect: FC<ControlProps> = ({ label, path, schema, errors }) => {
  const [age, setAge] = useState(schema.default || "")

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string)
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
            value={age}
            onChange={handleChange}
          >
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
