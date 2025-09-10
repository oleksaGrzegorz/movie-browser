import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { fetchPersonDetails, fetchPersonCredits, fetchGenres } from "../../api/fetchMovieApi";
import SectionTitle from "../../common/components/SectionTitle";
import { MoviesGrid } from "../../common/components/Grids";
import MovieCard from "../../common/components/MovieCard";
import { PosterImage } from "../../common/components/Poster";
import Loader from "../../common/Loader/Loader";

import ProfilePlaceholder from "../../images/profile.svg";
import {
  Container,
  HeaderCard,
  Avatar,
  Info,
  Name,
  Row,
  Label,
  Value,
  Bio,
} from "./styled";

const tmdb = (path, size = "w342") =>
  path ? `https://image.tmdb.org/t/p/${size}${path}` : null;

const formatDate = (iso) => {
  if (!iso) return "Unknown";
  const d = new Date(iso);
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yyyy = d.getFullYear();
  return `${dd}.${mm}.${yyyy}`;
};

export default function PersonDetails() {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const [credits, setCredits] = useState({ cast: [], crew: [] });
  const [genresMap, setGenresMap] = useState({});
  const [ready, setReady] = useState(false);

  const searchState = useSelector((state) => state.search);
  const { isTyping, isSearching } = searchState;

  useEffect(() => {
    let off = false;
    (async () => {
      try {
        const list = await fetchGenres();
        if (!off && Array.isArray(list)) {
          const m = {};
          for (const g of list) m[g.id] = g.name;
          setGenresMap(m);
        }
      } catch { }
    })();
    return () => {
      off = true;
    };
  }, []);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setReady(false);
      try {
        const d = await fetchPersonDetails(id);
        const c = await fetchPersonCredits(id);
        if (!cancelled) {
          setDetails(d || null);
          setCredits({ cast: c?.cast || [], crew: c?.crew || [] });
        }
      } finally {
        if (!cancelled) setReady(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [id]);

  const mapMovie = (m, roleKey) => {
    const voteCount = Number.isFinite(m.vote_count) ? m.vote_count : 0;
    const avgNum = Number(m.vote_average);
    const hasVotes = voteCount > 0 && Number.isFinite(avgNum) && avgNum > 0;
    const voteAverage = hasVotes ? avgNum.toFixed(1).replace(".", ",") : null;

    return {
      id: m.id,
      title: m.title || m.original_title,
      year: m.release_date ? new Date(m.release_date).getFullYear() : undefined,
      subtitle: m[roleKey] || undefined,
      posterUrl: tmdb(m.poster_path),
      genres: Array.isArray(m.genre_ids)
        ? m.genre_ids.slice(0, 3).map((gid) => genresMap[gid]).filter(Boolean)
        : [],
      voteAverage,
      voteCount,
    };
  };

  const castClean = useMemo(
    () => (credits.cast || []).filter((m) => m?.id).map((m) => mapMovie(m, "character")),
    [credits.cast, genresMap]
  );
  const crewClean = useMemo(
    () => (credits.crew || []).filter((m) => m?.id).map((m) => mapMovie(m, "job")),
    [credits.crew, genresMap]
  );

  const castCount = castClean.length;
  const crewCount = crewClean.length;

  const showLoader = !ready || isTyping || isSearching;
  const loaderDelay = isTyping ? 0 : 1000;

  return (
    <Container>
      <Loader
        ready={!showLoader}
        delayMs={loaderDelay}
        isTyping={isTyping}
        showTypingIndicator={false}
      >
        {details && (
          <>
            <HeaderCard>
              <Avatar>
                <PosterImage
                  src={tmdb(details.profile_path)}
                  alt={details.name || "Profile photo"}
                  fallback={ProfilePlaceholder}
                  ratio="2/3"
                  size="large"
                />
              </Avatar>

              <Info>
                <Name>{details.name}</Name>

                <Row className="inline">
                  <Label className="desktop-only">Date of birth:</Label>
                  <Label className="mobile-only">Birth:</Label>
                  <Value className="nowrap">{formatDate(details.birthday)}</Value>
                </Row>

                <Row>
                  <Label>Place of birth:</Label>
                  <Value className="stack-on-mobile">{details.place_of_birth || "Unknown"}</Value>
                </Row>
              </Info>

              {details.biography && <Bio>{details.biography}</Bio>}
            </HeaderCard>

            {castCount > 0 && (
              <>
                <SectionTitle>Movies — cast ({castCount})</SectionTitle>
                <MoviesGrid>
                  {castClean.map((m) => (
                    <MovieCard
                      key={`c-${m.id}`}
                      id={m.id}
                      title={m.title}
                      year={m.year}
                      posterUrl={m.posterUrl}
                      genres={m.genres}
                      subtitle={m.subtitle}
                      voteAverage={m.voteAverage}
                      voteCount={m.voteCount}
                      to={`/movies/${m.id}`}
                    />
                  ))}
                </MoviesGrid>
              </>
            )}

            {crewCount > 0 && (
              <>
                <SectionTitle>Movies — crew ({crewCount})</SectionTitle>
                <MoviesGrid>
                  {crewClean.map((m) => (
                    <MovieCard
                      key={`w-${m.id}`}
                      id={m.id}
                      title={m.title}
                      year={m.year}
                      posterUrl={m.posterUrl}
                      genres={m.genres}
                      subtitle={m.subtitle}
                      voteAverage={m.voteAverage}
                      voteCount={m.voteCount}
                      to={`/movies/${m.id}`}
                    />
                  ))}
                </MoviesGrid>
              </>
            )}
          </>
        )}
      </Loader>
    </Container>
  );
}