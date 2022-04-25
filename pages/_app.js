import { createGlobalStyle, ThemeProvider } from "styled-components";
import { SessionProvider } from "next-auth/react";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import "../styles/nprogress.css";
import nProgress from "nprogress";
import Router from "next/router";
import "../styles/globals.css";
import UserContextProvider from "../Contexts/UserContext";
import CourseContextProvider from "../Contexts/CourseDetailContext";
import PathContextProvider from "../Contexts/PathDetailContext";
import { ToastContainer } from "react-toastify";
import ProjectDetailContextProvider from "../Contexts/ProjectDetailContext";
import QuestionDetailContextProvider from "../Contexts/QuestionDetailContext";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x:hidden;
  }
  * {
    margin:0;
    padding:0;
    font-family: 'Inter', sans-serif;
  }
`;

const theme = {
  colors: {
    black: "#000",
    white: "#fff",
  },
};

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

const queryClient = new QueryClient();

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />

        <ThemeProvider theme={theme}>
          <SessionProvider session={session}>
            <UserContextProvider>
              <PathContextProvider>
                <ProjectDetailContextProvider>
                  <CourseContextProvider>
                    <QuestionDetailContextProvider>
                      <Component {...pageProps} />
                      <ReactQueryDevtools
                        initialIsOpen={false}
                      ></ReactQueryDevtools>
                    </QuestionDetailContextProvider>
                  </CourseContextProvider>
                </ProjectDetailContextProvider>
              </PathContextProvider>
            </UserContextProvider>
          </SessionProvider>
        </ThemeProvider>
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </QueryClientProvider>
    </>
  );
}
