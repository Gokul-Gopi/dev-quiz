import { IQuizTopic } from "../../utils/types";
import "./QuizTopic.css";

export const QuizTopic = ({ name, image }: IQuizTopic) => {
  return (
    <div className="quiz-topic">
      <img src={image} alt="quiz" />
      <div className="overlay">{name}</div>
    </div>
  );
};
