import styled from "styled-components";
import { Link } from "react-router-dom";

export const ErrorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    min-height: 60vh;
    padding: 80px 16px;
    justify-content: center;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        padding: 40px 16px;
    }
`;

export const ImageWrapper = styled.div`
    margin-bottom: 40px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        margin-bottom: 32px;
    }
`;

export const ErrorImage = styled.img`
    width: 120px;
    height: 120px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        width: 96px;
        height: 96px;
    }
`;

export const ErrorTitle = styled.h1`
    color: ${({ theme }) => theme.color.textPrimary};
    font-size: 32px;
    font-weight: 600;
    line-height: 120%;
    margin: 0 0 24px 0;
    max-width: 600px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        font-size: 24px;
        margin-bottom: 16px;
    }
`;

export const ErrorText = styled.p`
    color: ${({ theme }) => theme.color.textSecondary};
    font-size: 18px;
    line-height: 150%;
    margin: 0 0 40px 0;
    max-width: 400px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        font-size: 16px;
        margin-bottom: 32px;
    }
`;

export const TextBreaker = styled.span`
    display: block;
`;

export const HomeLink = styled(Link)`
    background: ${({ theme }) => theme.color.brand};
    color: ${({ theme }) => theme.color.surface};
    padding: 14px 24px;
    font-weight: 500;
    font-size: 14px;
    border-radius: ${({ theme }) => theme.radii.sm};
    text-decoration: none;
    transition: background-color 0.2s ease;
    display: inline-block;

    &:hover {
        background: ${({ theme }) => theme.color.brand};
        opacity: 0.9;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        padding: 12px 20px;
        font-size: 13px;
    }
`;
