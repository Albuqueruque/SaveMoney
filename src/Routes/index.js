import React from "react";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Header } from "../Components/Header";
import {Home} from "../Pages/Home/index"

const PrivateRoutes = ({ component: Component, ...rest }) => {
  var session_token = localStorage.getItem("token");
};

export const Routing  = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
