import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Loading from "../../components/loader";
import ProfilePlaceholder from "../../images/profile.svg";
import { fetchPopularPeople } from "../movieList/fetchMovieApi";
import {
  Container,
  MainHeader,
  List,
  PersonItem,
  PersonCard,
  PersonThumb,
  PersonName,
  GhostItem,
} from "./styled";
import Pagination from "../../common/Pagination/Pagination";

const img = (path, size = "w342") =>
  path ? `https://image.tmdb.org/t/p/${size}${path}` : null;

const getCols = (w) => {
  if (w <= 480) return 1;
  if (w <= 667) return 2;
  if (w <= 900) return 3;
  if (w <= 1100) return 4;
  if (w <= 1366) return 5;
  return 6;
};

export default function PersonList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Math.max(1, Number(searchParams.get("page") || 1));

  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const [width, setWidth] = useState(() => window.innerWidth);

  useEffect(() => {
    let cancelled = false;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const [res] = await Promise.all([
          fetchPopularPeople(page),
          new Promise((resolve) => setTimeout(resolve, 1000)),
        ]);

        if (!cancelled) {
          setPeople(res.people || []);
          setTotalPages(res.totalPages > 500 ? 500 : res.totalPages || 1);
        }
      } catch (e) {
        if (!cancelled) setError(e.message || "Error");
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchData();

    return () => {
      cancelled = true;
    };
  }, [page]);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const cols = useMemo(() => getCols(width), [width]);
  const pad = useMemo(() => {
    if (!people.length) return 0;
    return (cols - (people.length % cols)) % cols;
  }, [people.length, cols]);

  if (loading) return <Loading full />;
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

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={(newPage) => setSearchParams({ page: String(newPage) })}
      />
    </Container>
  );
}
