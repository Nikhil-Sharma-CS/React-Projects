import { Button as MuiButton, styled } from "@mui/material";
import { theme } from "../../../theme";

export const StyledButton = styled(MuiButton)(({}) => ({
  width: "516px",
  backgroundColor: theme.palette.secondary.light,
  borderRadius: "56px",
  boxShadow: "#5533FF3D",
}));
