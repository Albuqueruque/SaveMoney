import React from "react";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

const PrivateRoutes = ({ component: Component, ...rest }) => {
  var session_token = localStorage.getItem("token");
  return  "Alo"
};

export const Routing  = () => {
  return (
    <>
      <BrowserRouter>
        {/* Utilizar as rotas privadas quando api de auth estiver pronta */}
        <Routes>
            
        </Routes>
      </BrowserRouter>
    </>
  );
};
