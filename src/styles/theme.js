import { createTheme } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

const theme = createTheme({
  typography: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    h1: {
      fontFamily: `'Tauri', sans-serif;`,
      fontSize: "3rem",
    },
    h3: {
      fontFamily: `"Dela Gothic One", cursive`,
      fontSize: "1.5rem",
    },
  },
  palette: {
    primary: {
      main: purple[900],
    },
  },
});

export default theme;
