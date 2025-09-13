import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;
    min-height: 100%;
    scroll-behavior: smooth;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font-family: ${({ theme }) =>
        theme.typography?.fontFamily || "'Poppins', sans-serif"};
    background: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.textPrimary};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  img, svg, video, canvas {
    display: block;
    max-width: 100%;
    height: auto;
  }

  ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button, input, select, textarea {
    font: inherit;
    color: inherit;
    background: transparent;
    border: 0;
  }

  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.brand};
    outline-offset: 2px;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0 0 16px 0;
    font-family: ${({ theme }) =>
        theme.typography?.fontFamily || "'Poppins', sans-serif"};
    color: ${({ theme }) => theme.color.textPrimary};
  }

  h1 {
    font-size: ${({ theme }) => theme.typography?.h1.size || "36px"};
    font-weight: ${({ theme }) => theme.typography?.h1.weight || 600};
    line-height: ${({ theme }) => theme.typography?.h1.lineHeight || "120%"};
  }

  h2 {
    font-size: ${({ theme }) => theme.typography?.h2.size || "22px"};
    font-weight: ${({ theme }) => theme.typography?.h2.weight || 500};
    line-height: ${({ theme }) => theme.typography?.h2.lineHeight || "130%"};
  }

  p {
    margin: 0 0 12px 0;
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation: none !important;
      transition: none !important;
      scroll-behavior: auto !important;
    }
  }

  .loading-bounce {
  animation: bounce 0.6s infinite alternate;
}

@keyframes bounce {
  from { opacity: 0.7; transform: translateY(-2px); }
  to { opacity: 1; transform: translateY(2px); }
}
`;
