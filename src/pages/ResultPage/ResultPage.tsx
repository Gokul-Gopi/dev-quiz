import "./ResultPage.css";
import { MdDone } from "react-icons/md";
import { BsCircle } from "react-icons/bs";
import { BiCircle } from "react-icons/bi";
import { IconButton } from "../../components/IconButton/IconButton";
import { AiOutlineHome } from "react-icons/ai";

export const ResultPage = () => {
  return (
    <div className="result-page">
      <div className="score-detail">
        <p>You scored</p>
        <p>65%</p>
      </div>

      <div className="other-details">
        <div>
          <MdDone className="icon" />
          <span>Correct answers: {"5/8"}</span>
        </div>
        <div>
          <BiCircle className="icon" />
          <span>Attempted questions: {"5/8"}</span>
        </div>
      </div>

      <div className="verify-answers">
        <p>Verify answers</p>
        <div></div>
      </div>

      <IconButton icon={<AiOutlineHome />} text="Home" className="btn" />
    </div>
  );
};
