import {
  ThemeProvider,
  StyledEngineProvider,
  createTheme,
} from "@mui/material/styles";
import { primaryMaroon } from "./constants/colors";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: primaryMaroon,
    },
  },
  typography: {
    fontFamily: ["Quicksand", "sans-serif"].join(","),
  },
});

export const ThemeManager = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => (
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </StyledEngineProvider>
);
