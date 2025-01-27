import React from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  styled,
} from "@mui/material";
import { theme } from "../../../theme";

interface ButtonProps extends MuiButtonProps {
  text: string;
  onClick?: () => void;
}

const StyledButton = styled(MuiButton)(({}) => ({
  width: "516px",
  backgroundColor: theme.palette.secondary.light,
  borderRadius: "56px",
  boxShadow: "#5533FF3D",
}));
const Button: React.FC<ButtonProps> = ({ ...props }) => {
  return <StyledButton onClick={props.onClick}>{props.text}</StyledButton>;
};

export default Button;
