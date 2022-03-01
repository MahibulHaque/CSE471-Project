import Head from "next/head";
import { createGlobalStyle, ThemeProvider } from "styled-components";


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  * {
    font-family: 'Inter', sans-serif;
  }
`;

const theme = {
  colors: {
    black: "#000",
    white: "#fff",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
