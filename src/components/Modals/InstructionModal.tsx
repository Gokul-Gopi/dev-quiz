import { AiOutlineAlignRight } from "react-icons/ai";
import { FaHandPointRight } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { ModalActions, useModal } from "../../context/ModalProvider";
import "./InstructionModal.css";
import { Modal } from "./Modal";

const instructionArr = [
  "To start a quiz select any of the given topic",
  "Each questiion weighs 10 points",
  "A quiz contains 8 questions",
  "Completing a quiz, gets you a completion certificate which you can download from the certificates page",
];

export const InstructionModal = () => {
  const { modalDispatch } = useModal();

  const closeModal = (event: React.MouseEvent) => {
    modalDispatch({ type: ModalActions.instructions });
  };

  return (
    <Modal>
      <div className="instruction-modal">
        <IoCloseOutline onClick={closeModal} className="close-btn" />
        <p>
          <AiOutlineAlignRight />
          Instructions
        </p>
        {instructionArr.map((e, i) => {
          return (
            <div key={`instruction${i}`} className="instruction">
              <FaHandPointRight /> <span>{e}</span>
            </div>
          );
        })}
      </div>
    </Modal>
  );
};
