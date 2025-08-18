import styled, { keyframes } from "styled-components";

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export const Container = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(24, 24, 27, 0.08);
    display: grid;
    place-items: center;
    z-index: 9999;
`;

export const Box = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 32px;
`;

export const Spinner = styled.img`
    width: 64px;
    height: 64px;
    animation: ${spin} 1s linear infinite;
`;

export const Text = styled.span`
    margin-top: 16px;
    font-size: 16px;
    line-height: 140%;
    color: ${({ theme }) => theme.color.textSecondary};
`;
