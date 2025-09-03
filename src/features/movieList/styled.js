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
    --cols: 4;
    display: grid;
    grid-template-columns: repeat(var(--cols), 1fr);
    gap: 24px;
    list-style: none;
    padding: 0;
    margin: 32px 0 56px 0;

    @media (max-width: 1200px) {
        --cols: 3;
    }
    @media (max-width: 900px) {
        --cols: 2;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        --cols: 1;
        gap: 16px;
        margin: 24px 0 40px 0;
    }
`;

export const MovieItem = styled.li`
    height: 100%;
`;

export const MovieCard = styled.article`
    background: ${({ theme }) => theme.color.surface};
    border-radius: ${({ theme }) => theme.radii?.sm || "5px"};
    box-shadow: ${({ theme }) =>
        theme.shadows?.card || "0px 4px 12px rgba(186,199,213,0.5)"};
    overflow: hidden;
    height: 100%;
    padding: 16px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        padding: 12px;
    }
`;

export const CardLink = styled(Link)`
    color: inherit;
    text-decoration: none;
    display: block;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        display: grid;
        grid-template-columns: 114px 1fr;
        gap: 16px;
        align-items: start;
        padding: 0;
    }
`;

export const Poster = styled.img`
    width: 100%;
    aspect-ratio: 2 / 3;
    object-fit: cover;
    display: block;
    border-radius: ${({ theme }) => theme.radii?.sm || "5px"};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        width: 114px;
        height: 169px;
        aspect-ratio: auto;
        border-radius: ${({ theme }) => theme.radii?.sm || "5px"};
    }
`;

export const PosterPlaceholder = styled.div`
    width: 100%;
    aspect-ratio: 2/3;
    background: ${({ theme }) => theme.color.placeholder};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${({ theme }) => theme.radii?.sm || "5px"};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        width: 114px;
        height: 169px;
        aspect-ratio: auto;
        border-radius: ${({ theme }) => theme.radii?.sm || "5px"};
    }
`;

export const CardContent = styled.div`
    padding: 12px 0 0;
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        padding: 0;
        gap: 6px;
    }
`;

export const CardTitle = styled.h2`
    font-size: ${({ theme }) => theme.typography?.h2.size || "22px"};
    font-weight: ${({ theme }) => theme.typography?.h2.weight || 500};
    line-height: ${({ theme }) => theme.typography?.h2.lineHeight || "130%"};
    margin: 0;
    word-break: break-word;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        font-size: 16px;
        line-height: 130%;
    }
`;

export const CardMeta = styled.p`
    margin: 0;
    color: ${({ theme }) => theme.color.textSecondary};
    font-size: 16px;
    line-height: 140%;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        font-size: 13px;
    }
`;

export const GenreRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`;

export const GenreTag = styled.span`
    background-color: #e4e6f0;
    border-radius: 5px;
    padding: 4px 8px;
    font-size: 12px;
    line-height: 1.4;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        font-size: 11px;
    }
`;

export const VoteRow = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: auto;
`;

export const VoteAverage = styled.span`
    font-weight: 600;
    font-size: 16px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        font-size: 13px;
    }
`;

export const VoteInfo = styled.span`
    color: ${({ theme }) => theme.color.textSecondary};
    font-size: 16px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        font-size: 13px;
    }
`;
