import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import Notification from "react-notifications-component";
import GlobalStyle from "./GlobalStyle";

ReactDOM.render(
  <React.StrictMode>
    <Notification />
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
