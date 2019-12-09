import * as React from "react";
import {
  FormControl,
  InputLabel,
  FormHelperText,
  InputProps,
  FormControlProps,
  Input,
  InputBase
} from "@material-ui/core";


type Props = Pick<FormControlProps, "fullWidth"|"error"> &
  Pick<InputProps, "value" | "placeholder"> & { label: string, helperText?: string };
const component: React.FC<Props> = props => {
  const { fullWidth, value, placeholder, label, error, helperText } = props;
  return (
    <FormControl color="primary" fullWidth={fullWidth} error={error}>
      <InputLabel shrink>{label}</InputLabel>
      <InputBase value={value} placeholder={placeholder} error={error}/>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};

export { component as TextField };
