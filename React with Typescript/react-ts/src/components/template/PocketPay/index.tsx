import { Box, styled } from "@mui/material";
import React from "react";
import Icon from "../../atoms/Icon";
import { BASE_URL, TextConstants } from "../../utils/constants";
import { theme } from "../../../theme";

const StyledContainer = styled(Box)(({}) => ({
  display: "flex",
}));

const StyledHeader = styled(Box)(({}) => ({
  display: "flex",
  marginTop: theme.spacing(6),
  marginLeft: theme.spacing(20),
}));

const PocketPay = () => {
  return (
    <StyledContainer>
      <StyledHeader>
        <Icon
          src={`${BASE_URL}/pocketpay.svg`}
          alt={TextConstants.POCKETPAY_ICON}
        />
      </StyledHeader>
    </StyledContainer>
  );
};

export default PocketPay;
