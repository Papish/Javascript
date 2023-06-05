import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";

const App = () => {
  return <div>Apps</div>;
};

const rootElement = document.getElementById("root");

if (!rootElement) throw new Error("Failed to find root element");

const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<App />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
