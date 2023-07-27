import {
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material"
import { FC } from "react"

import { withJsonFormsControlProps } from "@jsonforms/react"
import { ControlProps } from "@jsonforms/core"

const UInput: FC<ControlProps> = ({
  handleChange,
  path,
  data,
  label,
  errors,
}) => {
  return (
    <>
      <InputLabel error={errors ? true : false} sx={{ mb: 1 }}>
        {label}
      </InputLabel>
      <FormControl error={errors ? true : false} variant={"outlined"} fullWidth>
        <OutlinedInput
          id="component-outlined"
          defaultValue="Composed TextField"
          value={data || ""}
          onChange={(event: any) => handleChange(path, event.target.value)}
        />
        <FormHelperText sx={{ marginLeft: 0 }}>{errors}</FormHelperText>
      </FormControl>
    </>
  )
}

export default withJsonFormsControlProps(UInput)
