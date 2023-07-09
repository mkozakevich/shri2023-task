import React from "react";
import { createRoot } from "react-dom/client";
import Main from "./components/Main";
import Header from "./components/Header";

const root = createRoot(document.getElementById("app"));
root.render(
  <>
    <Header />
    <Main />
  </>,
);
