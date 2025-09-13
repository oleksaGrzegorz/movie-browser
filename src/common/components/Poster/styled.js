import styled from "styled-components";

export const Poster = styled.div`
    position: relative;
    width: 100%;
    background: ${({ theme }) => theme.color.placeholder};
    overflow: hidden;
    aspect-ratio: ${({ $ratio = "2/3" }) => $ratio};
    border-radius: ${({ theme }) => theme.radii.sm};
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: ${({ $isFallback, $size }) =>
            $isFallback ? ($size === "large" ? "165px" : "72px") : "100%"};
        height: ${({ $isFallback, $size }) =>
            $isFallback ? ($size === "large" ? "165px" : "72px") : "100%"};
        object-fit: ${({ $isFallback }) => ($isFallback ? "contain" : "cover")};
        display: block;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        img {
            width: ${({ $isFallback, $size }) =>
                $isFallback ? ($size === "large" ? "64px" : "48px") : "100%"};
            height: ${({ $isFallback, $size }) =>
                $isFallback ? ($size === "large" ? "64px" : "48px") : "100%"};
        }
    }
`;
