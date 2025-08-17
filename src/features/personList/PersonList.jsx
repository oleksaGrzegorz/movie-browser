// src/features/personList/PersonList.jsx
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useTheme } from "styled-components";
import ProfilePlaceholder from "./images/Profile.svg";
import { fetchPopularPeople } from "../movieList/fetchMovieApi";
import {
  Container,
  MainHeader,
  List,
  PersonItem,
  PersonCard,
  PersonThumb,
  PersonName,
  PaginationWrapper,
  PaginationButton,
  PageInfo,
  Page,
  GhostItem,
} from "./styled";

const img = (path, size = "w342") =>
  path ? `https://image.tmdb.org/t/p/${size}${path}` : null;

// mapowanie szerokości -> liczba kolumn (spójne z media queries w styled.js)
const getDesktopCols = (w, bp) => {
  if (w <= bp.mobileM) return 1;      // <= 480
  if (w <= bp.mobileL) return 2;      // <= 667
  if (w <= 900) return 3;
  if (w <= 1100) return 4;
  if (w <= 1366) return 5;
  return 6;
};

export default function PersonList() {
  const theme = useTheme();
  const bp = theme.breakpoint || theme.breakpoints;

  const [searchParams, setSearchParams] = useSearchParams();
  const page = Math.max(1, Number(searchParams.get("page") || 1));

  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const [width, setWidth] = useState(() => window.innerWidth);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        setLoading(true);
        setError(null);
        const { people: list, totalPages } = await fetchPopularPeople(page);
        if (!cancelled) {
          setPeople(list || []);
          setTotalPages(totalPages > 500 ? 500 : totalPages || 1);
        }
      } catch (e) {
        if (!cancelled) setError(e.message || "Error");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [page]);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const cols = useMemo(() => getDesktopCols(width, bp), [width, bp]);
  const pad = useMemo(() => {
    if (!people.length) return 0;
    return (cols - (people.length % cols)) % cols;
  }, [people.length, cols]);

  const goToFirst = () => setSearchParams({ page: "1" });
  const goToPrev = () => setSearchParams({ page: String(Math.max(1, page - 1)) });
  const goToNext = () => setSearchParams({ page: String(Math.min(totalPages, page + 1)) });
  const goToLast = () => setSearchParams({ page: String(totalPages) });

  if (loading) return <Container>Loading...</Container>;
  if (error) return <Container>Error: {error}</Container>;

  return (
    <Container>
      <MainHeader>Popular people</MainHeader>

      <List>
        {people.map(({ id, profile_path, name }) => (
          <PersonItem key={id}>
            <PersonCard to={`/people/${id}`}>
              <PersonThumb>
                {profile_path ? (
                  <img src={img(profile_path)} alt={name} loading="lazy" />
                ) : (
                  <img
                    src={ProfilePlaceholder}
                    alt="No profile available"
                    width="72"
                    height="72"
                    style={{ objectFit: "contain" }}
                  />
                )}
              </PersonThumb>
              <PersonName>{name}</PersonName>
            </PersonCard>
          </PersonItem>
        ))}

        {Array.from({ length: pad }).map((_, i) => (
          <GhostItem key={`ghost-${i}`} aria-hidden="true" />
        ))}
      </List>

      <PaginationWrapper>
        <PaginationButton onClick={goToFirst} disabled={page === 1}>First</PaginationButton>
        <PaginationButton onClick={goToPrev} disabled={page === 1}>Previous</PaginationButton>
        <PageInfo>Page <Page>{page}</Page> of <Page>{totalPages}</Page></PageInfo>
        <PaginationButton onClick={goToNext} disabled={page === totalPages}>Next</PaginationButton>
        <PaginationButton onClick={goToLast} disabled={page === totalPages}>Last</PaginationButton>
      </PaginationWrapper>
    </Container>
  );
}
