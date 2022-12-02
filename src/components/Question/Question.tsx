import { useForm } from "react-hook-form";
import "./Question.css";
import { IoIosArrowForward } from "react-icons/io";
import { IQuestionDetails } from "../../utils/types";

export const Question = ({
  question,
  options,
  setNextQuestion,
}: IQuestionDetails) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const nextQuestion = (data: any) => {
    console.log(data);
    setNextQuestion((preState) => preState + 1);
  };

  return (
    <form className="question" onSubmit={handleSubmit(nextQuestion)}>
      <p>{question}</p>

      {options?.map((e, i) => {
        return (
          <div key={`option${i}`} className="option">
            <input type="radio" {...register("option")} />
            <label htmlFor="option">{e?.option}</label>
          </div>
        );
      })}

      <button type="submit">
        <IoIosArrowForward className="icon" />
      </button>
    </form>
  );
};
