import React from "react";
import { ITheme } from "./theme";
import { ThemeContext } from "./theme-context";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

interface IThemeProviderProps {
  theme: ITheme;
}

const component: React.FC<IThemeProviderProps> = props => {
  const { theme, children } = props;
  const muiDefaultTheme = createMuiTheme();
  const muiTheme = createMuiTheme({
    palette: {
      primary: { main: theme.palette.primary },
      error: { main: theme.palette.error }
    },
    typography: {
      fontFamily: theme.typography.fontFamily
    },
    overrides: {
      MuiInputBase: {
        root: {
          border: theme.components.input.border,
          "&$focused": { borderColor: theme.palette.primary },
          "&$error": {
            borderColor: theme.palette.error
          }
        },
        input: {
          borderRadius: theme.components.input.borderRadius,
          position: "relative",
          backgroundColor: muiDefaultTheme.palette.common.white,
          fontSize: 14,
          lineHeight: 24,
          padding: "6px 4px",
          transition: muiDefaultTheme.transitions.create([
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
      }

      // MuiButton: {
      //   contained: {
      //     boxShadow: "none",
      //     border: "solid 2px transparent",
      //     padding: "2 4 2 4",
      //     borderRadius: 0,
      //     "&$focusVisible": {
      //       boxShadow: "none",
      //       borderStyle: "solid",
      //       borderWidth: 2,
      //       borderColor: green[200]
      //     }
      //   }
      //}
    }
  });

  return (
    <ThemeContext.Provider value={theme}>
      <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export { component as ThemeProvider };
