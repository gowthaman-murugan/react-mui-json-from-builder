import { ThemeOptions } from "@mui/material/styles"

const uSmileTheme: ThemeOptions = {
  palette: {
    mode: "light",
    background: {
      default: "#FFFFFF",
    },
    primary: {
      main: "#215ECD",
      dark: "#1E88E5",
      light: "#42A5F5",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#9C27B0",
      dark: "#7B1FA2",
      light: "#BA68C8",
      contrastText: "#FFFFFF",
    },
    error: {
      main: "#D32F2F",
      dark: "#C62828",
      light: "#EF5350",
      contrastText: "#FFFFFF",
    },
    warning: {
      main: "#ED6C02",
      dark: "#E65100",
      light: "#FF9800",
      contrastText: "#FFFFFF",
    },
    info: {
      main: "#0288D1",
      dark: "#01579B",
      light: "#03A9F4",
      contrastText: "#FFFFFF",
    },
    success: {
      main: "#2E7D32",
      dark: "#1B5E20",
      light: "#4CAF50",
      contrastText: "#FFFFFF",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
  },
  typography: {
    fontFamily: "Poppins",
    fontSize: 16,
    h1: {
      fontSize: 80,
      lineHeight: 1.16,
      fontWeight: 300,
    },
    h2: {
      fontSize: 64,
      lineHeight: 1.2,
      fontWeight: 300,
    },
    h3: {
      fontSize: 48,
      fontWeight: 400,
      lineHeight: 1.16,
    },
    h4: {
      fontSize: 34,
      fontWeight: 400,
      lineHeight: 1.25,
    },
    h5: {
      fontSize: 24,
      lineHeight: 0.94,
      fontWeight: 400,
    },
    h6: {
      fontSize: 20,
      fontWeight: 500,
      lineHeight: 1.6,
    },
    subtitle1: {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: 1.75,
    },
    subtitle2: {
      fontSize: 14,
      lineHeight: 1.55,
      fontWeight: 500,
    },
    body1: {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: 14,
      fontWeight: 400,
      lineHeight: 1.26,
    },
    caption: {
      fontSize: 12,
      fontWeight: 400,
      lineHeight: 1.24,
    },
    overline: {
      fontSize: 12,
      lineHeight: 1.95,
    },
    button: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 1.5,
    },
  },
  // spacing: 8,
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiTextField: {
      defaultProps: {
        variant: "outlined", // 'outlined' | 'standard' | 'filled'
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          boxShadow:
            "0px, 3px rgba(0, 0, 0, 0.2), 0px, 2px rgba(0, 0, 0, 0.14), 0px, 1px rgba(0, 0, 0, 0.12)",
          height: 42,
          padding: "6px, 16px, 6px, 16px",
        },
      },
      variants: [
        {
          props: { variant: "shade" },
          style: {
            color: "rgba(0, 0, 0, 0.87)",
            background: "#E0E0E0",
            "&:hover": {
              color: "rgba(0, 0, 0, 0.87)",
              background: "#E0E0E0",
            },
          },
        },
      ],
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          "& fieldset": {
            border: `1px solid rgba(0, 0, 0, 0.23)`,
          },
          "&:hover:not(.Mui-focused ) fieldset": {
            border: `1px solid #000000 !important`,
          },
          "&.Mui-error": {
            "&:hover fieldset": {
              border: `1px solid #D32F2F !important`,
            },
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderWidth: "1px",
          },
        },
      },
    },
  },
}

export default uSmileTheme
