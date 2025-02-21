import React from "react";
import Button from "../../atoms/Button";
import { TextConstants } from "../../utils/constants";

interface FormActionGroupProps {
  isValid: boolean;
  handleClick: () => void;
}

const FormActionGroup: React.FC<FormActionGroupProps> = ({
  isValid,
  handleClick,
}) => (
  <Button
    text={TextConstants.LOG_IN}
    variant="contained"
    isDisabled={!isValid}
    onClick={handleClick}
  />
);

export default FormActionGroup;
