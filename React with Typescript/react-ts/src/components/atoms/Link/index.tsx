import { styled } from "@mui/material";
import { theme } from "../../../theme";

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

const StyledLink = styled("a")(() => ({
  fontSize: "0.875rem",
  color: theme.palette.primary.main,
  "&:hover": {
    color: theme.palette.primary.dark,
  },
}));

export const Link: React.FC<LinkProps> = ({ href, children }) => {
  return <StyledLink href={href}>{children}</StyledLink>;
};
