export interface ITheme {
  palette: {
    primary: string;
    error: string;
  };
  typography: {
    fontFamily: string;
  };
  components: {
    input: {
      border: string;
      borderRadius: number;
      fontSizeInput: number;
      fontSizeLabel: number;
      fontSizeHelpText: number;
      paddingLeftRightInput: number;
      paddingTopBottomInput: number;
      paddingLeftRightHelpText: number;
      paddingTopBottomHelpText: number;
    };
  };
}
