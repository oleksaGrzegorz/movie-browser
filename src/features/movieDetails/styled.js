import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
`;

export const Backdrop = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  background-color: black;
  height: 60vh;
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
  font-size: 3rem;
  font-weight: bold;
  margin: 0 0 10px 0;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.9);
  line-height: 1.1;
`;

export const BackdropRating = styled.span`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 5px;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.9);
`;

export const BackdropVotes = styled.span`
  display: block;
  font-size: 0.9rem;
  opacity: 0.9;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.9);
`;

export const ContentWrapper = styled.div`
  max-width: 1368px;
  margin: 0 auto;
`;

export const InfoSection = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background-color: white;
`;

export const Poster = styled.img`
  width: 100%;
  max-width: 300px;
  border-radius: 10px;
  flex-shrink: 0;
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

export const Title = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 10px;
`;

export const Year = styled.p`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

export const Production = styled.p`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ReleaseDate = styled.p`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const Genres = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const GenreTag = styled.span`
  background-color: #e0e0e0;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.9rem;
`;

export const Section = styled.div`
  margin-top: 30px;
`;

export const Overview = styled.p`
  font-size: 1rem;
  line-height: 1.5;
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

  img {
    width: 100%;
    border-radius: 5px;
  }

  p {
    margin: 5px 0;
    font-size: 0.9rem;
  }
`;

export const PlaceholderIcon = styled.div`
  width: 100%;
  padding-top: 150%;
  background-color: #ccc;
  border-radius: 5px;
  position: relative;
  &::before {
    content: "👤";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2rem;
  }
`;
