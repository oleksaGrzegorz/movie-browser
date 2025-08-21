import styled from "styled-components";

export const Page = styled.div`
    max-width: 1368px;
    width: 100%;
    margin: 0 auto;
    padding: 0 16px ${() => 80}px;
    box-sizing: border-box;
`;

export const HeaderCard = styled.section`
    display: grid;
    grid-template-columns: 312px 1fr;
    gap: 32px;
    background: ${({ theme }) => theme.color.surface};
    border-radius: ${({ theme }) => theme.radii.md};
    box-shadow: ${({ theme }) => theme.shadows.card};
    padding: 24px;
    margin: 24px 0 32px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        grid-template-columns: 114px 1fr;
        gap: 16px;
        padding: 16px;
        margin: 16px 0 24px;
    }
`;

export const Avatar = styled.div`
    width: 100%;
    aspect-ratio: 2/3;
    border-radius: ${({ theme }) => theme.radii.md};
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
        border-radius: ${({ theme }) => theme.radii.md};
    }
`;

export const Info = styled.div``;

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
`;

export const MetaLabel = styled.span`
    color: ${({ theme }) => theme.color.textSecondary};
`;

export const MetaValue = styled.span`
    color: ${({ theme }) => theme.color.textPrimary};
`;

export const Bio = styled.p`
    margin: 12px 0 0 0;
    line-height: 150%;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        font-size: 14px;
    }
`;

export const SectionTitle = styled.h2`
    font-size: ${({ theme }) => theme.typography.h2.size};
    font-weight: ${({ theme }) => theme.typography.h2.weight};
    line-height: ${({ theme }) => theme.typography.h2.lineHeight};
    margin: 24px 0 16px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        font-size: 18px;
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

    @media (max-width: 1100px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        grid-template-columns: 1fr;
        gap: 16px;
    }
`;

export const MovieCard = styled.li`
    background: ${({ theme }) => theme.color.surface};
    border-radius: ${({ theme }) => theme.radii.md};
    box-shadow: ${({ theme }) => theme.shadows.card};
    overflow: hidden;
    color: inherit;
    padding: 16px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        display: grid;
        grid-template-columns: 114px 1fr;
        gap: 16px;
        padding: 16px;
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
        border-radius: ${({ theme }) => theme.radii.md};
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
        border-radius: ${({ theme }) => theme.radii.md};
    }
`;

export const CContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 12px 12px 16px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        padding: 0;
    }
`;

export const CTitle = styled.h3`
    font-size: 18px;
    line-height: 130%;
    font-weight: 500;
    margin: 0 0 4px;
`;

export const CMeta = styled.p`
    margin: 0 0 8px;
    color: ${({ theme }) => theme.color.textSecondary};
    font-size: 14px;
    line-height: 140%;
`;

export const VoteRow = styled.p`
    display: flex;
    align-items: center;
    gap: 8px;
    margin: auto 0 0;
`;

export const VoteAverage = styled.span`
    font-weight: 600;
`;

export const VoteInfo = styled.span`
    color: ${({ theme }) => theme.color.textSecondary};
`;
