import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import store from "./store/index.js";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
