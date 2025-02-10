import React from "react";
import { Icons } from "../../utils/constants";
import Icon from "../../atoms/Icon";

const IconList = () => {
  return (
    <>
      {Icons.map((icon, index) => (
        <Icon
          key={index}
          src={icon.src}
          alt={icon.alt}
          width={40}
          height={40}
        />
      ))}
    </>
  );
};

export default IconList;
