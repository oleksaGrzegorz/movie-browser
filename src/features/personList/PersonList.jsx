import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Pagination from "../../common/Pagination/Pagination";
import PersonCard from "../../common/components/PersonCard";
import { fetchPeople } from "../../api/fetchMovieApi";
import { Container, MainHeader, GridSection } from "./styled";
import { PeopleGrid } from "../../common/components/Grids";
import DelayedLoader from "../../common/Loader/DelayedLoader";

const profile = (path, size = "w342") =>
  path ? `https://image.tmdb.org/t/p/${size}${path}` : null;

export default function PersonList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Math.max(1, Number(searchParams.get("page") || 1));

  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      try {
        const res = await fetchPeople(page);
        if (!cancelled) {
          setPeople(res.results || []);
          setTotalPages(Math.min(res.total_pages || 1, 500));
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [page]);

  return (
    <Container>
      <MainHeader>Popular People</MainHeader>

      <DelayedLoader active={loading} minDuration={500} fadeDuration={300} />
      {!loading && (
        <>
          <GridSection>
            <PeopleGrid>
              {people.map(({ id, profile_path, name }) => (
                <PersonCard
                  key={id}
                  id={id}
                  name={name}
                  profileUrl={profile(profile_path)}
                />
              ))}
            </PeopleGrid>
          </GridSection>

          {people.length > 0 && (
            <Pagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={(newPage) => setSearchParams({ page: String(newPage) })}
            />
          )}
        </>
      )}
    </Container>
  );
}
