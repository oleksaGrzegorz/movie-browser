import styled from "styled-components";

export const PersonTile = styled.article`
    background: ${({ theme }) => theme.color.surface};
    border-radius: ${({ theme }) => theme.radii.sm};
    box-shadow: ${({ theme }) => theme.shadows.card};

    padding: 16px 16px 24px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    height: 100%;
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: ${({ theme }) => theme.shadows.soft};
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        padding: 8px 8px 16px;
    }
`;

export const PosterBox = styled.div`
    width: 100%;
    aspect-ratio: 176 / 231;
    border-radius: ${({ theme }) => theme.radii.sm};
    overflow: hidden;
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    margin-top: 4px;
`;

export const Name = styled.h3`
    margin: 0;
    color: ${({ theme }) => theme.color.textPrimary};
    font-weight: 600;
    font-size: 22px;
    line-height: 130%;
    text-align: center;
    word-break: break-word;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        font-size: 14px;
    }
`;

export const Subtitle = styled.div`
    color: ${({ theme }) => theme.color.textSecondary};
    font-size: 18px;
    line-height: 150%;
    text-align: center;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        font-size: 13px;
        line-height: 130%;
    }
`;
