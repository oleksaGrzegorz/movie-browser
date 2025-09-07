import styled from "styled-components";

export const Container = styled.div`
    max-width: 1368px;
    width: 100%;
    margin: 0 auto;
    padding: 0 16px 80px;
    box-sizing: border-box;
`;

export const MainHeader = styled.h1`
    margin: 56px 0 24px;
    color: ${({ theme }) => theme.color.textPrimary};
    font-size: ${({ theme }) => theme.typography.h1.size};
    font-weight: ${({ theme }) => theme.typography.h1.weight};
    line-height: ${({ theme }) => theme.typography.h1.lineHeight};

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        margin: 64px 0 16px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        margin: 48px 0 12px;
        font-size: 24px;
        line-height: 120%;
    }
`;
