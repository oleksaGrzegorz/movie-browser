import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1368px;
    margin: 0 auto;
    padding: 0 16px 80px;
    box-sizing: border-box;
`;

export const HeroShell = styled.div`
    width: 100%;
    background: ${({ theme }) => theme.color.black};
    padding: 0;
`;

export const Hero = styled.header`
    position: relative;
    width: 100%;
    max-width: 1368px;
    height: 770px;
    margin: 0 auto;
    display: flex;
    align-items: flex-end;
    border-radius: ${({ theme }) => theme.radii.lg};
    overflow: hidden;
    background: ${({ theme }) => theme.color.black};

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        height: 520px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        height: 360px;
        border-radius: ${({ theme }) => theme.radii.md};
    }
`;

export const HeroBg = styled.div`
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: center;
    filter: brightness(0.55);

    &:after {
        content: "";
        position: absolute;
        inset: 0;
        -webkit-box-shadow: inset 0 0 50px 50px
            ${({ theme }) => theme.color.black};
        box-shadow: inset 0 0 50px 50px ${({ theme }) => theme.color.black};
    }
`;

export const HeroContent = styled.div`
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 920px;
    padding: 60px 16px;
    color: ${({ theme }) => theme.color.white};

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        padding: 32px;
        max-width: 760px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        padding: 20px;
        max-width: 100%;
    }

    .hero-rating-container {
        @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
            display: flex;
            align-items: center;
            gap: 8px;
        }
    }
`;

export const HeroTitle = styled.h1`
    margin: 0 0 12px 0;
    color: ${({ theme }) => theme.color.white};
    font-size: 64px;
    line-height: 120%;
    font-weight: 600;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        font-size: 40px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        font-size: 24px;
    }
`;

export const HeroRating = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        margin-bottom: 0;
    }
`;

export const HeroStar = styled.img`
    width: 40px;
    height: 40px;
    margin-top: -10px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        width: 16px;
        height: 16px;
        margin-top: 0;
    }
`;

export const HeroValue = styled.span`
    color: ${({ theme }) => theme.color.white};
    font-size: 30px;
    line-height: 130%;
    font-weight: 500;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        font-size: 16px;
    }
`;

export const HeroSlashTen = styled.span`
    color: ${({ theme }) => theme.color.white};
    font-size: 16px;
    line-height: 150%;
    margin-top: 6px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        font-size: 13px;
        line-height: 130%;
        margin-top: 0;
    }
`;

export const HeroVotes = styled.div`
    color: ${({ theme }) => theme.color.white};
    font-size: ${({ theme }) => theme.typography.caption.size};
    line-height: ${({ theme }) => theme.typography.caption.lineHeight};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        font-size: 12px;
        line-height: 120%;
    }
`;

export const DetailsCard = styled.section`
    background: ${({ theme }) => theme.color.white};
    border-radius: ${({ theme }) => theme.radii.sm};
    box-shadow: ${({ theme }) =>
        theme.shadows?.card ?? `0px 4px 12px 0px ${theme.color.shadow}`};
    display: grid;
    grid-template-columns: 312px 1fr;
    gap: 24px;
    padding: 40px;
    margin: 64px 0 0 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        grid-template-columns: 264px 1fr;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        grid-template-columns: 114px 1fr;
        grid-template-rows: auto auto;
        grid-template-areas:
            "poster info"
            "overview overview";
        gap: 16px;
        padding: 16px;
        margin: 12px 0 0 0;
    }
`;

export const PosterCol = styled.div`
    width: 100%;
    aspect-ratio: 2 / 3;
    overflow: hidden;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        grid-area: poster;
        width: 114px;
        height: 169px;
        aspect-ratio: auto;
        border-radius: ${({ theme }) => theme.radii.xs};
    }
`;

export const InfoCol = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        grid-area: info;
    }
`;

export const Title = styled.h2`
    font-weight: 600;
    color: ${({ theme }) => theme.color.black};
    font-size: 36px;
    line-height: 120%;
    margin-bottom: 8px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        font-size: 20px;
        margin-bottom: 0;
    }
`;

export const Year = styled.div`
    color: ${({ theme }) => theme.color.black};
    font-size: 22px;
    line-height: 150%;
    margin-bottom: 8px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        font-size: 12px;
        line-height: 120%;
        margin-bottom: 0;
    }
`;

export const Meta = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 18px;
    line-height: 150%;
    color: ${({ theme }) => theme.color.darkerGrey};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        font-size: 12px;
        line-height: 120%;
        gap: 6px;
    }
`;

export const MetaRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`;

export const MetaLabel = styled.span`
    color: ${({ theme }) => theme.color.darkerGrey};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        display: none;
    }
`;

export const MetaValue = styled.span`
    color: ${({ theme }) => theme.color.black};
`;

export const Badges = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 12px 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        margin: 0;
    }
`;

export const RatingRow = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 10px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        flex-wrap: nowrap;
        gap: 4px;
        margin-bottom: 0;
    }
`;

export const Star = styled.img`
    width: 24px;
    height: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        width: 16px;
        height: 16px;
    }
`;

export const RatingValue = styled.span`
    color: ${({ theme }) => theme.color.black};
    font-size: 22px;
    font-weight: 600;
    line-height: 160%;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        font-size: 13px;
    }
`;

export const SlashTen = styled.span`
    color: ${({ theme }) => theme.color.black};
    font-size: 16px;
    line-height: 150%;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        font-size: 13px;
        line-height: 130%;
    }
`;

export const Votes = styled.span`
    color: ${({ theme }) => theme.color.black};
    font-size: 14px;
    line-height: 150%;
    margin-left: 2px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        font-size: 13px;
        line-height: 130%;
        margin-left: 0;
    }
`;

export const Overview = styled.p`
    margin: 0;
    color: ${({ theme }) => theme.color.black};
    font-size: 20px;
    line-height: 160%;

    @media (min-width: ${({ theme }) => theme.breakpoint.mobileL + 1}px) {
        margin-top: 12px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        grid-area: overview;
        font-size: 14px;
        line-height: 160%;
        margin-top: 8px;
    }
`;
