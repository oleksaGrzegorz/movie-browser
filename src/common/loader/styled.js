import styled, { keyframes } from "styled-components";

const spin = keyframes`to { transform: rotate(360deg); }`;
const slideIn = keyframes`
  0% { opacity: 0; transform: translateY(-12px); }
  100% { opacity: 1; transform: translateY(0); }
`;

export const GateWrap = styled.div`
    position: relative;
    min-height: 320px;
    background: ${({ theme }) => theme.color.lightGrey};
`;

export const GateInner = styled.div`
    position: relative;
    min-height: inherit;
    display: grid;
    place-items: start center;
    padding-top: 200px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        padding-top: 50px;
    }
`;

export const Spinner = styled.div`
    width: 48px;
    height: 48px;
    border: 4px solid ${({ theme }) => theme.color.darkerGrey};
    border-top-color: ${({ theme }) => theme.color.black};
    border-radius: 50%;
    animation: ${spin} 0.8s linear infinite;
`;

export const FadeSlideIn = styled.div`
    width: 100%;
    animation: ${slideIn} 300ms ease both;
`;
