import { FormControl, InputLabel, TextField } from "@mui/material"
import { FC } from "react"

import { withJsonFormsControlProps } from "@jsonforms/react"
import { ControlProps } from "@jsonforms/core"

const UInput: FC<ControlProps> = ({
  handleChange,
  path,
  data,
  label,
  description,
}) => {
  console.log("...path: ", path)

  return (
    <>
      <InputLabel>{description}</InputLabel>

      <InputLabel>{label}</InputLabel>
      <TextField
        onChange={(event: any) => handleChange(path, event.target.value)}
        fullWidth
        variant="outlined"
        value={data || ""}
      />
    </>
  )
}

export default withJsonFormsControlProps(UInput)

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
