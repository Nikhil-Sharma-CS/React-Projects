import React from "react";
import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
} from "@mui/material";

interface TypographyProps extends MuiTypographyProps {
  text?: string;
  variant: "h1" | "h2" | "h3" | "h4" | "h5";
}

const Typography: React.FC<TypographyProps> = ({ ...props }) => {
  return <MuiTypography variant={props.variant}>{props.text}</MuiTypography>;
};

export default Typography;
