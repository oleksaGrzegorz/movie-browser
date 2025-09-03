import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    max-width: 1368px;
    width: 100%;
    margin: 50px auto;
    padding: 0 16px;
    box-sizing: border-box;
`;

export const MainHeader = styled.h1`
    margin: 0 0 20px 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        font-size: ${({ theme }) => theme.typography?.h2.size || "22px"};
        line-height: ${({ theme }) =>
            theme.typography?.h2.lineHeight || "130%"};
        font-weight: ${({ theme }) => theme.typography?.h2.weight || 500};
    }
`;

export const List = styled.ul`
    --cols: 6;
    display: grid;
    grid-template-columns: repeat(var(--cols), 1fr);
    gap: 24px;
    list-style: none;
    padding: 0;
    margin: 32px 0 56px 0;

    @media (max-width: 1366px) {
        --cols: 5;
    }
    @media (max-width: 1100px) {
        --cols: 4;
    }
    @media (max-width: 900px) {
        --cols: 3;
    }
    @media (max-width: 667px) {
        --cols: 2;
        gap: 16px;
        margin: 24px 0 40px 0;
    }
`;

export const PersonItem = styled.li`
    height: 100%;
`;

export const GhostItem = styled.li`
    visibility: hidden;
`;

export const PersonCard = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    width: 100%;
    height: 100%;
    padding: 16px;
    background: ${({ theme }) => theme.color.surface};
    border-radius: ${({ theme }) => theme.radii?.sm || "5px"};
    box-shadow: ${({ theme }) =>
        theme.shadows?.card || "0px 4px 12px rgba(186,199,213,0.5)"};
    color: inherit;
    text-decoration: none;
    transition: transform 0.2s;

    &:hover {
        transform: translateY(-2px);
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileS}px) {
        height: 245px;
        padding: 12px;
        gap: 10px;
    }
`;

export const PersonThumb = styled.div`
    width: 100%;
    aspect-ratio: 2 / 3;
    background: ${({ theme }) => theme.color.placeholder};
    border-radius: ${({ theme }) => theme.radii?.sm || "5px"};
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }

    img[alt="No profile available"] {
        width: 72px;
        height: 72px;
        object-fit: contain;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileS}px) {
        height: 178px;
        aspect-ratio: auto;
        border-radius: ${({ theme }) => theme.radii?.sm || "5px"};
    }
`;

export const PersonName = styled.h2`
    font-size: ${({ theme }) => theme.typography?.h2.size || "22px"};
    font-weight: ${({ theme }) => theme.typography?.h2.weight || 500};
    line-height: ${({ theme }) => theme.typography?.h2.lineHeight || "130%"};
    text-align: center;
    min-height: 58px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileM}px) {
        font-size: 14px;
        line-height: 130%;
        min-height: 36px;
    }
`;
