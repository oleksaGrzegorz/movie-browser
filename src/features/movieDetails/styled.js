import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
`;

export const Backdrop = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  background-color: black;
  height: 770px;
  margin-bottom: 20px;
  overflow: hidden;
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
`;

export const BackdropContent = styled.div`
  position: absolute;
  bottom: 40px;
  left: 0;
  color: white;
  z-index: 2;
`;

export const BackdropTitle = styled.h1`
  font-size: 64px;
  font-weight: 600;
  margin: 0 0 10px 0;
  line-height: 120%;
`;

export const StyledStarIcon = styled.img`
  width: ${(props) => props.size || 24}px;
  height: ${(props) => props.size || 24}px;
  margin-right: 8px;
`;

export const BackdropRating = styled.div`
  font-weight: 500;
  font-size: 30px;
  line-height: 130%;
  letter-spacing: 0px;
  margin-right: 7px;
  display: flex;
  align-items: center;
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
`;

export const BackdropVotes = styled.span`
  display: block;
  font-size: 0.9rem;
  opacity: 0.9;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.9);
  margin-top: 16px;
  margin-bottom: 56px;
`;

export const ContentWrapper = styled.div`
  max-width: 1368px;
  margin: 0 auto;
`;

export const InfoSection = styled.div`
  display: flex;
  gap: 40px;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 40px;
  box-shadow: 0px 4px 12px 0px #bac7d580;
  background-color: white;
`;

export const Poster = styled.img`
  max-width: 312px;
  border-radius: 5px;
`;

export const PosterPlaceholder = styled.div`
  width: 100%;
  max-width: 300px;
  height: 450px;
  border-radius: 10px;
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 3rem;
  color: #666;
`;

export const MovieInfo = styled.div`
  flex: 1;
  min-width: 250px;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;
  margin-top: 0px;
  margin-bottom: 24px;
`;

export const Year = styled.p`
  font-weight: 400;
  font-size: 22px;
  line-height: 120%;
  margin-top: 0px;
  margin-bottom: 24px;
`;

export const Label = styled.span`
  color: #74788b;
`;

export const Production = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 120%;
  letter-spacing: 0px;
  margin-bottom: 0px;
`;

export const ReleaseDate = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 120%;
  margin-top: 8px;
  margin-bottom: 24px;
`;

export const Genres = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 24px;
`;

export const GenreTag = styled.span`
  background-color: #e4e6f0;
  border-radius: 5px;
  padding-top: 8px;
  padding-right: 16px;
  padding-bottom: 8px;
  padding-left: 16px;
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

export const MovieRating = styled.span`
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
  margin-right: 8px;
  margin-left: 0;
`;

export const MovieVotes = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 120%;
  margin-right: 12px;
`;

export const Section = styled.div`
  margin-top: 30px;
`;

export const Header = styled.h1`
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;
`;

export const Overview = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 160%;
  margin-top: 10px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  margin-top: 10px;
`;

export const GridItem = styled.div`
  text-align: center;
  opacity: 1;
  padding: 16px;
  gap: 12px;
  box-shadow: 0px 4px 12px 0px #bac7d580;
`;

export const PosterImage = styled.img`
  width: 100%;
  border-radius: 5px;
  object-fit: cover;
`;

export const PersonInfo = styled.p`
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
  letter-spacing: 0px;
  text-align: center;
  margin-top: 12px;
  margin-bottom: 8px;
`;

export const ExtraPersonInfo = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: 0px;
  text-align: center;
  margin-top: 8px;
  margin-bottom: 16px;
`;

export const PlaceholderIcon = styled.div`
  width: 100%;
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
`;
