import React from "react";

interface IconProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
}

const Icon: React.FC<IconProps> = ({ ...props }) => {
  return (
    <img
      src={props.src}
      alt={props.alt}
      height={props.height}
      width={props.width}
    />
  );
};

export default Icon;
