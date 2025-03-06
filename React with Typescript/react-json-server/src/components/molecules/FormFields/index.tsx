import { Box, styled } from "@mui/material";
import React from "react";
import TextField from "../../atoms/TextField";

const StyledContainer = styled(Box)(({}) => ({
  display: "flex",
}));

const FormFields = () => {
  return (
    <>
      <TextField placeholder="Data 1 Input" />
      <TextField placeholder="Data 2 Input" />
    </>
  );
};

export default FormFields;
