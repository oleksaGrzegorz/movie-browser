import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Pagination from "../../common/Pagination/Pagination";
import PersonCard from "../../common/components/PersonCard";
import { fetchPeople, fetchSearchPeople } from "../../api/fetchMovieApi";
import { Container, MainHeader, GridSection } from "./styled";
import { PeopleGrid } from "../../common/components/Grids";
import Loader from "../../common/Loader/Loader";
import ProfilePlaceholder from "../../images/profile.svg";
import NoResult from "../noResult/noResult";

const profile = (path, size = "w342") =>
  path ? `https://image.tmdb.org/t/p/${size}${path}` : null;

export default function PersonList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Math.max(1, Number(searchParams.get("page") || 1));
  const query = (searchParams.get("search") || "").trim();

  const [people, setPeople] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [ready, setReady] = useState(false);

  const searchState = useSelector((state) => state.search);
  const { isTyping, isSearching } = searchState;

  useEffect(() => {
    let cancelled = false;
    setReady(false);
    (async () => {
      const res = query
        ? await fetchSearchPeople(query, page)
        : await fetchPeople(page);
      if (!cancelled) {
        setPeople(res?.results || []);
        setTotalPages(Math.min(res?.total_pages || 1, 500));
        setReady(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [query, page]);

  const title = useMemo(
    () => (query ? `Results for "${query}"` : "Popular People"),
    [query]
  );

  const hasResults = people.length > 0;

  const handlePageChange = (nextPage) => {
    setSearchParams((prev) => {
      const p = new URLSearchParams(prev);
      p.set("page", String(nextPage));
      if (query) p.set("search", query);
      return p;
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const showLoader = !ready || isTyping || isSearching;
  const loaderDelay = isTyping ? 0 : 1000;

  return (
    <Container>
      <MainHeader>{title}</MainHeader>

      <main>
        <Loader
          ready={!showLoader}
          delayMs={loaderDelay}
          isTyping={isTyping}
          showTypingIndicator={true}
        >
          {hasResults ? (
            <>
              <GridSection>
                <PeopleGrid>
                  {people.map(({ id, profile_path, name }) => (
                    <PersonCard
                      key={id}
                      id={id}
                      name={name}
                      profileUrl={profile(profile_path)}
                      fallbackAvatar={ProfilePlaceholder}
                    />
                  ))}
                </PeopleGrid>
              </GridSection>

              <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </>
          ) : (
            <NoResult query={query} />
          )}
        </Loader>
      </main>
    </Container>
  );
}