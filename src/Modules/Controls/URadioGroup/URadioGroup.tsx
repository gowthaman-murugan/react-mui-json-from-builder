import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormHelperText,
} from "@mui/material"
import { ChangeEvent, FC, useState } from "react"

import { withJsonFormsControlProps } from "@jsonforms/react"
import { ControlProps } from "@jsonforms/core"

const URadioGroup: FC<ControlProps> = ({
  schema,
  errors,
  path,
  label,
  handleChange,
}) => {
  const [value, setValue] = useState("")

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const val = (event.target as HTMLInputElement).value
    setValue(val)
    handleChange(path, val)
  }

  return (
    <FormControl error={errors ? true : false} sx={{ my: 1 }}>
      <FormLabel id={`${path}-label`}>{label}</FormLabel>
      <RadioGroup
        aria-labelledby={`${path}-label`}
        name={`${path}`}
        value={value}
        onChange={handleChangeInput}
      >
        {schema.enum &&
          schema.enum.map((v, index) => {
            return (
              <FormControlLabel
                key={index}
                value={v}
                control={<Radio />}
                label={v}
              />
            )
          })}
      </RadioGroup>
      <FormHelperText sx={{ marginLeft: 0 }}>{errors}</FormHelperText>
    </FormControl>
  )
}

export default withJsonFormsControlProps(URadioGroup)
