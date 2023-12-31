import React from "react";
import ReactDOM from "react-dom/client";
import store from "./store/store.ts";
import { Provider } from "react-redux";

import "./index.css";
import { AppRouter } from "./routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>
);
