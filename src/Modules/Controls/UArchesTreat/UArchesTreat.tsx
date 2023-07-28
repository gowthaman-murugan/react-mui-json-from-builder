import { ControlProps, JsonSchema } from "@jsonforms/core"
import { withJsonFormsControlProps } from "@jsonforms/react"
import {
  Box,
  FormControl,
  FormControlLabel,
  Checkbox,
  MenuItem,
  Select,
  FormLabel,
  SelectChangeEvent,
  FormHelperText,
} from "@mui/material"
import { FC, useCallback, useEffect, useState } from "react"

const ArchElement: FC<{
  jsonSchema: JsonSchema
  inputKey: string
  subPropKeys: string[]
  updateInput: (data: any) => void
}> = ({ jsonSchema, inputKey, subPropKeys, updateInput }) => {
  const [selectedChecks, setSelectedChecks] = useState({})
  const [selected, setSelected] = useState("")

  const handleChangeSelect = (event: SelectChangeEvent) => {
    setSelected(event.target.value as string)
    setSelectedChecks({
      ...selectedChecks,
      [event.target.name]: event.target.value,
    })
  }

  useEffect(() => {
    const obj = {}
    obj[inputKey] = {
      ...selectedChecks,
    }
    updateInput(obj)
  }, [selectedChecks, inputKey, updateInput])

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
          display: "flex",
          justifyContent: "space-around",
          mb: selectedChecks[subPropKeys[0]] ? 0 : 2,
        }}
      >
        <FormControlLabel
          control={
            <Checkbox onChange={handleChangeInput} name={subPropKeys[0]} />
          }
          label={jsonSchema[subPropKeys[0]].label}
        />
        <FormControl sx={{ minWidth: 220 }}>
          <Select
            id={`${subPropKeys[1]}`}
            value={selected}
            name={`${subPropKeys[1]}`}
            onChange={handleChangeSelect}
          >
            {jsonSchema[subPropKeys[1]].enum?.map((e, i) => (
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
          display: selectedChecks[subPropKeys[0]] ? "flex" : "none",
          mx: 2,
          mt: 0,
          mb: 1,
        }}
      >
        {jsonSchema[subPropKeys[2]].items.oneOf.map((item) => (
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
  const propsKeys = Object.keys(schema.properties)

  console.log("..UArchesTreat. xx..", path, label, description, data)

  const subProps = (key: string) => {
    return schema.properties[key].properties
  }

  const updateInput = useCallback((outData: any) => {
    console.log(data, ".UArchesTreat..updateInput", outData)
    handleChange(path, { ...data, ...outData })
  }, [])

  return (
    <>
      <FormControl
        error={errors ? true : false}
        component="fieldset"
        variant="standard"
        sx={{ my: 1 }}
      >
        <FormLabel component="legend" sx={{ my: 2 }}>
          {label}
        </FormLabel>
        {propsKeys &&
          propsKeys.map((p, index) => {
            return (
              <Box key={index}>
                <ArchElement
                  jsonSchema={subProps(p)}
                  inputKey={p}
                  subPropKeys={schema.archKeys}
                  updateInput={updateInput}
                />
              </Box>
            )
          })}
        <FormHelperText sx={{ marginLeft: 0 }}>{errors}</FormHelperText>
      </FormControl>
    </>
  )
}

export default withJsonFormsControlProps(UArchesTreat)
