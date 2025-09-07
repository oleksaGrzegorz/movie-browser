import styled from "styled-components";

export const Badges = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: flex-start;
`;

export const Badge = styled.span`
    display: inline-block;
    background: #e4e6f0;
    color: ${({ theme }) => theme.color.black};
    border-radius: ${({ theme }) => theme.radii.sm};
    font-size: ${({ theme }) => theme.typography.badge.size};
    line-height: ${({ theme }) => theme.typography.badge.lineHeight};
    padding: 8px 16px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        font-size: ${({ theme }) => theme.typography.badge.mobileSize};
        line-height: ${({ theme }) => theme.typography.badge.mobileLineHeight};
        padding: 4px 8px;
    }
`;
