import { FaHandPointRight } from "react-icons/fa";
import "./instructions.css";

const instructionArr = [
  "Select any of the topic from below to get started with quiz",
  "Each questiion weighs 10 points",
  "Each quiz has 8 points",
  "Scoring more the 70% get you completion certificate which you can download from the certificates page",
];

export const Instructions = () => {
  return (
    <div className="red">
      <p>Instrunctions</p>
      {instructionArr.map((e, i) => {
        return (
          <div key={`instruction${i}`}>
            <FaHandPointRight /> <span>{e}</span>
          </div>
        );
      })}
    </div>
  );
};
