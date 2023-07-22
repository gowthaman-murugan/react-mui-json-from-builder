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
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material"
import { FC, useState } from "react"

const UArchesTreat2: FC<ControlProps> = ({
  handleChange,
  path,
  data,
  label,
  description,
  schema,
  rootSchema,
  uischema,
}) => {
  const elementKeys = schema.archKeys
  const elementProps = schema.properties
  const [state, setState] = useState({
    gilad: true,
    jason: false,
    antoine: false,
  })

  const [age, setAge] = useState("")

  const handleChangeSelect = (event: SelectChangeEvent) => {
    setAge(event.target.value as string)
  }
  console.log(
    schema,
    ".xxx..label",
    label,
    description,
    path,
    data,
    rootSchema,
    uischema,
  )

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
      <FormGroup>
        <Box
          sx={{
            flexDirection: "row",
            flexWrap: "wrap",
            display: "flex",
          }}
        >
          {elementKeys.map((k: string, index: number) => {
            return (
              <>
                {elementProps && elementProps[k].type === "boolean" && (
                  <FormControlLabel
                    key={k}
                    control={
                      <Checkbox
                        checked={gilad}
                        onChange={handleChangeInput}
                        name={k}
                      />
                    }
                    label={elementProps[k].label}
                  />
                )}
                {elementProps &&
                  elementProps[k].hasOwnProperty("isUSelect") && (
                    <FormControl key={k} sx={{ minWidth: 220 }}>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age || elementProps[k].default}
                        onChange={handleChangeSelect}
                      >
                        {elementProps[k].enum?.map((e, i) => (
                          <MenuItem value={e}>{e}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  )}
                {elementProps &&
                  elementProps[k].hasOwnProperty("isMultiChoice") && (
                    <Box
                      sx={{
                        flexDirection: "column",
                        display: "flex",
                        mx: 2,
                      }}
                      key={k}
                    >
                      {elementProps[k] &&
                        elementProps[k].items &&
                        elementProps[k].items.anyOf &&
                        elementProps[k].items.anyOf.map((item) => (
                          <FormControlLabel
                            key={item.const}
                            control={
                              <Checkbox
                                checked={gilad}
                                onChange={handleChangeInput}
                                name={item.const}
                              />
                            }
                            label={item.title}
                          />
                        ))}
                    </Box>
                  )}
              </>
            )
          })}
        </Box>
      </FormGroup>
    </Box>
  )
}

export default withJsonFormsControlProps(UArchesTreat2)
