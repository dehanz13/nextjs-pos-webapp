import "../styles/globals.css";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
import React from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import { UserProvider } from "@auth0/nextjs-auth0";
import store from "../redux/store";
import { Provider } from "react-redux";

const MyApp = ({ Component, pageProps }) => {
  const Layout = Component.layout || (({ children }) => <>{children}</>);

  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-sclae=1, shrink-to-fit=no"
        />
        <title>Smart POS</title>
        <script src=""></script>
      </Head>
      <Provider store={store}>
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </Provider>
    </React.Fragment>
  );
};

export default MyApp;
