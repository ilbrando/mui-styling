import * as React from "react";
import { render } from "react-dom";
import { Typography, Box } from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";
import { TextField } from "./components/textfield/textfield";
import { Button } from "./components/button/button";
import { ITheme, ThemeProvider } from "./theme";

const theme: ITheme = {
  typography: {
    fontFamily: "Source Sans Pro"
  },
  palette: {
    primary: "#006F99",
    error: "#BF1B44"
  },
  components: {
    input: {
      border: "1px solid #ced4da",
      borderRadius: 2,
      fontSizeLabel: 16,
      fontSizeInput: 14,
      fontSizeHelpText: 10
    }
  }
};
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
