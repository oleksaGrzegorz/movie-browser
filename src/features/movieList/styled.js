import styled from "styled-components";

export const Container = styled.div`
  max-width: 1368px;
  width: 100%;
  margin: 0 auto;
`;

export const MainHeader = styled.h1`
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;

  @media (max-width: 667px) {
    font-size: 18px;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  list-style: none;
  padding: 0;

  @media (max-width: 667px) {
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
    gap: 20px;
  }
`;

export const MovieCard = styled.li`
  width: 324px;
  max-height: 670px;
  box-shadow: 0px 4px 12px 0px #bac7d580;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 5px;

  @media (max-width: 667px) {
    flex-direction: row;
    width: 100%;
    max-height: none;
  }
`;

export const Poster = styled.img`
  width: 292px;
  height: 414px;
  padding: 16px;
  border-radius: 20px;

  @media (max-width: 667px) {
    width: 114px;
    height: 169px;
    padding: 8px;
  }
`;

export const PosterPlaceholder = styled.div`
  width: 292px;
  height: 414px;
  padding: 16px;
  border-radius: 20px;
  background: #c4c4c4;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 667px) {
    width: 120px;
    height: auto;
    padding: 8px;
  }
`;

export const StyledVideoIcon = styled.img`
  width: 48px;
  height: 48px;
  fill: #ffffff;
  color: #ffffff;
`;

export const Description = styled.div`
  padding: 0px 16px;
  margin: 0px;
  flex: 1;

  @media (max-width: 667px) {
    padding: 8px;
  }
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
  margin: 0px;
`;

export const Year = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #7e839a;
  margin: 0px;
`;

export const Genre = styled.p`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 8px;
`;

export const GenreButton = styled.span`
  background-color: #e4e6f0;
  border-radius: 5px;
  padding: 8px 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
`;

export const Vote = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 16px 16px 16px;
  margin-top: auto;
  margin-bottom: 0;
`;

export const VoteAverage = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  margin-right: 12px;
`;

export const VoteInfo = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #7e839a;
`;