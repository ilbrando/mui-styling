import * as React from "react";
import {
  FormControl,
  InputLabel,
  FilledInput,
  FormHelperText,
  InputProps,
  FormControlProps,
  withStyles,
  Theme,
  createStyles,
  fade,
  InputBase
} from "@material-ui/core";

const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    input: {
      borderRadius: 2,
      position: "relative",
      backgroundColor: theme.palette.common.white,
      border: "1px solid #ced4da",
      fontSize: 14,
      lineHeight: 24,
      padding: "6px 4px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      "&:focus": {
        borderColor: theme.palette.primary.main
      }
    }
  })
)(InputBase);

type Props = Pick<FormControlProps, "fullWidth"> &
  Pick<InputProps, "value" | "placeholder"> & { label: string };
const component: React.FC<Props> = props => {
  const { fullWidth, value, placeholder, label } = props;
  return (
    <FormControl color="primary" fullWidth={fullWidth}>
      <InputLabel shrink>{label}</InputLabel>
      <BootstrapInput value={value} placeholder={placeholder}/>
      <FormHelperText>Helptext</FormHelperText>
    </FormControl>
  );
};

export { component as TextField };
