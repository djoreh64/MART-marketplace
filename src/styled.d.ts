import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      base: string;
      text: string;
      textLight: string;
      textLighter: string;
      grayDark: string;
      primary: string;
      primaryLight: string;
      primaryLighter: string;
      icon: string;
      bg: string;
      success: string;
      successLight: string;
      successLighter: string;
      error: string;
      errorLight: string;
      errorLighter: string;
    };
    fonts: {
      main: string;
    };
  }
}
