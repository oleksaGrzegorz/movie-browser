import styled from "styled-components";

export const Container = styled.div`
  max-width: 1368px;
  margin: 0 auto;
  padding: 0 16px;

  @media (max-width: 667px) {
    margin: 0 auto;
    padding: 0;
  }
`;

export const MainHeader = styled.h1`
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;
  margin-top: 56px;

  @media (max-width: 667px) {
    font-size: 18px;
    margin-top: 24px;
    padding-left: 16px;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  list-style: none;
  padding: 0;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 667px) {
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
    gap: 20px;
  }
`;

export const MovieCard = styled.li`
  box-shadow: 0px 4px 12px 0px #bac7d580;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 5px;
  height: 100%;
  padding: 16px;

  @media (max-width: 667px) {
    flex-direction: row;
    max-height: none;
    margin-left: 16px;
    margin-right: 16px;
    height: auto;
  }
`;

export const Poster = styled.img`
  width: 292px;
  height: 434px;
  border-radius: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 667px) {
    max-width: 114px;
    max-height: 169px;
    padding: 0px;
    border-radius: 5px;
    margin: 0;
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
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 667px) {
    width: 120px;
    height: auto;
    padding: 8px;
    margin: 0;
  }
`;

export const StyledVideoIcon = styled.img`
  width: 48px;
  height: 48px;
  fill: #ffffff;
  color: #ffffff;
`;

export const Description = styled.div`
  margin: 0px;
  flex: 1;
  margin-top: 16px;
  display: flex;
  flex-direction: column;

  @media (max-width: 667px) {
    padding: 0px 16px;
    margin: 0;
    display: block;
  }
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
  margin: 0px;

  @media (max-width: 667px) {
    font-size: 16px;
  }
`;

export const Year = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #7e839a;
  margin: 0px;

  @media (max-width: 667px) {
    font-size: 13px;
  }
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

  @media (max-width: 667px) {
    font-size: 10px;
    padding-top: 4px;
    padding-right: 8px;
    padding-bottom: 4px;
    padding-left: 8px;
  }
`;

export const Vote = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 16px 16px 16px;
  margin-top: auto;
  margin-bottom: 0;

  @media (max-width: 667px) {
    padding: 0;
  }
`;

export const VoteAverage = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  margin-right: 12px;

  @media (max-width: 667px) {
    font-size: 13px;
  }
`;

export const VoteInfo = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #7e839a;

  @media (max-width: 667px) {
    font-size: 13px;
  }
`;
