import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "./context/AuthContext";
import { TweetProvider } from "./context/TweetContext";

Modal.setAppElement("#root");

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <TweetProvider>
        <App />
      </TweetProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
