import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams, useLocation } from "react-router-dom";
import Loader from "../../common/Loader/Loader";
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
import { searchPeople } from "../../store/searchSlice";

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
  const dispatch = useDispatch();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Math.max(1, Number(searchParams.get("page") || 1));
  const peopleQuery = searchParams.get("search") || "";
  const isPeopleTab = location.pathname.startsWith("/people");

  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const [width, setWidth] = useState(() => window.innerWidth);

  const cols = useMemo(() => getCols(width), [width]);
  const pad = useMemo(
    () => (!people.length ? 0 : (cols - (people.length % cols)) % cols),
    [people.length, cols]
  );

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      params.set("page", "1");
      if (peopleQuery) {
        params.set("search", peopleQuery);
      } else {
        params.delete("search");
      }
      return params;
    });
  }, [peopleQuery, isPeopleTab, setSearchParams]);

  useEffect(() => {
    const fetchData = async () => {
      let cancelled = false;
      try {
        setLoading(true);
        setError(null);

        if (isPeopleTab && peopleQuery && peopleQuery.trim() !== "") {
          const results = await dispatch(
            searchPeople({ query: peopleQuery, page })
          ).unwrap();
          if (!cancelled) {
            setPeople(results.results || []);
            setTotalPages(results.total_pages || 1);
          }
        } else if (isPeopleTab) {
          const [res] = await Promise.all([
            fetchPopularPeople(page),
            new Promise((resolve) => setTimeout(resolve, 1000)),
          ]);
          if (!cancelled) {
            setPeople(res.people || []);
            setTotalPages(res.totalPages > 500 ? 500 : res.totalPages || 1);
          }
        } else {
          setPeople([]);
        }
      } catch (err) {
        if (!cancelled) setError(err.message || "Error");
      } finally {
        setLoading(false);
      }
      return () => {
        cancelled = true;
      };
    };
    fetchData();
  }, [page, peopleQuery, dispatch, isPeopleTab]);

  if (loading) return <Loader full />;
  if (error) return <Container>Error: {error}</Container>;

  return (
    <Container>
      <MainHeader>
        {isPeopleTab &&
          (peopleQuery
            ? `Search results for "${peopleQuery}"`
            : "Popular people")}
      </MainHeader>
      {people.length === 0 && isPeopleTab ? (
        <p>Brak wyników</p>
      ) : (
        <List>
          {people.map(({ id, profile_path, name }) => (
            <PersonItem key={id}>
              <PersonCard to={`/people/${id}`}>
                <PersonThumb>
                  {profile_path ? (
                    <img src={img(profile_path)} alt={name} loading="lazy" />
                  ) : (
                    <img src={ProfilePlaceholder} alt="No profile available" />
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
      )}
      {isPeopleTab && people.length > 0 && (
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={(newPage) =>
            setSearchParams((prev) => {
              const params = new URLSearchParams(prev);
              params.set("page", String(newPage));
              if (peopleQuery) {
                params.set("search", peopleQuery);
              }
              return params;
            })
          }
        />
      )}
    </Container>
  );
}
