import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    max-width: 1368px;
    width: 100%;
    margin: 0 auto;
    padding: 0 16px 80px;
    box-sizing: border-box;
`;

export const HeaderCard = styled.section`
    display: grid;
    grid-template-columns: 400px 1fr;
    grid-template-areas:
        "avatar info"
        "avatar bio";
    gap: 32px;
    background: ${({ theme }) => theme.color.surface};
    border-radius: ${({ theme }) => theme.radii.sm};
    box-shadow: ${({ theme }) => theme.shadows.card};
    padding: 36px;
    margin: 48px 0 32px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        grid-template-columns: 114px 1fr;
        grid-template-areas:
            "avatar info"
            "bio bio";
        gap: 16px;
        padding: 16px;
        margin: 16px 0 24px;
    }
`;

export const Avatar = styled.div`
    grid-area: avatar;
    width: 100%;
    aspect-ratio: 2/3;
    border-radius: ${({ theme }) => theme.radii.sm};
    overflow: hidden;
    background: ${({ theme }) => theme.color.placeholder};
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        width: 114px;
        height: 169px;
        aspect-ratio: auto;
    }
`;

export const Info = styled.div`
    grid-area: info;
`;

export const Name = styled.h1`
    font-size: ${({ theme }) => theme.typography.h1.size};
    font-weight: ${({ theme }) => theme.typography.h1.weight};
    line-height: ${({ theme }) => theme.typography.h1.lineHeight};
    margin: 0 0 12px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        font-size: 24px;
    }
`;

export const MetaRow = styled.p`
    margin: 0 0 4px 0;
    display: flex;
    gap: 6px;
    font-size: 18px;
`;

export const MetaRowStackOnMobile = styled(MetaRow)`
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        flex-direction: column;
        gap: 2px;
    }
`;

export const LabelDesktop = styled.span`
    color: ${({ theme }) => theme.color.textSecondary};
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        display: none;
    }
`;

export const LabelMobile = styled.span`
    color: ${({ theme }) => theme.color.textSecondary};
    display: none;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        display: inline;
        font-size: 12px;
    }
`;

export const MetaValue = styled.span`
    color: ${({ theme }) => theme.color.textPrimary};
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        font-size: 12px;
    }
`;

export const Bio = styled.p`
    grid-area: bio;
    margin: 0;
    line-height: 150%;
    font-size: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        font-size: 14px;
    }
`;

export const SectionTitle = styled.h2`
    margin: 56px 0 16px;
    font-weight: 600;

    @media (min-width: 992px) {
        font-size: 36px;
        line-height: 120%;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        font-size: 20px;
        margin: 16px 0 12px;
    }
`;

export const MoviesGrid = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    list-style: none;
    padding: 0;
    margin: 0 0 32px;

    @media (max-width: ${({ theme }) => theme.breakpoint.laptop - 1}px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        grid-template-columns: 1fr;
        gap: 16px;
    }
`;

export const MovieCard = styled.li`
    background: ${({ theme }) => theme.color.surface};
    border-radius: ${({ theme }) => theme.radii.sm};
    box-shadow: ${({ theme }) => theme.shadows.card};
    overflow: hidden;
    color: inherit;
    padding: 16px;
`;

export const CardLink = styled(Link)`
    display: block;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        display: grid;
        grid-template-columns: 114px 1fr;
        gap: 16px;
        align-items: start;
    }
`;

export const Poster = styled.img`
    width: 100%;
    aspect-ratio: 2/3;
    display: block;
    object-fit: cover;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        width: 114px;
        height: 169px;
        aspect-ratio: auto;
        border-radius: ${({ theme }) => theme.radii.sm};
    }
`;

export const PosterPlaceholder = styled.div`
    width: 100%;
    aspect-ratio: 2/3;
    background: ${({ theme }) => theme.color.placeholder};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        width: 114px;
        height: 169px;
        aspect-ratio: auto;
        border-radius: ${({ theme }) => theme.radii.sm};
    }
`;

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 12px 12px 16px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        padding: 0;
    }
`;

export const CardTitle = styled.h3`
    font-size: 22px;
    line-height: 130%;
    font-weight: 500;
    margin: 0 0 4px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        font-size: 16px;
    }
`;

export const CardMeta = styled.p`
    margin: 0 0 8px;
    color: ${({ theme }) => theme.color.textSecondary};
    font-size: 16px;
    line-height: 140%;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        font-size: 13px;
    }
`;

export const Genre = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 8px 0 16px;
`;

export const GenreButton = styled.span`
    background-color: #e4e6f0;
    border-radius: 5px;
    padding: 6px 10px;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.4;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        font-size: 10px;
        padding: 5px 7px;
    }
`;

export const VoteRow = styled.p`
    display: flex;
    align-items: center;
    gap: 8px;
    margin: auto 0 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        font-size: 13px;
    }
`;

export const VoteAverage = styled.span`
    font-weight: 600;
`;

export const VoteInfo = styled.span`
    color: ${({ theme }) => theme.color.textSecondary};
`;
