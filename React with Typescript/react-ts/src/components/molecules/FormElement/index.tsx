import { Box, styled } from "@mui/material";
import React from "react";
import TextField from "../../atoms/TextField";
import Button from "../../atoms/Button";
import { TextConstants } from "../../utils/constants";
import { theme } from "../../../theme";

const StyledContainer = styled(Box)(({}) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(5),
  width: theme.spacing(129),
}));

interface FormElementProps {
  email: string;
  password: string;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  isDisabled: boolean;
}

const FormElement: React.FC<FormElementProps> = ({
  email,
  password,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  isDisabled,
}) => {
  return (
    <StyledContainer>
      <TextField
        placeholder={TextConstants.ENTER_EMAIL}
        value={email}
        onChange={onEmailChange}
      />
      <TextField
        placeholder={TextConstants.ENTER_PASS}
        value={password}
        onChange={onPasswordChange}
      />
      <Button
        text={TextConstants.LOG_IN}
        variant="contained"
        isDisabled={isDisabled}
        onClick={onSubmit}
      />
    </StyledContainer>
  );
};

export default FormElement;
