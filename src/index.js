import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App/App";
import "./index.css";
import { darkStore } from "./models";
import styles from "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Provider store={darkStore}>
      <App />
    </Provider>
  </BrowserRouter>
);
