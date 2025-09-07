import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPersonDetails, fetchPersonCredits, fetchGenres } from "../../api/fetchMovieApi";
import SectionTitle from "../../common/components/SectionTitle";
import { MoviesGrid } from "../../common/components/Grids";
import MovieCard from "../../common/components/MovieCard";
import { PosterImage } from "../../common/components/Poster";
import DelayedLoader from "../../common/Loader/DelayedLoader";
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
  if (!iso) return "—";
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
  const [loading, setLoading] = useState(true);

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
      setLoading(true);
      try {
        const d = await fetchPersonDetails(id);
        const c = await fetchPersonCredits(id);
        if (!cancelled) {
          setDetails(d || null);
          setCredits({ cast: c?.cast || [], crew: c?.crew || [] });
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [id]);

  const mapMovie = (m, roleKey) => ({
    id: m.id,
    title: m.title || m.original_title,
    year: m.release_date ? new Date(m.release_date).getFullYear() : undefined,
    subtitle: m[roleKey] || undefined,
    posterUrl: tmdb(m.poster_path),
    genres: Array.isArray(m.genre_ids)
      ? m.genre_ids.slice(0, 3).map((gid) => genresMap[gid]).filter(Boolean)
      : [],
    voteAverage: Number.isFinite(m.vote_average)
      ? m.vote_average.toFixed(1).replace(".", ",")
      : undefined,
    voteCount: m.vote_count,
  });

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

  return (
    <Container>
      <DelayedLoader active={loading} minDuration={500} fadeDuration={300} />
      {!loading && details && (
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
                <Value className="stack-on-mobile">{details.place_of_birth || "—"}</Value>
              </Row>
            </Info>

            {details.biography && <Bio>{details.biography}</Bio>}
          </HeaderCard>

          {castCount > 0 && (
            <>
              <SectionTitle>Movies – cast ({castCount})</SectionTitle>
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
              <SectionTitle>Movies – crew ({crewCount})</SectionTitle>
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
    </Container>
  );
}
