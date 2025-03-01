import React from "react";

interface IconProps {
  src?: string;
  alt?: string;
  onClick?: () => void;
}

const Icon: React.FC<IconProps> = ({ ...props }) => {
  return <img src={props.src} alt={props.alt} onClick={props.onClick} />;
};

export default Icon;
