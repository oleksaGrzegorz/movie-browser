import styled from "styled-components";
import { ReactComponent as VectorRightIcon } from "./vectorRight.svg?react";
import { ReactComponent as VectorLeftIcon } from "./vectorLeft.svg?react";

export const Container = styled.div`
  max-width: 1368px;
  width: 100%;
  margin: 0 auto;
`;

export const MainHeader = styled.h1`
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;
  vertical-align: middle;

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
  vertical-align: middle;
  margin: 0px;
`;

export const Year = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
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
  vertical-align: middle;
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
  vertical-align: middle;
  margin-right: 12px;
`;

export const VoteInfo = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  vertical-align: middle;
  color: #7e839a;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 40px;
  font-size: 14px;
  padding-bottom: 103px;
`;

export const ButtonParagraph = styled.p`
  color: black;

  @media (max-width: 667px) {
    display: none;
  }
`;

export const PaginationButton = styled.button`
  background: #d6e4ff;
  border: none;
  border-radius: 5px;
  padding: 6px 12px;
  cursor: pointer;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-width: 75px;
  height: 36px;
  color: #0044cc;

  &:hover:not(:disabled) {
    background: #e0e0e0;
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
    color: #7e839a;
  }

  .mobile-only {
    display: none;
  }

  .double-arrow {
    display: inline-flex;
    align-items: center;
    gap: 0px;
  }

  @media (max-width: 667px) {
    min-width: 50px;
    padding: 4px 8px;
    gap: 4px;

    .mobile-only {
      display: inline;
    }
  }
`;

export const StyledVectorRight = styled(VectorRightIcon)`
  width: 16px;
  height: 16px;

  & path {
    fill: ${({ disabled }) => (disabled ? "#7e839a" : "#0044cc")};
  }

  @media (max-width: 667px) {
    width: 10px;
    height: 10px;
  }
`;

export const StyledVectorLeft = styled(VectorLeftIcon)`
  width: 16px;
  height: 16px;

  & path {
    fill: ${({ disabled }) => (disabled ? "#7e839a" : "#0044cc")};
  }

  @media (max-width: 667px) {
    width: 10px;
    height: 10px;
  }
`;

export const PageInfo = styled.span`
  color: #7e839a;
  font-size: 16px;
`;

export const Page = styled.span`
  color: black;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
`;
