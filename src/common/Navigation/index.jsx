import { StyledNav, Logo, LogoIMG, LogoText, Menu, Browser, StyledNavLink } from "./styled";
import logoIMG from "../../images/logoIMG.svg"

const Navigation = () => {
  return (
    <StyledNav>
      <Logo>
        <LogoIMG src={logoIMG} alt="logoIMG" />
        <LogoText>Movies browser</LogoText>
      </Logo>
      <Menu>
        <StyledNavLink to="/movies">Movies</StyledNavLink>
        <StyledNavLink to="/people">People</StyledNavLink>
      </Menu>
      <Browser />
    </StyledNav>
  );
};

export default Navigation;