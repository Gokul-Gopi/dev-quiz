import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import { QuizSelection } from "./pages/QuizSelection/QuizSelection";
import { ModalProvider } from "./context/ModalProvider";
import { QuestionPage } from "./pages/QuestionPage/QuestionPage";
import { ResultPage } from "./pages/ResultPage/ResultPage";
import { Certificates } from "./pages/CertificatesPage/CertificatesPage";
import { AuthProvider } from "./context/AuthProvider";

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
  {
    path: "quiz/result",
    element: <ResultPage />,
  },
  {
    path: "certificates",
    element: <Certificates />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ToastContainer />
    <AuthProvider>
      <ModalProvider>
        <RouterProvider router={router} />
      </ModalProvider>
    </AuthProvider>
  </React.StrictMode>
);
