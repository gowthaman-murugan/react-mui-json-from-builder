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

const USelect: FC<ControlProps> = ({ label, path }) => {
  const [age, setAge] = useState("")

  console.log("..ddd...path", path)

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string)
  }
  return (
    <>
      <FormControl fullWidth>
        {label && (
          <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        )}
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </>
  )
}

export default withJsonFormsControlProps(USelect)
