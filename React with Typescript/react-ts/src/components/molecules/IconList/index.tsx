import React from "react";
import { Icons } from "../../utils/constants";
import Icon from "../../atoms/Icon";
import { StyledIconContainer } from "./index.styles";
import { theme } from "../../../theme";

const IconList = () => {
  return (
    <>
      <StyledIconContainer>
        {Icons.map((icon, index) => (
          <Icon
            key={index}
            src={icon.src}
            alt={icon.alt}
            width={`${theme.spacing(10)}px`}
            height={`${theme.spacing(10)}px`}
          />
        ))}
      </StyledIconContainer>
    </>
  );
};

export default IconList;
