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

export const BackdropImage = styled.img`
  width: auto;
  height: 100%;
  object-fit: cover;
`;

export const BackdropContent = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
`;

export const BackdropTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`;

export const BackdropRating = styled.span`
  display: block;
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 5px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
`;

export const BackdropVotes = styled.span`
  display: block;
  font-size: 1rem;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
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
