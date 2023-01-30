import React, { ReactElement } from "react";
import { Navigate } from "react-router-dom";

export const authRouterElement = (element: ReactElement) => {
  return !!localStorage.getItem("token") ? element : <Navigate to={"/login"} />;
};
