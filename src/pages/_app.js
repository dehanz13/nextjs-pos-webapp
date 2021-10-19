import "../styles/globals.css";
import React from "react";
import { UserProvider } from "@auth0/nextjs-auth0";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <div className="p-5 w-screen h-screen">
        <h1>HELLO THERE!!</h1>
        <Component {...pageProps} />
      </div>
    </UserProvider>
  );
}

export default MyApp;
