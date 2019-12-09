import * as React from "react";
import { render } from "react-dom";
import {
  ThemeProvider,
  Typography,
  createMuiTheme,
  Box
} from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";
import green from "@material-ui/core/colors/green";
import { TextField } from "./components/textfield/textfield";
import { Button } from "./components/button/button";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#006F99" }
  },
  typography: {
    fontFamily: "Source Sans Pro"
  },
  overrides: {
    MuiFilledInput: {
      inputMarginDense: {
        paddingTop: "1rem",
        paddingBottom: "0.4rem"
      }
    },
    MuiInputLabel: {
      formControl: {
        fontSize: 16,
        lineHeight: 1.25,
        color: "#888888",
        position: "relative"
      }
    },

    MuiButton: {
      contained: {
        boxShadow: "none",
        border: "solid 2px transparent",
        padding: "2 4 2 4",
        borderRadius: 0,
        "&$focusVisible": {
          boxShadow: "none",
          borderStyle: "solid",
          borderWidth: 2,
          borderColor: green[200]
        }
      }
    }
  }
});
const App = () => (
  <ThemeProvider theme={theme}>
    <Typography variant="h1">MUI STYLING</Typography>
    <Box>
      <Typography variant="body1" paragraph>
        Input komponenterne er stort set kun ændret ved at tilpasse MUI
        komponenterne og kun med ganske lidt styling.
      </Typography>
      <Typography variant="body1" paragraph>
        Alle komponenterne er placeret på en{" "}
        <Box display="inline" bgcolor={grey[50]}>
          grå
        </Box>{" "}
        baggrund, så man kan se deres dimensioner.
      </Typography>
    </Box>
    <Box m={1} bgcolor={grey[50]}>
      <TextField placeholder="Kort dense input" label="Label uden animation" />
    </Box>
    <Box m={1} bgcolor={grey[50]}>
      <TextField fullWidth placeholder="Full width" label="Label" />
    </Box>
    <Box m={1} bgcolor={grey[50]}>
      <Button>Knap</Button>
    </Box>
    <Box m={1} bgcolor={grey[50]}>
      <Button color="primary">Knap primary color</Button>
    </Box>
  </ThemeProvider>
);

const rootElement = document.getElementById("root");
render(<App />, rootElement);
