import styled from "styled-components";
import { Link } from "react-router-dom";

export const ErrorWrapper = styled.div`
  min-width: 375px;
  display: grid;
  align-items: center;
`;

export const ErrorImage = styled.img`
  width: 120px;
  height: 120px;
`;

export const ErrorTitle = styled.h1`
  display: flex;
  font-size: 32px;
  justify-content: center;
  margin-top: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
    font-size: 24px;
    text-align: center;
  }
`;

export const ErrorText = styled.p`
  text-align: center;
  text-shadow: 0px 4px 4px #00000061;
  font-weight: 500;
`;

export const TextBreaker = styled.span`
  display: block;
`;

export const ImageWrapper = styled.div`
  display: grid;
  justify-content: center;
  margin-top: 100px;
`;

export const HomeLink = styled(Link)`
  background: ${({ theme }) => theme.color.blue};
  color: ${({ theme }) => theme.color.white};
  padding: 14px 20px;
  width: 181px;
  height: 51px;
  justify-self: center;
  font-weight: 500;
  font-size: 14px;
  border-radius: 5px;
  white-space: nowrap;
  scale: 0.8;
`;