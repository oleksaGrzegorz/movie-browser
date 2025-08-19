import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNav = styled.nav`
  background: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
  width: 100%;
  height: 94px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0px 8px 0px;
  box-sizing: border-box;
  min-width: 320px;
  flex-wrap: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
    padding: 16px 0px 16px 0px;
    height: auto;
    min-height: 80px;
    flex-wrap: wrap;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px;
  padding: 15px 25px;
  border: 2px solid transparent;
  border-radius: 50px;
  transition: all 0.2s ease-in-out;
  font-weight: 600;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
    padding: 10px 15px;
    margin-left: 5px;
  }

  &.active {
    border-color: ${({ theme }) => theme.color.white};
  }

  &:hover {
    border-color: ${({ theme }) => theme.color.white};
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  flex-grow: 1;
  margin-left: 70px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
    margin-left: 5px;
    gap: 0px;
    padding: 5px 8px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 0px 0px 200px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
    font-size: 16px;
    line-height: 130%;
    margin: 0px 0px 0px 20px;
  }
`;

export const LogoIMG = styled.img`
  width: 40px;
  height: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
    width: 20px;
    height: 20px;
  }
`;

export const LogoText = styled.span`
  font-weight: 400;
  font-size: 24px;
  line-height: 40px;
  padding-left: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
    font-size: 16px;
    line-height: 130%;
  }
`;

export const Browser = styled.input`
  border: 1px;
  border-radius: 33px;
  width: 432px;
  height: 48px;
  padding: 16px 8px 16px 8px;
  margin: 0px 200px 0px 0px;
  background: ${({ theme }) => theme.color.white};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
    margin: 10px 16px 0px 16px;
  }
`;