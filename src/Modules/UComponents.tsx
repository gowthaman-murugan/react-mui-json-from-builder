import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
} from "@mui/material"
import { FC, useState } from "react"

const UComponents: FC = () => {
  const [age, setAge] = useState("")

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string)
  }
  return (
    <>
      <Grid container>
        <Grid sm={6}>
          <Paper elevation={2}>
            <Box sx={{ display: "flex", flexDirection: "row", m: 2 }}>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Label"
              />
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ mx: 4 }}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Label"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Label"
                />

                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Label"
                />
              </FormGroup>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}

export default UComponents
