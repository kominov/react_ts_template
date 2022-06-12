import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./layouts/Layout";
import { publicRoutes } from "../src/routers/routes";

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {publicRoutes.map((pblRout, idx) => (
            <Route key={idx} {...pblRout} />
          ))}
        </Route>
      </Routes>
    </>
  );
}
