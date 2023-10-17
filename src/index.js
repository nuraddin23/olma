import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";

import store from "./ReduxToolkit/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Auth0Provider
        domain="dev-w322sfpwn7vbgryh.us.auth0.com"
        clientId="2E4fSOTCiT5Ywh3Jd1IjO8RfFR4ShFUZ"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <App />
      </Auth0Provider>
      ,
    </Provider>
  </React.StrictMode>
);
