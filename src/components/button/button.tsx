import * as React from "react";
import { Button, ButtonProps } from "@material-ui/core";

type Props = Pick<ButtonProps, "color">;
const component: React.FC<Props> = props => {
  const { color, children } = props;
  return (
    <Button variant="contained" color={color} disableRipple>
      {children}
    </Button>
  );
};

export { component as Button };
