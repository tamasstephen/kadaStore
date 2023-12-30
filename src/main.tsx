import React from "react";
import ReactDOM from "react-dom/client";
import store from "./store/store.ts";
import { Provider } from "react-redux";

import "./index.css";
import { Products } from "./pages/Products.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Products />
    </Provider>
  </React.StrictMode>
);
