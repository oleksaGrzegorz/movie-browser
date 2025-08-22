import styled from "styled-components";
import { ReactComponent as VectorRightIcon } from "./vectorRight.svg?react";
import { ReactComponent as VectorLeftIcon } from "./vectorLeft.svg?react";

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 40px;
  font-size: 14px;
  padding-bottom: 103px;

  @media (max-width: 667px) {
    padding-bottom: 31px;
  }
`;

export const ButtonParagraph = styled.p`
  color: black;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;

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
  vertical-align: middle;

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
  vertical-align: middle;

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
