import {
  Box,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material"
import { FC, useEffect, useState } from "react"

import { withJsonFormsControlProps } from "@jsonforms/react"
import { ControlProps, JsonSchema } from "@jsonforms/core"

export const JInput: FC<{
  path: string
  errors: string
  label: string
  schema: JsonSchema
  data: string
  handleChange: (path: string, value: any) => void
}> = ({ path, errors, label, schema, data, handleChange }) => {
  const [value, setValue] = useState<string>("")
  useEffect(() => {
    setValue(data)
  }, [data])
  const isPlaceholder = schema && schema.options && schema.options.placeholder

  return (
    <>
      <Box sx={{ my: 1}}>
        <InputLabel error={errors ? true : false} sx={{ mb: 1 }}>
          {label}
        </InputLabel>
        <FormControl
          error={errors ? true : false}
          variant={"outlined"}
          fullWidth
        >
          <OutlinedInput
            id="component-outlined"
            value={value || ""}
            placeholder={isPlaceholder ? schema.options.placeholder : ""}
            onChange={(event: any) => {
              setValue(event.target.value)
              handleChange(path, event.target.value)
            }}
          />
          <FormHelperText sx={{ marginLeft: 0 }}>{errors}</FormHelperText>
        </FormControl>
      </Box>
    </>
  )
}

const UInput: FC<ControlProps> = ({
  handleChange,
  path,
  data,
  label,
  errors,
  schema,
}) => {
  const obj = {
    path: path,
    errors: errors,
    label: label,
    schema: schema,
    data: data,
    handleChange: handleChange,
  }

  return <JInput {...obj} />
}

export default withJsonFormsControlProps(UInput)
