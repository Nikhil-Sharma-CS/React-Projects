import React from "react";
import { Box, styled } from "@mui/material";
import { theme } from "../../../theme";

interface CheckboxProps {
  label: string;
}

const StyledLabel = styled("label")(() => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  cursor: "pointer",
}));

const StyledCheckbox = styled("input")(() => ({
  width: theme.spacing(4),
  height: theme.spacing(4),
  color: theme.palette.primary.main,
}));

const StyledText = styled("span")(() => ({
  fontSize: "0.875rem",
  color: theme.palette.grey[700],
}));

export const Checkbox: React.FC<CheckboxProps> = ({ label }) => {
  return (
    <StyledLabel>
      <StyledCheckbox type="checkbox" />
      <StyledText>{label}</StyledText>
    </StyledLabel>
  );
};
