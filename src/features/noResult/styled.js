import styled from "styled-components";

export const NoResultText = styled.h1`
  margin: 40px 0px 0px 180px;
  font-size: xx-large;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
    margin: 10px 0px 0px 10px;
    font-size: x-large;
  }
`;

export const IMGWrapper = styled.div`
  display: grid;
  justify-content: center;
`;

export const NoResultIMG = styled.img`
  width: 500px;
  height: 400px;
`; 