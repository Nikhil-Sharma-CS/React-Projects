import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#9764FF",
      light: "#E4D6FF",
      dark: "#7633FF",
    },
    secondary: {
      main: "#77767A",
      light: "#9F9DA3",
      dark: "141414",
    },
    background: {
      default: "#F8F9FA",
    },
  },
  typography: {
    fontFamily: '"Gerbera"',
  },
  spacing: 4,
});
