import { ControlProps } from "@jsonforms/core"
import { withJsonFormsControlProps } from "@jsonforms/react"
import {
  Box,
  InputLabel,
  FormControl,
  OutlinedInput,
  FormHelperText,
} from "@mui/material"
import { FC, useEffect, useState } from "react"

const UTextarea: FC<ControlProps> = (props) => {
  const { path, errors, visible, label, schema, data, handleChange } = props

  const [value, setValue] = useState<string>("")
  useEffect(() => {
    setValue(data)
  }, [data])
  return (
    <>
      {visible && (
        <Box sx={{ my: 1 }}>
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
              multiline
              rows={schema.options.rows}
              value={value || ""}
              onChange={(event: any) => {
                setValue(event.target.value)
                handleChange(path, event.target.value)
              }}
            />
            <FormHelperText sx={{ marginLeft: 0 }}>{errors}</FormHelperText>
          </FormControl>
        </Box>
      )}
    </>
  )
}

export default withJsonFormsControlProps(UTextarea)
