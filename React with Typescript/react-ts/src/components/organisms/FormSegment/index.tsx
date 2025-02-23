import { Box, styled } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormElement from "../../molecules/FormElement";
import IconFooter from "../../molecules/IconFooter";
import Typography from "../../atoms/Typography";
import { TextConstants } from "../../utils/constants";
import { RememberMeSection } from "../../molecules/RememberMe";
import { theme } from "../../../theme";

const StyledContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: theme.spacing(16),
  height: theme.spacing(142),
}));

const StyledSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: theme.spacing(2),
}));

const LoginWithText = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: theme.palette.text.secondary,
  fontSize: theme.spacing(3.5),
  gap: theme.spacing(5),
}));

const TextContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: theme.palette.text.secondary,
  fontSize: theme.spacing(3.5),
  marginLeft: theme.spacing(60),
}));

const FormSegment: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9._%+-]{8,}$/;

  const handleSubmit = () => {
    if (emailRegex.test(email) && passwordRegex.test(password)) {
      navigate("/display", { state: { email } });
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <StyledContainer>
      <Typography text={TextConstants.WELCOME} variant="h5" />
      <StyledSection>
        <FormElement
          email={email}
          password={password}
          onEmailChange={(e) => setEmail(e.target.value)}
          onPasswordChange={(e) => setPassword(e.target.value)}
          onSubmit={handleSubmit}
          isDisabled={!(emailRegex.test(email) && passwordRegex.test(password))}
        />
        <RememberMeSection
          rememberMeLabel="Remember me"
          troubleLoginText="Trouble logging in?"
          troubleLoginHref="#"
        />
      </StyledSection>
      <LoginWithText>
        <TextContainer>{TextConstants.OR_LOGIN_WITH}</TextContainer>

        <IconFooter />
      </LoginWithText>
    </StyledContainer>
  );
};

export default FormSegment;
