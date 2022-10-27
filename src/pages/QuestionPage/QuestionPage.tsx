import { ProgressBar } from "../../components/ProgressBar/ProgressBar";
import { Question } from "../../components/Question/Question";
import "./QuestionPage.css";

export const QuestionPage = () => {
  return (
    <div className="question-page">
      <ProgressBar />
      <Question />
    </div>
  );
};
