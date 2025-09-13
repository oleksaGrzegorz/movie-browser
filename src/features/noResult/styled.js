import styled from "styled-components";

export const NoResultContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 40px 0;
    min-height: 400px;
`;

export const NoResultIMG = styled.img`
    width: 100%;
    max-width: 400px;
    height: auto;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        max-width: 300px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        max-width: 250px;
    }
`;
