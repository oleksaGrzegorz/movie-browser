import { LinkBlock } from "./styled";
import { PosterImage } from "../Poster";
import VideoPlaceholder from "../../../images/video.svg";
import {
  MovieTile,
  PosterBox,
  Body,
  Title,
  SubDesktop,
  SubMobile,
  Badges,
  Badge,
  MetaBlock,
  RatingRow,
  StarIconImg,
  Value,
  Votes,
} from "./styled";

export default function MovieCard({
  id,
  title,
  posterUrl,
  year,
  genres = [],
  subtitle,
  voteAverage,
  voteCount,
  to = `/movies/${id}`,
}) {
  const subDesktop = [subtitle, year].filter(Boolean).join(" ");

  return (
    <LinkBlock to={to} aria-label={`Open details of ${title}`}>
      <MovieTile>
        <PosterBox>
          <PosterImage
            src={posterUrl}
            alt={title}
            fallback={VideoPlaceholder}
            ratio="2/3"
            size="small"
          />
        </PosterBox>
        <Body>
          <Title title={title}>{title}</Title>
          {subDesktop && <SubDesktop>{subDesktop}</SubDesktop>}
          {year && <SubMobile>{year}</SubMobile>}
          {!!genres.length && (
            <Badges>
              {genres.map((g) => (
                <Badge key={g}>{g}</Badge>
              ))}
            </Badges>
          )}
          {(voteAverage || voteCount) && (
            <MetaBlock>
              <RatingRow>
                <StarIconImg />
                <Value>{voteAverage ?? "–"}</Value>
                {voteCount ? <Votes>{voteCount} votes</Votes> : null}
              </RatingRow>
            </MetaBlock>
          )}
        </Body>
      </MovieTile>
    </LinkBlock>
  );
}
