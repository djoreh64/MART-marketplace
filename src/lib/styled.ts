import { createGlobalStyle } from "styled-components";

const fontFaces = [
  { fileName: "TTFirsNeue-Regular", fontWeight: 400 },
  { fileName: "TTFirsNeue-Medium", fontWeight: 500 },
  { fileName: "TTFirsNeue-Bold", fontWeight: 600 },
  { fileName: "TTFirsNeue-ExtraBold", fontWeight: 700 },
  { fileName: "TTFirsNeue-Black", fontWeight: 800 },
];

const GlobalStyle = createGlobalStyle`
    ${fontFaces
      .map(
        (font) => `
        @font-face {
          font-family: "TTFirsNeue";
          src: url("https://cdn.djoreh64.ru/fonts/${font.fileName}.woff2") format("woff2");
          font-weight: ${font.fontWeight};
          font-style: normal;
        }
      `
      )
      .join("")}
    
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
      background-color: ${({ theme }) => theme.colors.bg};
      font-family: "TT Firs Neue", sans-serif;
    }

    button, a {
      -webkit-tap-highlight-color: transparent
    }

    img {
      pointer-events: none
    }

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
    main: "TT Firs Neue, sans-serif",
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
//     main: "TT Firs Neue, sans-serif",
//   },
// };

export { GlobalStyle, lightTheme };
