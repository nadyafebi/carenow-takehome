import { extendTheme } from "@chakra-ui/react";
import "@fontsource/lato";

const theme = extendTheme({
  colors: {
    canvas: {
      400: "#f9f8f4",
    },
  },
  fonts: {
    heading: `'Lato', sans-serif`,
    body: `'Lato', sans-serif`,
  },
});

export default theme;
