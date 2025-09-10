import styled, { keyframes } from "styled-components";

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const spinBounce = keyframes`
  0% { 
    transform: rotate(0deg) scale(1); 
  }
  25% { 
    transform: rotate(90deg) scale(1.1); 
  }
  50% { 
    transform: rotate(180deg) scale(1); 
  }
  75% { 
    transform: rotate(270deg) scale(1.1); 
  }
  100% { 
    transform: rotate(360deg) scale(1); 
  }
`;

const slideIn = keyframes`
  0% { 
    opacity: 0; 
    transform: translateY(-12px); 
  }
  100% { 
    opacity: 1; 
    transform: translateY(0); 
  }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
`;

export const GateWrap = styled.div`
    position: relative;
    min-height: 320px;
    background: ${({ theme }) => theme.color.background};
    transition: all 0.3s ease;
`;

export const GateInner = styled.div`
    position: relative;
    min-height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 100px;
    gap: 16px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        padding-top: 50px;
        min-height: 240px;
    }
`;

export const Spinner = styled.div`
    width: 48px;
    height: 48px;
    border: 4px solid ${({ theme }) => theme.color.grey};
    border-radius: 50%;
    position: relative;

    animation: ${({ $bounce }) => ($bounce ? spinBounce : spin)}
        ${({ $bounce }) => ($bounce ? "1.2s" : "0.8s")}
        ${({ $bounce }) =>
            $bounce ? "cubic-bezier(0.68, -0.55, 0.265, 1.55)" : "linear"}
        infinite;

    transition: all 0.3s ease;

    &::before {
        content: "";
        position: absolute;
        top: -4px;
        left: -4px;
        right: -4px;
        bottom: -4px;
        border-radius: 50%;
        border: 4px solid transparent;
        border-top-color: ${({ theme }) => theme.color.textPrimary};
        transition: border-top-color 0.3s ease;
    }
`;

export const TypingIndicator = styled.div`
    font-size: 14px;
    color: ${({ theme }) => theme.color.textSecondary};
    animation: ${pulse} 1.5s ease-in-out infinite;
    font-weight: 500;
    text-align: center;
`;

export const FadeSlideIn = styled.div`
    width: 100%;
    animation: ${slideIn} 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

    opacity: 0;
    animation-fill-mode: forwards;
`;
