import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import "./index.css";
import { store } from "./state/store";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistStore(store)}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
    ,
  </React.StrictMode>
);
