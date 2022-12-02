import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";
import { ProgressBar } from "../../components/ProgressBar/ProgressBar";
import { Question } from "../../components/Question/Question";
import { getQuiz } from "../../services/quiz";
import { IQuestionDetails } from "../../utils/types";
import "./QuestionPage.css";

export const QuestionPage = () => {
  const params = useParams();
  const [questions, setQuestions] = useState<IQuestionDetails[] | []>([]);
  const [currentQueIdx, setCurrentQuesIdx] = useState(0);
  const quizProgress = Math.floor((currentQueIdx / questions.length) * 100);

  const getQuizQuestion = async () => {
    const response: any = await getQuiz(params?.quizId as string);
    if (response?.status == 200) {
      setQuestions(response?.data?.data?.questions);
    }
  };

  useEffect(() => {
    getQuizQuestion();
  }, []);

  if (questions.length < 1) {
    return (
      <div className="loader-container">
        <Loader />
      </div>
    );
  }

  return (
    <div className="question-page">
      <ProgressBar progress={quizProgress} />

      {quizProgress === 100 ? (
        <div className="quiz-completed">
          <p className="animate-charcter">COMPLETED!</p>
          <Link to="/quiz/result">
            <button>Check your score</button>
          </Link>
        </div>
      ) : (
        <Question
          question={questions[currentQueIdx]?.question}
          options={questions[currentQueIdx]?.options}
          setNextQuestion={setCurrentQuesIdx}
        />
      )}
    </div>
  );
};
