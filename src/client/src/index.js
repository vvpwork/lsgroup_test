import React from "react";
import { hydrate } from "react-dom";
import { render } from "react-snapshot";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./redux/store";
import "./styles/index.scss";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

hydrate(
  <Provider store={store({})}>
    <BrowserRouter>
      <Route component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
