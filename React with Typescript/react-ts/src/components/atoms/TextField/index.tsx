import React from "react";
import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldPRops,
  styled,
} from "@mui/material";
import { theme } from "../../../theme";

type TextFieldProps = MuiTextFieldPRops & {
  text?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const StyledTextField = styled(MuiTextField)(({}) => ({
  width: theme.spacing(129),
}));

const TextField: React.FC<TextFieldProps> = ({ ...props }) => {
  return (
    <StyledTextField placeholder={props.placeholder} onChange={props.onChange}>
      {props.text}
    </StyledTextField>
  );
};

export default TextField;
