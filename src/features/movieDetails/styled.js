import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Container = styled.div`
  margin: 0 auto;
  margin-bottom: 336px;
  overflow-x: hidden;
  @media (max-width: 768px) {
    margin-bottom: 88px;
  }
`;

export const Backdrop = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  background-color: black;
  height: 770px;
  margin-bottom: 20px;
  overflow: hidden;

  @media (max-width: 768px) {
    max-height: 248px;
    width: 100%;
  }
`;

export const BackdropImageContainer = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const BackdropImage = styled.img`
  width: auto;
  height: 100%;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const BackdropOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
      to right,
      #000000 0%,
      rgba(0, 0, 0, 0.8) 3%,
      rgba(0, 0, 0, 0.4) 8%,
      rgba(0, 0, 0, 0.1) 15%,
      transparent 20%,
      transparent 80%,
      rgba(0, 0, 0, 0.1) 85%,
      rgba(0, 0, 0, 0.4) 92%,
      rgba(0, 0, 0, 0.8) 97%,
      #000000 100%
    ),
    linear-gradient(
      to bottom,
      #000000 0%,
      rgba(0, 0, 0, 0.6) 2%,
      rgba(0, 0, 0, 0.2) 6%,
      rgba(0, 0, 0, 0.05) 12%,
      transparent 18%
    ),
    linear-gradient(
      to top,
      #000000 0%,
      rgba(0, 0, 0, 0.9) 5%,
      rgba(0, 0, 0, 0.6) 12%,
      rgba(0, 0, 0, 0.3) 20%,
      rgba(0, 0, 0, 0.1) 30%,
      transparent 40%
    );

  @media (max-width: 768px) {
    background: linear-gradient(
        to right,
        #000000 0%,
        rgba(0, 0, 0, 0.8) 5%,
        transparent 20%,
        transparent 80%,
        rgba(0, 0, 0, 0.8) 95%,
        #000000 100%
      ),
      linear-gradient(
        to bottom,
        #000000 0%,
        rgba(0, 0, 0, 0.5) 20%,
        rgba(0, 0, 0, 0.2) 50%,
        transparent 80%
      );
  }
`;

export const BackdropContent = styled.div`
  position: absolute;
  bottom: 40px;
  left: 40px;
  color: white;
  z-index: 2;
  padding: 16px;
  border-radius: 8px;

  @media (max-width: 768px) {
    padding: 0;
    bottom: 1px;
    left: 1px;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 8px;
    margin-left: 16px;
  }
`;

export const BackdropTitle = styled.h1`
  font-size: 64px;
  font-weight: 600;
  margin: 0 0 10px 0;
  line-height: 120%;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 768px) {
    font-size: 24px;
    color: white;
    flex-basis: 100%;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const BackdropInfo = styled.div`
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const BackdropRating = styled.div`
  font-weight: 500;
  font-size: 30px;
  line-height: 130%;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const StyledStarIcon = styled.img`
  width: ${(props) => props.size || 24}px;
  height: ${(props) => props.size || 24}px;
  margin-right: 8px;
  @media (max-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;

export const RatingWrapper = styled.div`
  display: flex;
  align-items: baseline;
`;

export const BackdropRatingExtra = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  margin-left: 7px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const BackdropVotes = styled.span`
  display: block;
  font-size: 0.9rem;
  opacity: 0.9;
  margin-top: 16px;
  margin-bottom: 36px;

  @media (max-width: 768px) {
    font-size: 12px;
    margin: 0px;
    display: inline;
    position: relative;
    margin-left: 8px;
    top: 2px;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 1368px;
  margin: 0 auto;
`;

export const InfoSection = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  padding: 40px;
  box-shadow: 0px 4px 12px 0px #bac7d580;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: auto 1fr;
    grid-template-rows: auto auto;
    padding: 16px;
    margin: 0 16px;
    margin-top: 16px;
    align-items: start;
  }
`;

export const Poster = styled.img`
  max-width: 312px;
  border-radius: 5px;
  grid-row: span 2;

  @media (max-width: 768px) {
    max-width: 114px;
    grid-row: auto;
    margin-bottom: 16px;
  }
`;

export const PosterPlaceholder = styled.div`
  width: 100%;
  width: 312px;
  height: 468px;
  border-radius: 5px;
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  grid-row: span 2;

  @media (max-width: 768px) {
    width: 114px;
    height: 171px;
    font-size: 2rem;
  }
`;

export const StyledVideoIcon = styled.img`
  width: 74px;
  height: 56px;

  @media (max-width: 768px) {
    width: 37px;
    height: 28px;
  }
`;

export const MovieInfo = styled.div`
  min-width: 250px;
  grid-column: 2;
  grid-row: 1;
  min-width: 0;
  margin-left: 40px;

  @media (max-width: 768px) {
    margin-bottom: 0;
    padding-bottom: 0;
    margin-left: 16px;
  }
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;
  margin-top: 0px;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 4px;
  }
`;

export const Year = styled.p`
  font-weight: 400;
  font-size: 22px;
  line-height: 120%;
  margin-top: 0px;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 13px;
    margin-bottom: 8px;
    color: #74788b;
  }
`;

export const Label = styled.span`
  color: #74788b;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Production = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 120%;
  margin-bottom: 0px;

  @media (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 8px;
  }
`;

export const ReleaseDate = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 120%;
  margin-top: 8px;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 8px;
  }
`;

export const Genres = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 24px;
  justify-content: flex-start;

  @media (max-width: 768px) {
    font-size: 10px;
    border-radius: 5px;
    margin-bottom: 8px;
    gap: 8px;
  }
`;

export const GenreTag = styled.span`
  background-color: #e4e6f0;
  border-radius: 5px;
  padding: 8px 16px;
  @media (max-width: 768px) {
    padding: 4px 8px;
  }
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  justify-content: flex-start;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-wrap: nowrap;
  }
`;

export const MovieRating = styled.span`
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
  margin-right: 8px;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export const MovieVotes10 = styled.span`
  margin-right: 12px;
  font-size: 14px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const MovieVotes = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 120%;
  margin-right: 12px;

  @media (max-width: 768px) {
    font-size: 12px;
    color: #74788b;
  }
`;

export const Section = styled.div`
  margin-top: 30px;
`;

export const Header = styled.h1`
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;
  margin-top: 64px;

  @media (max-width: 768px) {
    font-size: 20px;
    padding: 0 16px;
    margin-bottom: 0;
    margin-top: 21px;
  }
`;

export const ExtraMovieInfo = styled.div`
  grid-column: 2;
  grid-row: 2;
  margin: 0;
  margin-left: 40px;

  @media (max-width: 768px) {
    grid-column: 1 / -1;
    grid-row: 2;
    margin: 0;
  }
`;

export const Overview = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 160%;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 13px;
    margin: 0;
  }
`;

export const StyledLink = styled(RouterLink)`
  display: contents;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 24px;
  margin-bottom: 10px;
  margin-top: 10px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 16px;
    margin-top: 0;
  }
`;

export const GridItem = styled.div`
  max-width: 208px;
  text-align: center;
  opacity: 1;
  padding: 16px;
  gap: 12px;
  box-shadow: 0px 4px 12px 0px #bac7d580;

  @media (max-width: 768px) {
  }
`;

export const PosterImage = styled.img`
  border-radius: 5px;
  object-fit: cover;
  width: 176px;
`;

export const PersonInfo = styled.p`
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
  text-align: center;
  margin-top: 12px;
  margin-bottom: 8px;
  word-break: break-word;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ExtraPersonInfo = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  margin-top: 8px;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export const PlaceholderIcon = styled.div`
  max-width: 176px;
  height: 231px;
  padding-top: 150%;
  background-color: #ccc;
  border-radius: 5px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.img`
  width: 72px;
  height: 72px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 768px) {
    width: 48px;
    height: 48px;
  }
`;
