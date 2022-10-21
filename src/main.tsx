import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import { QuizSelection } from "./pages/QuizSelection/QuizSelection";
import { ModalProvider } from "./components/Context/ModalProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "quiz",
    element: <QuizSelection />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ModalProvider>
      <RouterProvider router={router} />
    </ModalProvider>
  </React.StrictMode>
);
