import styled from "styled-components";

export const Tile = styled.article`
    background: ${({ theme }) => theme.color.white};
    border-radius: ${({ theme }) => theme.radii.sm};
    box-shadow: ${({ theme }) =>
        theme.shadows?.card ?? `0px 4px 12px 0px ${theme.color.shadow}`};
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: ${({ theme }) =>
            theme.shadows?.soft ?? "0 1px 2px rgba(0,0,0,0.08)"};
    }
`;
