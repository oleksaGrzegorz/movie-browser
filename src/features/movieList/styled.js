import styled from "styled-components";

export const Container = styled.div`
  width: 1368px;
  height: 1391px;
  margin: 0 auto;
`;

export const MainHeader = styled.h1`
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;
  letter-spacing: 0px;
  vertical-align: middle;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  list-style: none;
  padding: 0;
`;

export const MovieCard = styled.li`
  width: 324px;
  max-height: 670px;
  box-shadow: 0px 4px 12px 0px #bac7d580;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 5px;
`;

export const Poster = styled.img`
  width: 292px;
  height: 414px;
  padding: 16px;
  border-radius: 20px;
`;

export const Description = styled.div`
  padding: 0px 16px;
  margin: 0px;
  flex: 1;
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
  letter-spacing: 0px;
  vertical-align: middle;
  margin: 0px;
`;

export const Year = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0px;
  vertical-align: middle;
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
  letter-spacing: 0%;
  vertical-align: middle;
`;

export const Vote = styled.p`
  padding: 0 16px 16px 16px;
  margin-top: auto;
  margin-bottom: 0px;
`;

export const VoteAverage = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0px;
  vertical-align: middle;
  margin-right: 12px;
`;

export const VoteInfo = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0px;
  vertical-align: middle;
  color: #7e839a;
`;


export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
  font-family: Arial, sans-serif;
  font-size: 14px;
`;

export const PaginationButton = styled.button`
  background: #f0f0f0;
  border: none;
  border-radius: 8px;
  padding: 6px 12px;
  cursor: pointer;
  box-shadow: 0 1px 2px rgba(0,0,0,0.1);
  transition: background-color 0.3s ease;

  &:hover:not(:disabled) {
    background: #e0e0e0;
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

export const PageInfo = styled.span`
  color: #333;
`;