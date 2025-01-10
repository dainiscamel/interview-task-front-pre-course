declare module "@emotion/react" {
  export interface Theme {
    colors: {
      WHITE: string;
      BG: string;
      BLACK: string;
      GREY_LIGHT: string;
      GREY_MEDIUM: string;
      GREY_HEAVY: string;
      BLUE_LIGHT: string;
      BLUE_HEAVY: string;
    };
  }
}

const baseTheme = {
  colors: {
    WHITE: "#ffffff",
    BG: "#f6f6f6",
    BLACK: "#000000",
    GREY_LIGHT: "#E5E5E5",
    GREY_MEDIUM: "#B9B9B9",
    GREY_HEAVY: "#454545",
    BLUE_LIGHT: "#EBF4FF",
    BLUE_HEAVY: "#2182F3",
  },
};

export default baseTheme;
