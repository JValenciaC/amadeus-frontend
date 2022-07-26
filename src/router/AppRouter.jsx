import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login, Register, PageRoutes } from "../pages/";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Register />} />
        <Route path="/*" element={<PageRoutes />} />
      </Routes>
    </>
  );
};
