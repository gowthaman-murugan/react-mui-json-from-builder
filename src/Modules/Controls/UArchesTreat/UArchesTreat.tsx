import { ControlProps } from "@jsonforms/core"
import { withJsonFormsControlProps } from "@jsonforms/react"
import {
  Box,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormHelperText,
  Grid,
} from "@mui/material"
import { FC, useState } from "react"
import { USelect } from "../USelect/USelect"

const UArchesTreat: FC<ControlProps> = ({
  handleChange,
  path,
  data,
  label,
  description,
  schema,
}) => {
  const [state, setState] = useState({
    gilad: true,
    jason: false,
    antoine: false,
  })
  console.log(schema, ".xxx..label", label, description, path, data)

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    })
  }

  const { gilad, jason, antoine } = state
  const error = [gilad, jason, antoine].filter((v) => v).length !== 2
  return (
    <Box>
      {/* <FormControl sx={{ m: 1 }} component="fieldset" variant="standard">
        <FormLabel component="legend">{label}</FormLabel>
        <FormGroup>
          <Box
            sx={{
              flexDirection: "row",
              display: "flex",
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={gilad}
                  onChange={handleChangeInput}
                  name="gilad"
                />
              }
              label={schema.properties.upper_to_treat.properties.upper.label}
            />

            <USelect />
          </Box>
        </FormGroup> 
      </FormControl>*/}
    </Box>
  )
}

export default withJsonFormsControlProps(UArchesTreat)
