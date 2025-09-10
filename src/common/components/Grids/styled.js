import styled from "styled-components";

export const MoviesGrid = styled.div`
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(4, 1fr);

    @media (max-width: ${({ theme }) => theme.breakpoint.laptop - 1}px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        grid-template-columns: 1fr;
        gap: 16px;
    }
`;

export const PeopleGrid = styled.div`
    --cols: 6;
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(var(--cols), 1fr);
    align-items: stretch;

    @media (max-width: ${({ theme }) => theme.breakpoint.desktop}px) {
        --cols: 5;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.laptop}px) {
        --cols: 4;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        --cols: 3;
        gap: 16px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        --cols: 2;
        gap: 12px;
    }
`;
