import React from "react";
import { Icons } from "../../utils/constants";
import Icon from "../../atoms/Icon";
import { Box, styled } from "@mui/material";

const StyledIconContainer = styled(Box)(({}) => ({
  display: "flex",
}));

const IconList = () => {
  return (
    <>
      <StyledIconContainer>
        {Icons.map((icon, index) => (
          <Icon
            key={index}
            src={icon.src}
            alt={icon.alt}
            width={40}
            height={40}
          />
        ))}
      </StyledIconContainer>
    </>
  );
};

export default IconList;
