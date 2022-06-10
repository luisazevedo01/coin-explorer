import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import CoinDetails from "./pages/CoinDetails/CoinDetails";
import Home from "./pages/Home/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`/:coinID`} element={<CoinDetails />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
