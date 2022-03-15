import { createGlobalStyle, ThemeProvider } from "styled-components";
import { SessionProvider } from "next-auth/react";


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

export default function App({ Component, pageProps:{ session, ...pageProps } }) {
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={theme}>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </ThemeProvider>
    </>
  );
}
