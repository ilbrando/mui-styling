import * as React from "react";
import {
  FormControl,
  InputLabel,
  FormHelperText,
  InputProps,
  FormControlProps,
  InputBase
} from "@material-ui/core";


type Props = Pick<FormControlProps, "fullWidth"|"error"|"disabled"> &
  Pick<InputProps, "value" | "placeholder"> & { label: string, helperText?: string };
const component: React.FC<Props> = props => {
  const { fullWidth, value, placeholder, label, error, helperText, disabled } = props;
  return (
    <FormControl color="primary" fullWidth={fullWidth} error={error} disabled={disabled}>
      <InputLabel shrink>{label}</InputLabel>
      <InputBase value={value} placeholder={placeholder} error={error}/>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export { component as TextField };
