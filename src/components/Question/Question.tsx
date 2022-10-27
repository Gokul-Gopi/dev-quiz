import { useForm } from "react-hook-form";
import "./Question.css";
import { IoIosArrowForward } from "react-icons/io";

export const Question = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form className="question">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, nam!
      </p>

      {[1, 2, 3, 4].map((e, i) => {
        return (
          <div key={`option${i}`} className="option">
            <input type="radio" {...register("option")} />
            <label htmlFor="option">
              Lorem ipsum dolor sit amet consectetur.
            </label>
          </div>
        );
      })}

      <button>
        <IoIosArrowForward className="icon" />
      </button>
    </form>
  );
};
