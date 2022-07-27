import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import AmadeusApp from "./AmadeusApp";
import "./styles.css";

import { store } from "./redux/store";
import { Provider } from "react-redux"; 


ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>  

    <BrowserRouter>
      <AmadeusApp />
    </BrowserRouter>
  </Provider>
);
