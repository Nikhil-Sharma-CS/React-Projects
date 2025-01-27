import React from "react";
import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material";

type TextFieldProps = MuiTextFieldProps & {
  placeholder?: string;
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextField: React.FC<TextFieldProps> = ({ ...props }) => {
  return (
    <MuiTextField
      placeholder={props.placeholder}
      label={props.label}
      onChange={props.onChange}
    ></MuiTextField>
  );
};

export default TextField;
