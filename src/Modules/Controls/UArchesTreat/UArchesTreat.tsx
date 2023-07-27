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
import { FC, useEffect, useState } from "react"

const UArchesTreat: FC<ControlProps> = ({
  handleChange,
  path,
  data,
  label,
  description,
  schema,
  rootSchema,
  uischema,
  errors,
}) => {
  const elementKeys = schema.archKeys
  const elementProps = schema.properties
  const [selectedChecks, setSelectedChecks] = useState({})
  const [selected, setSelected] = useState(
    "" || elementProps[elementKeys[1]].default,
  )


  useEffect(() => {
    console.log("....selectedChecks..", selectedChecks)
  }, [selectedChecks])

  useEffect(() => {
    console.log("....selected..", selected)
  }, [selected])

  const handleChangeSelect = (event: SelectChangeEvent) => {
    setSelected(event.target.value as string)
  }

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedChecks({
      ...selectedChecks,
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
          mb: 2,
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
            value={selected}
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
          display: selectedChecks[elementKeys[0]] ? "flex" : "none",
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
