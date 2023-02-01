import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { QueryClient, QueryClientProvider } from "react-query";
import { authRouterElement } from "./utils/router";
import ProfilePage from "./pages/ProfilePage";
import "./App.css";
import CalendarPage from "./pages/CalendarPage";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});
const App: React.FC = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route index element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={authRouterElement(<ProfilePage />)} />
        <Route path="/calendar" element={authRouterElement(<CalendarPage />)} />
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
