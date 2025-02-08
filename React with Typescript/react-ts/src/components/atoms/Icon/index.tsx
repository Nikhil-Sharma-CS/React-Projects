import React from "react";

interface IconProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const Icon: React.FC<IconProps> = ({ ...props }) => {
  return <img src={props.src} alt={props.alt} />;
};

export default Icon;
