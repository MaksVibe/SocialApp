const palette = {
  white: "#FFFFFF",
  black: "#212121",
  black2: "rgba(33, 33, 33, 0.8)",
  black3: "rgba(0, 0, 0, 0.03)",
  white2: "rgba(255, 255, 255, 0.3)",
  grey: "#F6F6F6",
  grey2: "#E8E8E8",
  grey3: "#BDBDBD",
  blue: "#1B4371",
  orange: "#FF6C00",
};

export const theme = {
  colors: {
    primaryBg: palette.white,
    secondBg: palette.grey,
    thirdBg: palette.black3,
    accent: palette.orange,
    primaryText: palette.black,
    secondaryText: palette.grey3,
    linkText: palette.blue,
    thirdText: palette.black2,
    border: palette.grey2,
  },
  spacing: {
    main: 16,
  },
  textFonts: {
    title: "Saira-Medium",
    body: "Quicksand-Medium",
    button: "Quicksand-Bold",
  },
};

export const darkTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    background: palette.black,
    foreground: palette.white,
  },
};
