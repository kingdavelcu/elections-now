import React from "react";
import ReactDOM from "react-dom/client";
import { getRouter } from "./router";

const router = getRouter();

const rootElement = document.getElementById("root");
if (!rootElement?.innerHTML) {
  const root = ReactDOM.createRoot(rootElement!);
  root.render(
    <React.StrictMode>
      <router.Provider>
        <router.RootRoute.Component />
      </router.Provider>
    </React.StrictMode>
  );
}
