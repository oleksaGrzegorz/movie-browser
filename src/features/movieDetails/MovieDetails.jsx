import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { fetchMovieDetails, fetchMovieCredits } from "../../api/fetchMovieApi";
import SectionTitle from "../../common/components/SectionTitle";
import PersonCard from "../../common/components/PersonCard";
import { PeopleGrid } from "../../common/components/Grids";
import { PosterImage } from "../../common/components/Poster";
import Loader from "../../common/Loader/Loader";
import StarIcon from "../../images/star.svg";
import ProfilePlaceholder from "../../images/profile.svg";
import VideoPlaceholder from "../../images/video.svg";
import { Badge } from "../../common/components/Badge";
import {
  Container,
  HeroShell,
  Hero,
  HeroBg,
  HeroContent,
  HeroTitle,
  HeroRating,
  HeroStar,
  HeroValue,
  HeroSlashTen,
  HeroVotes,
  DetailsCard,
  PosterCol,
  InfoCol,
  Title,
  Year,
  Meta,
  MetaRow,
  MetaLabel,
  MetaValue,
  Badges,
  RatingRow,
  Star,
  RatingValue,
  SlashTen,
  Votes,
  Overview,
} from "./styled";

const tmdb = (path, size = "w780") =>
  path ? `https://image.tmdb.org/t/p/${size}${path}` : null;

const formatDate = (iso) => {
  if (!iso) return "Unknown";
  const d = new Date(iso);
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yyyy = d.getFullYear();
  return `${dd}.${mm}.${yyyy}`;
};

export default function MovieDetails() {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const [credits, setCredits] = useState({ cast: [], crew: [] });
  const [loading, setLoading] = useState(true);

  const searchState = useSelector((state) => state.search);
  const { isTyping, isSearching } = searchState;

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      try {
        const d = await fetchMovieDetails(id);
        const c = await fetchMovieCredits(id);
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

  const heroBg =
    details?.backdrop_path
      ? tmdb(details.backdrop_path, "w1280")
      : details?.poster_path
        ? tmdb(details.poster_path, "w780")
        : null;

  const genres = useMemo(
    () => (details?.genres || []).map((g) => g.name),
    [details?.genres]
  );

  const hasVotes =
    Number.isFinite(details?.vote_count) && details.vote_count > 0 &&
    Number.isFinite(details?.vote_average) && details.vote_average > 0;

  const rating = hasVotes
    ? details.vote_average.toFixed(1).replace(".", ",")
    : null;

  const production =
    (details?.production_countries || [])
      .map((c) => c.name)
      .filter(Boolean)
      .join(", ") || "Unknown";

  return (
    <Loader
      ready={!loading && !isSearching}
      delayMs={1000}
      isTyping={isTyping}
      showTypingIndicator={false}
    >
      {details && (
        <>
          <HeroShell>
            <Hero>
              {heroBg && <HeroBg style={{ backgroundImage: `url(${heroBg})` }} />}
              <HeroContent>
                <HeroTitle>{details.title || details.original_title}</HeroTitle>
                <HeroRating>
                  <HeroStar src={StarIcon} alt="" />
                  <HeroValue>{rating || "No votes yet"}</HeroValue>
                  {rating && <HeroSlashTen>/10</HeroSlashTen>}
                </HeroRating>
                {hasVotes && <HeroVotes>{details.vote_count} votes</HeroVotes>}
              </HeroContent>
            </Hero>
          </HeroShell>

          <Container>
            <DetailsCard>
              <PosterCol>
                <PosterImage
                  src={tmdb(details.poster_path, "w342")}
                  alt={details.title || details.original_title}
                  fallback={VideoPlaceholder}
                  ratio="2/3"
                  size="small"
                />
              </PosterCol>

              <InfoCol>
                <Title>{details.title || details.original_title}</Title>

                <Year>
                  {details.release_date
                    ? new Date(details.release_date).getFullYear()
                    : "Unknown"}
                </Year>

                <Meta>
                  <MetaRow>
                    <MetaLabel>Production:</MetaLabel>
                    <MetaValue>{production}</MetaValue>
                  </MetaRow>
                  <MetaRow>
                    <MetaLabel>Release date:</MetaLabel>
                    <MetaValue>{formatDate(details.release_date)}</MetaValue>
                  </MetaRow>
                </Meta>

                {!!genres.length && (
                  <Badges>
                    {genres.map((g) => (
                      <Badge key={g}>{g}</Badge>
                    ))}
                  </Badges>
                )}

                <RatingRow>
                  <Star src={StarIcon} alt="" />
                  <RatingValue>{rating || "No votes yet"}</RatingValue>
                  {rating && (
                    <>
                      <SlashTen>/10</SlashTen>
                      <Votes>{details.vote_count} votes</Votes>
                    </>
                  )}
                </RatingRow>

                {details.overview && <Overview>{details.overview}</Overview>}
              </InfoCol>
            </DetailsCard>

            {credits.cast?.length > 0 && (
              <>
                <SectionTitle>Cast</SectionTitle>
                <PeopleGrid>
                  {credits.cast.slice(0, 24).map((p) => (
                    <PersonCard
                      key={`c-${p.id}-${p.cast_id || p.credit_id}`}
                      id={p.id}
                      name={p.name}
                      subtitle={p.character}
                      profileUrl={tmdb(p.profile_path, "w342")}
                      fallbackAvatar={ProfilePlaceholder}
                      to={`/people/${p.id}`}
                    />
                  ))}
                </PeopleGrid>
              </>
            )}

            {credits.crew?.length > 0 && (
              <>
                <SectionTitle>Crew</SectionTitle>
                <PeopleGrid>
                  {credits.crew.slice(0, 24).map((p) => (
                    <PersonCard
                      key={`w-${p.id}-${p.credit_id}`}
                      id={p.id}
                      name={p.name}
                      subtitle={p.job}
                      profileUrl={tmdb(p.profile_path, "w342")}
                      fallbackAvatar={ProfilePlaceholder}
                      to={`/people/${p.id}`}
                    />
                  ))}
                </PeopleGrid>
              </>
            )}
          </Container>
        </>
      )}
    </Loader>
  );
}
