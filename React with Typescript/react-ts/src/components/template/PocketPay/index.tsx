import { Box, styled } from "@mui/material";
import React from "react";
import Icon from "../../atoms/Icon";
import { PP_ICON } from "../../utils/constants";
import FormSegment from "../../organisms/FormSegment";
import { theme } from "../../../theme";

const StyledContainer = styled(Box)(({}) => ({
  display: "flex",
  gap: theme.spacing(10),
  flexDirection: "column",
  marginTop: theme.spacing(4),
  marginLeft: theme.spacing(106),
  width: theme.spacing(129),
}));

const StyledHeader = styled(Box)(({}) => ({
  display: "flex",
  width: theme.spacing(25),
  marginTop: theme.spacing(6),
  marginLeft: theme.spacing(20),
}));

const PocketPay = () => {
  return (
    <>
      <StyledHeader>
        <Icon src={PP_ICON.svg} alt={PP_ICON.alt}></Icon>
      </StyledHeader>

      <StyledContainer>
        <FormSegment />
      </StyledContainer>
    </>
  );
};

export default PocketPay;
