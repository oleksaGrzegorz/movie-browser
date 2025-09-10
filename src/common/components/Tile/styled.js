import styled from "styled-components";

export const Tile = styled.article`
    background: ${({ theme }) => theme.color.surface};
    border-radius: ${({ theme }) => theme.radii.sm};
    box-shadow: ${({ theme }) => theme.shadows.card};
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: ${({ theme }) => theme.shadows.soft};
    }
`;
