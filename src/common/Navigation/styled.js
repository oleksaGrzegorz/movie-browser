import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "link-active";

export const StyledNav = styled.nav`
  background: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
  width: 100%;
  height: 94px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 8px 0px 8px 0px;
  box-sizing: border-box;
  min-width: 320px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 0px 0px 16px 0px;
    height: auto;
    min-height: 80px;
    flex-wrap: wrap;
  }
`;

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
    color: ${({ theme }) => theme.color.white};
    text-decoration: none;
    text-transform: uppercase;
    font-size: 14px;

    &.${activeClassName} {
        font-weight: bold;
    }

    &:hover {
        border: 2px solid;
        border-radius: 24px;
        padding: 8px 24px 8px 24px;
    }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 0px 0px 20px;
`;

export const LogoIMG = styled.img`
  width: 40px;
  height: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 17px;
    height: 17px;
  }
`;

export const LogoText = styled.p`
  font-weight: medium;
  font-size: 24px;
  line-height: 40px;
  padding-left: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
    line-height: 130%;
  }
`;

export const Browser = styled.input`
    border: 1px;
    border-radius: 33px;
    width: 432px;
    height: 48px;
    padding: 16px 8px 16px 8px;
`;