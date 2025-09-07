import styled from "styled-components";
import { Link } from "react-router-dom";
import { Tile } from "../Tile";
import StarIcon from "../../../images/star.svg";

export const LinkBlock = styled(Link)`
    display: block;
    height: 100%;
`;

export const MovieTile = styled(Tile)`
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
    padding: 16px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        display: grid;
        grid-template-columns: 114px 1fr;
        gap: 16px;
        align-items: start;
    }
`;

export const PosterBox = styled.div`
    width: 100%;
    aspect-ratio: 2 / 3;
    overflow: hidden;
    border-radius: ${({ theme }) => theme.radii.xs};
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex: 1 1 auto;
    min-height: 0;
    margin-top: 16px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        gap: 8px;
        align-self: stretch;
        margin-top: 0;
    }
`;

export const Title = styled.h3`
    margin: 0;
    color: ${({ theme }) => theme.color.black};
    font-weight: 600;
    font-size: 22px;
    line-height: 130%;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        font-size: 16px;
        line-height: 130%;
    }
`;

export const SubDesktop = styled.div`
    color: ${({ theme }) => theme.color.darkerGrey};
    font-size: 16px;
    line-height: 150%;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        display: none;
    }
`;

export const SubMobile = styled.div`
    display: none;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        display: block;
        color: ${({ theme }) => theme.color.darkerGrey};
        font-size: 13px;
        line-height: 130%;
    }
`;

export const Badges = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`;

export const Badge = styled.span`
    background: #e4e6f0;
    color: ${({ theme }) => theme.color.black};
    font-size: 14px;
    line-height: 140%;
    padding: 8px 16px;
    border-radius: ${({ theme }) => theme.radii.sm};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        font-size: 10px;
        line-height: 110%;
        padding: 4px 8px;
    }
`;

export const MetaBlock = styled.div`
    margin-top: auto;
`;

export const RatingRow = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const StarIconImg = styled.img.attrs({ src: StarIcon, alt: "" })`
    width: 24px;
    height: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        width: 16px;
        height: 16px;
    }
`;

export const Value = styled.span`
    color: ${({ theme }) => theme.color.black};
    font-size: 16px;
    line-height: 160%;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        font-size: 13px;
    }
`;

export const Votes = styled.span`
    color: ${({ theme }) => theme.color.darkerGrey};
    font-size: 16px;
    line-height: 150%;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        font-size: 13px;
        line-height: 130%;
    }
`;
