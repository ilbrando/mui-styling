export interface ITheme {
  palette: {
    primary: string;
    error: string;
  };
  typography: {
    fontFamily: string;
    fontSize: number;
  };
  components: {
    input: {
      border: string;
      borderRadius: number;
    };
  };
}
