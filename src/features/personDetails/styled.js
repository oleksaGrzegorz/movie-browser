import styled from "styled-components";

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
    grid-template-rows: auto 1fr;
    grid-template-areas:
        "avatar info"
        "avatar bio";
    gap: 40px;
    margin: 80px 0 56px 0;
    background: ${({ theme }) => theme.color.white};
    padding: 40px;
    border-radius: ${({ theme }) => theme.radii.sm};
    align-items: start;
    justify-items: start;
    align-content: start;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        grid-template-columns: 320px 1fr;
        gap: 24px;
        margin: 64px 0 40px 0;
        padding: 32px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        grid-template-columns: 114px 1fr;
        grid-template-rows: auto auto;
        grid-template-areas:
            "avatar info"
            "bio bio";
        gap: 16px;
        margin: 24px 0;
        padding: 16px;
    }
`;

export const Avatar = styled.div`
    grid-area: avatar;
    width: 100%;
    max-width: 400px;
    align-self: start;
    justify-self: start;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        max-width: 320px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        max-width: 114px;
    }
`;

export const Info = styled.div`
    grid-area: info;
    display: grid;
    gap: 8px;
    align-content: start;
    align-items: start;
    justify-items: start;
    min-height: 0;
`;

export const Name = styled.h1`
    margin: 0 0 8px 0;
    font-size: ${({ theme }) => theme.typography.h1.size};
    font-weight: ${({ theme }) => theme.typography.h1.weight};
    line-height: ${({ theme }) => theme.typography.h1.lineHeight};
    color: ${({ theme }) => theme.color.textPrimary};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        font-size: 14px;
        line-height: 120%;
    }
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: 160px 1fr;
    align-items: start;
    gap: 8px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        grid-template-columns: 1fr;

        &.inline {
            grid-template-columns: auto 1fr;
            align-items: baseline;
            column-gap: 8px;
        }
    }

    .mobile-only {
        display: none;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        .desktop-only {
            display: none;
        }
        .mobile-only {
            display: inline;
        }
    }
`;

export const Label = styled.span`
    color: ${({ theme }) => theme.color.darkerGrey};
    font-size: ${({ theme }) => theme.typography.label.size};
    line-height: ${({ theme }) => theme.typography.label.lineHeight};
    font-weight: ${({ theme }) => theme.typography.label.weight};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        font-size: ${({ theme }) => theme.typography.label.mobileSize};
        line-height: ${({ theme }) => theme.typography.label.mobileLineHeight};
    }
`;

export const Value = styled.span`
    color: ${({ theme }) => theme.color.textPrimary};
    font-size: ${({ theme }) => theme.typography.value.size};
    line-height: ${({ theme }) => theme.typography.value.lineHeight};
    font-weight: ${({ theme }) => theme.typography.value.weight};

    &.stack-on-mobile {
        display: inline;
    }
    &.nowrap {
        white-space: nowrap;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        font-size: ${({ theme }) => theme.typography.value.mobileSize};
        line-height: ${({ theme }) => theme.typography.value.mobileLineHeight};

        &.stack-on-mobile {
            display: block;
            margin-top: -2px;
        }
    }
`;

export const Bio = styled.p`
    grid-area: bio;
    margin: 0;
    font-size: ${({ theme }) => theme.typography.leadParagraph.size};
    line-height: ${({ theme }) => theme.typography.leadParagraph.lineHeight};
    color: ${({ theme }) => theme.color.black};
    place-self: start stretch;
    min-height: 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.laptop}px) {
        font-size: 18px;
        line-height: 160%;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        font-size: 14px;
        line-height: 160%;
    }
`;
