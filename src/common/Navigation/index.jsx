import {
  StyledNav,
  Container,
  Brand,
  LogoIMG,
  LogoText,
  Menu,
  SearchWrapper,
  Browser,
  StyledNavLink,
  SearchIcon,
} from "./styled";
import { useLocation } from "react-router-dom";
import logoIMG from "../../images/logoIMG.svg";
import searchIcon from "../../images/search.svg";

const Navigation = () => {
  const { pathname } = useLocation();
  const placeholder = pathname.startsWith("/people")
    ? "Search for people..."
    : "Search for movies...";

  return (
    <StyledNav>
      <Container>
        <Brand to="/">
          <LogoIMG src={logoIMG} alt="Movies Browser logo" />
          <LogoText>Movies Browser</LogoText>
        </Brand>

        <Menu>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
          <StyledNavLink to="/people">People</StyledNavLink>
        </Menu>

        <SearchWrapper>
          <SearchIcon src={searchIcon} alt="" aria-hidden="true" />
          <Browser type="search" placeholder={placeholder} aria-label={placeholder} />
        </SearchWrapper>
      </Container>
    </StyledNav>
  );
};

export default Navigation;
