import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducer, initialState } from "./reducers";
import App from "./App";

import "bulma/css/bulma.css";
import "./styles.scss";

const store = createStore(reducer, initialState);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);