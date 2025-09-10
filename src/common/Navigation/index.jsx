import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import debounce from "lodash.debounce";
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
import logoIMG from "../../images/logoIMG.svg";
import searchIcon from "../../images/search.svg";
import {
  setMoviesQuery,
  setPeopleQuery,
  searchMovies,
  searchPeople,
  clearMoviesResults,
  clearPeopleResults,
  setSearchStatus,
} from "../../store/searchSlice";

const Navigation = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const isPeopleTab = pathname.includes("/people");
  const placeholder = isPeopleTab ? "Search for people..." : "Search for movies...";

  const [input, setInput] = useState("");

  const debounceRef = useRef(
    debounce((rawQuery, isPeople) => {
      const normalized = rawQuery.replace(/\s{2,}/g, " ");
      const isEmpty = normalized.length === 0 || normalized.trim().length === 0;

      if (isPeople) {
        if (isEmpty) {
          dispatch(clearPeopleResults());
          dispatch(setSearchStatus({ isTyping: false, isSearching: false }));
          return;
        }
        dispatch(setPeopleQuery(normalized));
        dispatch(setSearchStatus({ isTyping: false, isSearching: true }));
        dispatch(searchPeople({ query: normalized, page: 1 }));
        navigate("/people?search=" + encodeURIComponent(normalized), { replace: true });
      } else {
        if (isEmpty) {
          dispatch(clearMoviesResults());
          dispatch(setSearchStatus({ isTyping: false, isSearching: false }));
          return;
        }
        dispatch(setMoviesQuery(normalized));
        dispatch(setSearchStatus({ isTyping: false, isSearching: true }));
        dispatch(searchMovies({ query: normalized, page: 1 }));
        navigate("/movies?search=" + encodeURIComponent(normalized), { replace: true });
      }
    }, 500)
  );

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);

    if (value) {
      setSearchParams({ search: value });
    } else {
      setSearchParams({});
    }

    dispatch(setSearchStatus({ isTyping: true, isSearching: false }));
    debounceRef.current(value, isPeopleTab);
  };

  useEffect(() => {
    const queryFromUrl = searchParams.get("search") || "";
    setInput(queryFromUrl);

    if (queryFromUrl === "") {
      if (isPeopleTab) {
        dispatch(clearPeopleResults());
      } else {
        dispatch(clearMoviesResults());
      }
      dispatch(setSearchStatus({ isTyping: false, isSearching: false }));
    }
  }, [isPeopleTab, dispatch, searchParams]);

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