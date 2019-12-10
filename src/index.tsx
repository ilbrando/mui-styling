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

const primaryMain = "#006F99";
const errorMain = "#BF1B44";
const defaultTheme = createMuiTheme();
const theme = createMuiTheme({
  palette: {
    primary: { main: primaryMain },
    error: { main: errorMain }
  },
  typography: {
    fontFamily: "Source Sans Pro"
  },
  overrides: {
    MuiInputBase: {
      root: {
        border: "1px solid #ced4da",
        "&$focused": {borderColor: primaryMain},
        "&$error": {
          borderColor: errorMain
        }
      },
      input: {
        borderRadius: 2,
        position: "relative",
        backgroundColor: defaultTheme.palette.common.white,
        fontSize: 14,
        lineHeight: 24,
        padding: "6px 4px",
        transition: defaultTheme.transitions.create([
          "border-color",
          "box-shadow"
        ]),
        "&$disabled": {
          backgroundColor: "#f3f3f3"
        }
      }
    },
    MuiInputLabel: {
      formControl: {
        fontSize: 16,
        lineHeight: 1.25,
        color: "#333333",
        position: "relative"
      }
    },
    MuiFormHelperText: {
      root: {
        fontSize: 10,
        lineHeight: 1.6,
        marginTop: 1,
        padding: "2px 4px",
        "&$error": {
          backgroundColor: "#BF1B44",
          color: "white"
        }
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
        Alle komponenterne er placeret på en{" "}
        <Box display="inline" component="span" bgcolor={grey[50]}>
          grå
        </Box>{" "}
        baggrund, så man kan se deres dimensioner.
      </Typography>
    </Box>
    <Box m={1} bgcolor={grey[50]}>
      <TextField placeholder="Kort input" label="Uden helpertext" />
    </Box>
    <Box m={1} bgcolor={grey[50]}>
      <TextField
        fullWidth
        placeholder="Full width"
        label="Label"
        helperText="Helper text"
      />
    </Box>
    <Box m={1} bgcolor={grey[50]}>
      <TextField
        placeholder="Placeholder"
        label="Label"
        error
        helperText="Der er fejl i denne"
      />
    </Box>
    <Box m={1} bgcolor={grey[50]}>
      <TextField
        placeholder="Kort input"
        label="Label"
        disabled
        helperText="Disabled"
      />
    </Box>
    <Box m={1} bgcolor={grey[50]}>
      <TextField placeholder="Kort input" label="Uden helpertext" />
      <TextField
        placeholder="Placeholder"
        label="Label"
        error
        helperText="Der er fejl i denne"
      />
      <TextField
        placeholder="Kort input"
        label="Label"
        disabled
        helperText="Disabled"
      />
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
