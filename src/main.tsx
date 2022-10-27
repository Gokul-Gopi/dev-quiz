import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import { QuizSelection } from "./pages/QuizSelection/QuizSelection";
import { ModalProvider } from "./context/ModalProvider";
import { QuestionPage } from "./pages/QuestionPage/QuestionPage";

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
  {
    path: "quiz/:quizId",
    element: <QuestionPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ModalProvider>
      <RouterProvider router={router} />
    </ModalProvider>
  </React.StrictMode>
);
