import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";
import { InstructionModal } from "../../components/Modals/InstructionModal";
import { QuizTopic } from "../../components/QuizTopic/QuizTopic";
import { useAuth } from "../../context/AuthProvider";
import { ModalActions, useModal } from "../../context/ModalProvider";
import { BasicLayout } from "../../layout/BasicLayout";
import { getQuizes } from "../../services/quiz";
import "./QuizSelection.css";

// const quizes = [
//   {
//     id: 1,
//     name: "HTML",
//     image: "https://cdn-icons-png.flaticon.com/512/246/246185.png?w=360",
//   },
//   {
//     id: 2,
//     name: "CSS",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/240px-CSS3_logo.svg.png",
//   },
//   {
//     id: 3,
//     name: "Javascript",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png",
//   },
//   {
//     id: 4,
//     name: "React",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
//   },
// ];

export const QuizSelection = () => {
  const { modalState, modalDispatch } = useModal();
  const { authState } = useAuth();
  const [quizes, setQuizes] = useState([]);

  const getQuizList = async () => {
    const response: any = await getQuizes();
    if (response.status === 200) {
      setQuizes(response?.data?.data);
    }
  };

  useEffect(() => {
    getQuizList();
  }, []);

  if (quizes.length < 1) {
    return (
      <div className="loader-container">
        <Loader />
      </div>
    );
  }
  return (
    <BasicLayout>
      <div className="quiz-selection">
        <div className="title">
          <p>
            Hey {authState.name}, select any topic to get started with the quiz
          </p>
          <span
            onClick={() => {
              modalDispatch({ type: ModalActions.instructions });
            }}
          >
            Instructions
          </span>
        </div>

        <div className="quiz-topic-container">
          {quizes.map((e: any) => {
            return (
              <Link to={`${e._id}`} key={e._id}>
                <QuizTopic image={e?.image} name={e?.name} />
              </Link>
            );
          })}
        </div>

        {modalState.instructions && <InstructionModal />}
      </div>
    </BasicLayout>
  );
};
