import styled from "styled-components";

const SectionTitle = styled.h2`
    margin: 80px 0 24px;
    color: ${({ theme }) => theme.color.textPrimary};
    font-size: ${({ theme }) => theme.typography.h1.size};
    font-weight: ${({ theme }) => theme.typography.h1.weight};
    line-height: ${({ theme }) => theme.typography.h1.lineHeight};

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        margin: 64px 0 16px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        margin: 48px 0 12px;
        font-size: 20px;
        font-weight: 600;
        line-height: 120%;
    }
`;

export default SectionTitle;
