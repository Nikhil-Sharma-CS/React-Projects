import { Box, styled } from "@mui/material";
import { theme } from "../../../theme";

export const StyledHelperContainer = styled(Box)(({}) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
}));
