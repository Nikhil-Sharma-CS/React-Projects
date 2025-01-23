import React from "react";
import Typography from "../../atoms/Typography";
import { TextConstants } from "../../utils/constants";
import Button from "../../atoms/Button";

const Content = () => {
  return (
    <>
      <Typography text={TextConstants.WELCOME_BACK} variant="h1"></Typography>
      <Button text={TextConstants.LOG_IN} variant="contained"></Button>
    </>
  );
};

export default Content;
