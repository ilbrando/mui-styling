import React, { useMemo } from "react";
import { ITheme } from "./theme";
import { ThemeContext } from "./theme-context";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

interface IThemeProviderProps {
  theme: ITheme;
}

const muiDefaultTheme = createMuiTheme();

const ThemeProvider: React.FC<IThemeProviderProps> = props => {
  const { theme, children } = props;

  const muiTheme = useMemo(
    () =>
      createMuiTheme({
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
              color: "#3a3a3a",
              fontSize: theme.components.input.fontSizeInput,
              lineHeight: 1.25,
              paddingLeft: theme.components.input.paddingLeftRightInput,
              paddingRight: theme.components.input.paddingLeftRightInput,
              paddingTop: theme.components.input.paddingTopBottomInput,
              paddingBottom: theme.components.input.paddingTopBottomInput,
              "&$disabled": {
                backgroundColor: "#f3f3f3"
              }
            }
          },
          MuiInputLabel: {
            formControl: {
              fontSize: theme.components.input.fontSizeLabel,
              fontWeight: "bolder",
              lineHeight: 1,
              color: "#333333",
              position: "relative"
            }
          },
          MuiFormHelperText: {
            root: {
              fontSize: theme.components.input.fontSizeHelpText,
              lineHeight: 1.6,
              marginTop: 1,
              paddingLeft: theme.components.input.paddingLeftRightHelpText,
              paddingRight: theme.components.input.paddingLeftRightHelpText,
              paddingTop: theme.components.input.paddingTopBottomHelpText,
              paddingBottom: theme.components.input.paddingTopBottomHelpText,
              "&$error": {
                backgroundColor: theme.palette.error,
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
      }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={theme}>
      <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeProvider };
