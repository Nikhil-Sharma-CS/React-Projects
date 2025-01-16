import React from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";

interface ButtonProps extends MuiButtonProps {
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ ...props }) => {
  return <MuiButton onClick={props.onClick}>{props.text}</MuiButton>;
};

export default Button;
