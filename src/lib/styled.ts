import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
      font-family: "TTFirsNeue";
      src: url(${process.env.NEXT_PUBLIC_FONTS + "/TTFirsNeue-Regular.woff2"}) format("woff2");
      font-weight: 400;
      font-style: normal;
    }

    @font-face {
      font-family: "TTFirsNeue";
      src: url(${process.env.NEXT_PUBLIC_FONTS + "/TTFirsNeue-Medium.woff2"}) format("woff2");
      font-weight: 500;
      font-style: normal;
    }

    @font-face {
      font-family: "TTFirsNeue";
      src: url(${process.env.NEXT_PUBLIC_FONTS} + "/TTFirsNeue-Bold.woff2") format("woff2");
      font-weight: 600;
      font-style: normal;
    }

    * {
      box-sizing: border-box;
    }

    img, button, a, input {
      user-select: none;
    }

    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    html {
      scroll-behavior: smooth;
      ::-webkit-scrollbar {
        display: none;
      }
    }
    
    body {
      margin: 0;
      padding: 0;
      color: ${({ theme }) => theme.colors.text};
      background-color: ${({ theme }) => theme.colors.bg};
      font-family: "TTFirsNeue", sans-serif;

      @media (prefers-color-scheme: dark) {
        color: ${({ theme }) => theme.colors.text} !important;
      }
    }

    button, a {
      -webkit-tap-highlight-color: transparent
    }

    img {
      pointer-events: none
    }

  `;

export const ErrorPage = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
`;

const lightTheme = {
  colors: {
    base: "#ffffff",
    text: "#000000",
    textLight: "#00000050",
    textLighter: "#00000010",
    grayDark: "#ffffff",
    primary: "#005BFF",
    primaryLight: "#005BFF50",
    primaryLighter: "#005BFF10",
    success: "#10C44C",
    successLight: "#10C44C50",
    successLighter: "#10C44C10",
    error: "#F91155",
    errorLight: "#F9115550",
    errorLighter: "#F9115510",
    icon: "#808080",
    bg: "#f8f9fa",
  },
  fonts: {
    main: "TTFirsNeue, sans-serif",
  },
};

// const darkTheme = {
//   colors: {
//     base: "#000000",
//     text: "#FFFFFF",
//     textLight: "#ffffff50",
//     textLighter: "#ffffff10",
//     grayDark: "#3E3E3E",
//     primary: "#4386FF",
//     primaryLight: "#4386FF50",
//     primaryLighter: "#4386FF10",
//     icon: "#808080",
//     bg: "#2D2D2D",
//   },
//   fonts: {
//     main: "TTFirsNeue, sans-serif",
//   },
// };

export { GlobalStyle, lightTheme };
