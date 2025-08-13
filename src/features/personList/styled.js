import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  max-width: 1368px;
  width: 100%;
  margin: 0 auto;
  padding: 24px clamp(16px, 4vw, 32px) 40px;
    box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
`;

export const MainHeader = styled.h1`
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;
  margin: 0 0 20px 0;

  @media (max-width: 667px) {
    font-size: 24px;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 24px;
  list-style: none;
  padding: 0 8px;   /* lekki gutter, żeby tło było widoczne przy krawędziach */
  margin: 0;
  align-items: stretch;

  @media (max-width: 1366px) { grid-template-columns: repeat(5, 1fr); }
  @media (max-width: 1100px) { grid-template-columns: repeat(4, 1fr); }
  @media (max-width: 900px)  { grid-template-columns: repeat(3, 1fr); }
  @media (max-width: 667px)  { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 480px)  { grid-template-columns: 1fr; }
`;

export const PersonItem = styled.li`
  height: 100%;
`;

export const PersonCard = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  height: 100%;
  width: 100%;
  padding: 16px;
  background: #fff;
  box-shadow: 0px 4px 12px 0px #bac7d580;
  border-radius: 5px;
  text-decoration: none;
  color: inherit;
  transition: transform .2s;

  &:hover { transform: translateY(-2px); }
`;

export const PersonThumb = styled.div`
  width: 100%;
  aspect-ratio: 2/3;
  background: #c4c4c4;
  border-radius: 5px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
`;

export const PersonName = styled.h2`
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
  margin: 0;
  text-align: center;

  /* stabilizacja wysokości podpisu => równe karty w wierszu */
  min-height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 80px;
  font-size: 14px;
  padding-bottom: 80px;
`;

export const PaginationButton = styled.button`
  font-family: 'Poppins', sans-serif;
  background: #d6e4ff;
  border: none;
  border-radius: 5px;
  padding: 6px 12px;
  cursor: pointer;
  box-shadow: 0 1px 2px rgba(0,0,0,0.1);
  transition: background-color .3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-width: 75px;
  height: 36px;
  color: #0044cc;

  &:hover:not(:disabled) { background: #e0e0e0; }
  &:disabled { opacity: .5; cursor: default; color: #7e839a; }

  @media (max-width: 667px) {
    min-width: 50px;
    padding: 4px 8px;
    gap: 4px;
  }
`;

export const PageInfo = styled.span`
  color: #7e839a;
  font-size: 16px;
`;

export const Page = styled.span`
  color: #000;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
`;
