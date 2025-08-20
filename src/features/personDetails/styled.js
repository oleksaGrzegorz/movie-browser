import styled from "styled-components";

export const Page = styled.div`
    max-width: 1368px;
    width: 100%;
    margin: 0 auto;
    padding: 0 16px 80px;
    box-sizing: border-box;
`;

export const HeaderCard = styled.section`
    display: grid;
    grid-template-columns: 312px 1fr;
    gap: 32px;
    background: ${({ theme }) => theme.color.surface};
    border-radius: ${({ theme }) => theme.radii?.sm || "5px"};
    box-shadow: ${({ theme }) =>
        theme.shadows?.card || "0px 4px 12px rgba(186,199,213,0.5)"};
    padding: 24px;
    margin: 24px 0 40px;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`;

export const Avatar = styled.div`
    width: 100%;
    aspect-ratio: 2/3;
    border-radius: ${({ theme }) => theme.radii?.sm || "5px"};
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
`;

export const Info = styled.div``;

export const Name = styled.h1`
    font-size: ${({ theme }) => theme.typography?.h1?.size || "36px"};
    font-weight: ${({ theme }) => theme.typography?.h1?.weight || 600};
    line-height: ${({ theme }) => theme.typography?.h1?.lineHeight || "120%"};
    margin: 0 0 12px;
`;

export const MetaRow = styled.p`
    margin: 0;
    display: flex;
    gap: 8px;
`;

export const MetaLabel = styled.span`
    color: ${({ theme }) => theme.color.textSecondary};
`;

export const MetaValue = styled.span`
    color: ${({ theme }) => theme.color.textPrimary};
`;

export const Bio = styled.p`
    margin: 16px 0 0 0;
    line-height: 150%;
`;

export const SectionTitle = styled.h2`
    font-size: ${({ theme }) => theme.typography?.h2?.size || "22px"};
    font-weight: ${({ theme }) => theme.typography?.h2?.weight || 500};
    line-height: ${({ theme }) => theme.typography?.h2?.lineHeight || "130%"};
    margin: 32px 0 16px;
`;

export const CreditsGrid = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    list-style: none;
    padding: 0;
    margin: 0 0 40px;

    @media (max-width: 1100px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`;

export const CreditCard = styled.li`
    background: ${({ theme }) => theme.color.surface};
    border-radius: ${({ theme }) => theme.radii?.sm || "5px"};
    box-shadow: ${({ theme }) =>
        theme.shadows?.card || "0px 4px 12px rgba(186,199,213,0.5)"};
    overflow: hidden;
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
`;

export const Poster = styled.img`
    width: 100%;
    aspect-ratio: 2/3;
    object-fit: cover;
    display: block;
`;

export const PosterPlaceholder = styled.div`
    width: 100%;
    aspect-ratio: 2/3;
    background: ${({ theme }) => theme.color.placeholder};
`;

export const CTitle = styled.h3`
    font-size: 18px;
    line-height: 130%;
    font-weight: 500;
    margin: 12px 12px 4px;
`;

export const CMeta = styled.p`
    margin: 0 12px 8px;
    color: ${({ theme }) => theme.color.textSecondary};
    font-size: 14px;
    line-height: 140%;
`;

export const VoteRow = styled.p`
    display: flex;
    align-items: center;
    gap: 8px;
    margin: auto 12px 12px;
`;

export const VoteAverage = styled.span`
    font-weight: 600;
`;

export const VoteInfo = styled.span`
    color: ${({ theme }) => theme.color.textSecondary};
`;
