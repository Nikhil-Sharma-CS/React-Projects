import React from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  styled,
} from "@mui/material";
import { theme } from "../../../theme";

interface ButtonProps extends MuiButtonProps {
  text?: string;
  isDisabled?: boolean;
  onClick?: () => void;
}

const StyledButton = styled(MuiButton)(({}) => ({
  width: theme.spacing(129),
  backgroundColor: theme.palette.primary.dark,
  color: "#ffffff",
  borderRadius: theme.spacing(14),
}));

const Button: React.FC<ButtonProps> = ({ ...props }) => {
  return (
    <StyledButton disabled={props.isDisabled} onClick={props.onClick}>
      {props.text}
    </StyledButton>
  );
};

export default Button;
