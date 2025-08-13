import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
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
} from "./styled";

const img = (path, size = "w342") => (path ? `https://image.tmdb.org/t/p/${size}${path}` : null);

export default function PersonList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Math.max(1, Number(searchParams.get("page") || 1));

  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        setLoading(true);
        setError(null);
        const { people, totalPages } = await fetchPopularPeople(page);
        if (!cancelled) {
          setPeople(people || []);
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
                {img(profile_path)
                  ? <img src={img(profile_path)} alt={name} loading="lazy" />
                  : null}
              </PersonThumb>
              <PersonName>{name}</PersonName>
            </PersonCard>
          </PersonItem>
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
