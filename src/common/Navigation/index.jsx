import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import debounce from "lodash.debounce";
import {
  StyledNav, Container, Brand, LogoIMG, LogoText,
  Menu, SearchWrapper, Browser, StyledNavLink, SearchIcon
} from "./styled";
import logoIMG from "../../images/logoIMG.svg";
import searchIcon from "../../images/search.svg";
import {
  setMoviesQuery,
  setPeopleQuery,
  searchMovies,
  searchPeople,
  clearMoviesResults,
  clearPeopleResults
} from "../../store/searchSlice";

const Navigation = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isPeopleTab = pathname.includes("/people");
  const placeholder = isPeopleTab ? "Search for people..." : "Search for movies...";
  const [input, setInput] = useState("");

  const debounceRef = useRef(
    debounce((query, isPeople) => {
      const trimmed = query.trim();
      if (isPeople) {
        if (!trimmed) {
          dispatch(clearPeopleResults());
          return;
        }
        dispatch(setPeopleQuery(trimmed));
        dispatch(searchPeople(trimmed));
        navigate("/people");
      } else {
        if (!trimmed) {
          dispatch(clearMoviesResults());
          return;
        }
        dispatch(setMoviesQuery(trimmed));
        dispatch(searchMovies(trimmed));
        navigate("/movies");
      }
    }, 500)
  );

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    debounceRef.current(value, isPeopleTab);
  };

  useEffect(() => {
    setInput("");
    if (isPeopleTab) {
      dispatch(clearPeopleResults());
    } else {
      dispatch(clearMoviesResults());
    }
  }, [isPeopleTab, dispatch]);

  useEffect(() => {
    const currentDebounce = debounceRef.current;
    return () => currentDebounce.cancel();
  }, []);

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
          <Browser
            type="search"
            placeholder={placeholder}
            value={input}
            onChange={handleChange}
            aria-label={placeholder}
          />
        </SearchWrapper>
      </Container>
    </StyledNav>
  );
};

export default Navigation;