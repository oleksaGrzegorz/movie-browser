import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

export const StyledNav = styled.nav`
    background: ${({ theme }) => theme.color.textPrimary};
    color: ${({ theme }) => theme.color.surface};
    width: 100%;
    min-height: 94px;
    display: flex;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        min-height: 142px;
        align-items: flex-start;
    }

    @media (min-width: ${({ theme }) =>
            `${theme.breakpoint.mobileL + 1}px`}) and (max-width: ${({
            theme,
        }) => `${theme.breakpoint.laptop - 1}px`}) {
        min-height: 150px;
        align-items: flex-start;
    }
`;

export const Container = styled.div`
    max-width: 1368px;
    margin: 0 auto;
    padding: 0 16px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 16px;
    flex-wrap: wrap;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        padding-top: 12px;
        row-gap: 12px;
        align-items: flex-start;
    }

    @media (min-width: ${({ theme }) =>
            `${theme.breakpoint.mobileL + 1}px`}) and (max-width: ${({
            theme,
        }) => `${theme.breakpoint.laptop - 1}px`}) {
        padding-top: 18px;
        row-gap: 6px;
    }
`;

export const Brand = styled(Link)`
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: inherit;
    flex-shrink: 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        order: 1;
        align-self: center;
    }
`;

export const LogoIMG = styled.img`
    width: 40px;
    height: 40px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        width: 18px;
        height: 18px;
    }
`;

export const LogoText = styled.span`
    font-weight: 600;
    font-size: 24px;
    line-height: 1;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        font-size: 16px;
    }
`;

export const Menu = styled.nav`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-left: 50px;

    @media (min-width: ${({ theme }) =>
            `${theme.breakpoint.mobileL + 1}px`}) and (max-width: ${({
            theme,
        }) => `${theme.breakpoint.laptop - 1}px`}) {
        margin-left: auto;
        order: 2;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        margin-left: auto;
        order: 2;
    }
`;

export const StyledNavLink = styled(NavLink)`
    color: ${({ theme }) => theme.color.surface};
    text-decoration: none;
    text-transform: uppercase;
    font-size: 14px;
    padding: 10px 16px;
    border: 2px solid transparent;
    border-radius: 24px;
    transition: 0.2s;
    white-space: nowrap;

    &.active {
        border-color: ${({ theme }) => theme.color.surface};
    }
    &:hover {
        border-color: ${({ theme }) => theme.color.surface};
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        padding: 8px 12px;
        font-size: 12px;
    }
`;

export const SearchWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 432px;
    height: 48px;
    margin-left: auto;

    @media (min-width: ${({ theme }) =>
            `${theme.breakpoint.mobileL + 1}px`}) and (max-width: ${({
            theme,
        }) => `${theme.breakpoint.laptop - 1}px`}) {
        order: 3;
        flex: 1 1 100%;
        width: 100%;
        margin-left: 0;
        margin-top: 16px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        order: 3;
        flex: 1 1 100%;
        width: 100%;
        margin-left: 0;
        margin-top: 12px;
    }
`;

export const Browser = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 33px;
    padding: 0 16px 0 44px;
    background: ${({ theme }) => theme.color.surface};
    color: ${({ theme }) => theme.color.textPrimary};
    font-size: 14px;

    &:focus {
        outline: none;
    }

    &::placeholder {
        color: ${({ theme }) => theme.color.textSecondary};
        opacity: 1;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        &::placeholder {
            font-size: 13px;
        }
    }
`;

export const SearchIcon = styled.img`
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    width: 18px;
    height: 18px;
    pointer-events: none;
`;
