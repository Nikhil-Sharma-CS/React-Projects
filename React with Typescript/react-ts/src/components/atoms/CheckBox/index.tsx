import React from "react";
import Checkbox from "@mui/material/Checkbox";

interface SimpleCheckboxProps {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
}

const SimpleCheckbox: React.FC<SimpleCheckboxProps> = ({
  checked,
  onChange,
  disabled = false,
  color = "primary",
}) => {
  return (
    <Checkbox
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      color={color}
    />
  );
};

export default SimpleCheckbox;
