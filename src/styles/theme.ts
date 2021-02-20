import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  font: {
    primary: `'HK Grotesk Normal'`,
    secondary: `'HK Grotesk Medium'`,
    light: `'HK Grotesk Light'`,
    normal: `'HK Grotesk Normal'`,
    medium: `'HK Grotesk Medium'`,
    semibold: `'HK Grotesk Semibold'`,
    bold: `'HK Grotesk Bold'`,
    extrabold: `'HK Grotesk Extra Bold'`,
  },
  font_size: {
    xxxsmall: "font-size: 12px;",
    xxsmall: "font-size: 14px;",
    xsmall: "font-size: 16px;",
    small: "font-size: 17px;",
    regular: "font-size: 22px; line-height: 30px;",
    large: "font-size: 28px; line-height: 30px;",
    larger: "font-size: 40px; line-height: 50px;",
    xlarge: "font-size: 48px; line-height: 48px;",
  },
  color: {
    primary: "#071435",
    secondary: "#098c8c",
    accent: "#cca86e",
    background: {
      white: "#ffffff",
      light: "#f8f8f8",
    },
    white: {
      regular: "#ffffff",
      lessdark: "#faf9f8",
      dark: "#f6f6f6",
      darker: "#eeeeee",
    },
    black: {
      lightest: "#ABA8AF",
      light: "#564F62",
      regular: "#071435",
    },
  },
  screen: {
    xs: "575px",
    sm: "767px",
    md: "991px",
    lg: "1199px",
  },
};

/* eslint-disable */
declare module "styled-components" {
  export interface DefaultTheme {
    font: {
      primary: string;
      secondary: string;
      light: string;
      normal: string;
      medium: string;
      semibold: string;
      bold: string;
      extrabold: string;
    };
    font_size: {
      xxxsmall: string;
      xxsmall: string;
      xsmall: string;
      small: string;
      regular: string;
      large: string;
      larger: string;
      xlarge: string;
    };
    color: {
      primary: string;
      secondary: string;
      accent: string;
      background: {
        white: string;
        light: string;
      };
      white: {
        regular: string;
        lessdark: string;
        dark: string;
        darker: string;
      };
      black: {
        lightest: string;
        light: string;
        regular: string;
      };
    };
    screen: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
    };
  }
}
/* eslint-enable */
