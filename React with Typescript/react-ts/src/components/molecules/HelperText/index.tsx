import React, { useState } from "react";
import Typography from "../../atoms/Typography";
import { TextConstants } from "../../utils/constants";
import SimpleCheckbox from "../../atoms/CheckBox";
import { StyledHelperContainer } from "./index.styles";

const HelperText = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <>
      <StyledHelperContainer>
        <SimpleCheckbox
          checked={isChecked}
          onChange={handleCheckboxChange}
          color="primary"
        />
        <Typography
          text={TextConstants.REMEMBER_ME}
          variant={"h6"}
        ></Typography>
        <Typography
          text={TextConstants.TROUBLE_LOGGIN_IN}
          variant={"h6"}
        ></Typography>
      </StyledHelperContainer>
    </>
  );
};

export default HelperText;
