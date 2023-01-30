import React from "react";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { QueryClient, QueryClientProvider } from "react-query";
import { authRouterElement } from "./utils/router";

const App: React.FC = () => {
  const queryClient = new QueryClient();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route index element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/test" element={authRouterElement(<LoginPage />)} />
        <Route path="*" element={<div>oops not found page</div>} />
      </>
    )
  );

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  );
};

export default App;
