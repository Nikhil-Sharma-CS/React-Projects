import { styled } from "@mui/material";
import Button from "../../atoms/Button";
import { theme } from "../../../theme";

export const StyledLogInButton = styled(Button)(({}) => ({
  width: "516px",
  color: theme.palette.secondary.main,
}));
