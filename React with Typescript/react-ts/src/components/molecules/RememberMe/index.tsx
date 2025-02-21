import { Box, styled } from "@mui/material";
import { Checkbox } from "../../atoms/CheckBox";
import { Link } from "../../atoms/Link";

interface RememberMeSectionProps {
  rememberMeLabel: string;
  troubleLoginText: string;
  troubleLoginHref: string;
}

const StyledSection = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
}));

export const RememberMeSection: React.FC<RememberMeSectionProps> = ({
  rememberMeLabel,
  troubleLoginText,
  troubleLoginHref,
}) => {
  return (
    <StyledSection>
      <Checkbox label={rememberMeLabel} />
      <Link href={troubleLoginHref}>{troubleLoginText}</Link>
    </StyledSection>
  );
};
