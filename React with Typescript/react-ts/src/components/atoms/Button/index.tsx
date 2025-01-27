import React from "react";
import { ButtonProps as MuiButtonProps } from "@mui/material";
import { StyledButton } from "./index.styles";

interface ButtonProps extends MuiButtonProps {
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ ...props }) => {
  return <StyledButton onClick={props.onClick}>{props.text}</StyledButton>;
};

export default Button;
