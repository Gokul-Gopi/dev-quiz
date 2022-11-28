import { createBrowserRouter } from "react-router-dom";
import { Certificates } from "./pages/CertificatesPage/CertificatesPage";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { PrivateRoute } from "./pages/PrivateRoute";
import { QuestionPage } from "./pages/QuestionPage/QuestionPage";
import { QuizSelection } from "./pages/QuizSelection/QuizSelection";
import { ResultPage } from "./pages/ResultPage/ResultPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "quiz",
    element: (
      <PrivateRoute>
        <QuizSelection />
      </PrivateRoute>
    ),
  },
  {
    path: "quiz/:quizId",
    element: (
      <PrivateRoute>
        <QuestionPage />
      </PrivateRoute>
    ),
  },
  {
    path: "quiz/result",
    element: (
      <PrivateRoute>
        <ResultPage />
      </PrivateRoute>
    ),
  },
  {
    path: "certificates",
    element: (
      <PrivateRoute>
        <Certificates />
      </PrivateRoute>
    ),
  },
]);
