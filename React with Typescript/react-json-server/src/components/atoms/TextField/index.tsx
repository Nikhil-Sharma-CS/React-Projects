import React from "react";
import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material";

type TextFieldProps = MuiTextFieldProps & {
  text?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextField: React.FC<TextFieldProps> = ({ ...props }) => {
  return <MuiTextField onChange={props.onChange}>{props.text}</MuiTextField>;
};

export default TextField;
