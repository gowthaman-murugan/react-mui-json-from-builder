import { ControlProps } from "@jsonforms/core"
import { withJsonFormsControlProps } from "@jsonforms/react"
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material"
import { FC, useState } from "react"

const USelect: FC<ControlProps> = ({ label, path, schema }) => {
  const [age, setAge] = useState(schema.default || "")

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string)
  }
  return (
    <>
      <FormControl>
        {label && <InputLabel id={`${path}-label}`}>{label}</InputLabel>}
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
    </>
  )
}

export default withJsonFormsControlProps(USelect)
