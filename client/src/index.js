import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { CookiesProvider } from 'react-cookie';
import StoreProvider from "./store";

ReactDOM.render(
  <CookiesProvider>
    <StoreProvider>
      <App />
    </StoreProvider>
  </CookiesProvider>
  ,
  document.getElementById("root")
);
