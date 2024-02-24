import { extendTheme, ComponentStyleConfig } from "@chakra-ui/react";
import "@fontsource/lato";

const buttonStyle: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: "full",
    boxShadow: "base",
  },
  variants: {
    solid: {
      background: "primary.200",
      color: "secondary.400",
    },
  },
};

const theme = extendTheme({
  colors: {
    canvas: {
      400: "#f9f8f4",
    },
    primary: {
      200: "#a6d9ff",
    },
    secondary: {
      400: "#2356b2",
    },
  },
  components: {
    Button: buttonStyle,
  },
  fonts: {
    heading: `'Lato', sans-serif`,
    body: `'Lato', sans-serif`,
  },
});

export default theme;
