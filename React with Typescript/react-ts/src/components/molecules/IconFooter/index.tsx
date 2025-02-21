import React from "react";
import { ICON_LIST } from "../../utils/constants";
import { Box, styled } from "@mui/material";
import { theme } from "../../../theme";
import Icon from "../../atoms/Icon";

const StyledContainer = styled(Box)(({}) => ({
  display: "flex",
  marginTop: theme.spacing(1),
  gap: theme.spacing(30),
  width: theme.spacing(54),
}));

const IconFooter = () => {
  return (
    <>
      <StyledContainer>
        {ICON_LIST?.map(
          (
            item,
            index //optional mapping
          ) => (
            <Icon key={index} src={item.src} alt={item.alt} />
          )
        )}
      </StyledContainer>
    </>
  );
};

export default IconFooter;
