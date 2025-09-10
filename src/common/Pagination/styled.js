import styled from "styled-components";
import { ReactComponent as VectorRightIcon } from "./vectorRight.svg?react";
import { ReactComponent as VectorLeftIcon } from "./vectorLeft.svg?react";

export const PaginationWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 40px;
    font-size: 14px;
    padding-bottom: 103px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        padding-bottom: 31px;
    }
`;

export const ButtonParagraph = styled.p`
    color: ${({ theme }) => theme.color.textPrimary};
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        display: none;
    }
`;

export const PaginationButton = styled.button`
    background: ${({ theme }) => theme.color.brandMuted};
    border: none;
    border-radius: ${({ theme }) => theme.radii.sm};
    padding: 6px 12px;
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.shadows.soft};
    transition: background-color 0.3s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    min-width: 75px;
    height: 36px;
    color: ${({ theme }) => theme.color.brand};

    &:hover:not(:disabled) {
        background: ${({ theme }) => theme.color.grey};
    }

    &:disabled {
        opacity: 0.5;
        cursor: default;
        color: ${({ theme }) => theme.color.textSecondary};
        background: ${({ theme }) => theme.color.grey};
    }

    .mobile-only {
        display: none;
    }

    .double-arrow {
        display: inline-flex;
        align-items: center;
        gap: 0px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        min-width: 50px;
        padding: 4px 8px;
        gap: 4px;

        .mobile-only {
            display: inline;
        }
    }
`;

export const StyledVectorRight = styled(VectorRightIcon)`
    width: 16px;
    height: 16px;
    vertical-align: middle;

    & path {
        fill: ${({ disabled, theme }) =>
            disabled ? theme.color.textSecondary : theme.color.brand};
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        width: 10px;
        height: 10px;
    }
`;

export const StyledVectorLeft = styled(VectorLeftIcon)`
    width: 16px;
    height: 16px;
    vertical-align: middle;

    & path {
        fill: ${({ disabled, theme }) =>
            disabled ? theme.color.textSecondary : theme.color.brand};
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        width: 10px;
        height: 10px;
    }
`;

export const PageInfo = styled.span`
    color: ${({ theme }) => theme.color.textSecondary};
    font-size: 16px;
    padding: 0 15px;
`;

export const Page = styled.span`
    color: ${({ theme }) => theme.color.textPrimary};
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    padding: 0 5px;
`;
