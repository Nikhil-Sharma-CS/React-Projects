import React from "react";
import { useLocation } from "react-router-dom";
import { Box, styled } from "@mui/material";
import { TextConstants } from "../../utils/constants";
import Typography from "../../atoms/Typography";
import { theme } from "../../../theme";

const StyledContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: theme.spacing(10),
}));

const DisplayPage: React.FC = () => {
  const location = useLocation();
  const { email } = location.state as { email: string };

  return (
    <StyledContainer>
      <Typography
        text={`${TextConstants.DISPLAY_EMAIL} ${email}`}
        variant="h5"
      />
    </StyledContainer>
  );
};

export default DisplayPage;
