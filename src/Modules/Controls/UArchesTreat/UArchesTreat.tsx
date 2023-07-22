import { ControlProps } from "@jsonforms/core"
import { withJsonFormsControlProps } from "@jsonforms/react"
import {
  Box,
  FormControl,
  FormControlLabel,
  Checkbox,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material"
import { FC, useState } from "react"

const UArchesTreat: FC<ControlProps> = ({
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
  console.log(".xxx.................schema", schema)

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    })
  }

  return (
    <>
      <Box
        sx={{
          flexDirection: "row",
          flexWrap: "wrap",
          display: "flex",
        }}
      >
        <FormControlLabel
          control={
            <Checkbox onChange={handleChangeInput} name={elementKeys[0]} />
          }
          label={elementProps[elementKeys[0]].label}
        />

        <FormControl sx={{ minWidth: 220 }}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age || elementProps[elementKeys[1]].default}
            onChange={handleChangeSelect}
          >
            {elementProps[elementKeys[1]].enum?.map((e, i) => (
              <MenuItem key={`${e}+${i}`} value={e}>
                {e}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box
        sx={{
          flexDirection: "column",
          display: "flex",
          mx: 2,
        }}
      >
        {elementProps[elementKeys[2]].items.anyOf.map((item) => (
          <FormControlLabel
            key={item.const}
            control={
              <Checkbox onChange={handleChangeInput} name={item.const} />
            }
            label={item.title}
          />
        ))}
      </Box>
    </>
  )
}

export default withJsonFormsControlProps(UArchesTreat)
