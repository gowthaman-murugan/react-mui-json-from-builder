import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material"
import { FC } from "react"

import { withJsonFormsControlProps } from "@jsonforms/react"
import { ControlProps } from "@jsonforms/core"
//import { Rating } from "./Rating"

const URadioGroup: FC<ControlProps> = ({ schema }) => {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">{schema.label}</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
      >
        {schema.enum &&
          schema.enum.map((value, index) => {
            return (
              <FormControlLabel
                key={index}
                value={value}
                control={<Radio />}
                label={value}
              />
            )
          })}
      </RadioGroup>
    </FormControl>
  )
}

export default withJsonFormsControlProps(URadioGroup)

// interface RatingControlProps {
//   data: any
//   handleChange(path: string, value: any): void
//   path: string
// }

// const RatingControl = ({ data, handleChange, path }: RatingControlProps) => (
//   <Rating
//     value={data}
//     updateValue={(newValue: number) => handleChange(path, newValue)}
//   />
// )

// export default withJsonFormsControlProps(RatingControl)
