import { FC } from "react"

import { ThemeProvider } from "@emotion/react"
import uSmileTheme from "./Theme/theme"
import AppRoutes from "./routes/AppRoutes"
import { createTheme } from "@mui/material"

const App: FC = () => {
  return (
    <ThemeProvider theme={createTheme(uSmileTheme)}>
      <div className="App">
        <AppRoutes />
      </div>
    </ThemeProvider>
  )
}

export default App
