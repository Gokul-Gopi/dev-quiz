import { QuizTopic } from "../../components/QuizTopic/QuizTopic";
import { BasicLayout } from "../../layout/BasicLayout";
import "./QuizSelection.css";

const user = "Maxx";

const quizes = [
  {
    id: 1,
    name: "HTML",
    image: "https://cdn-icons-png.flaticon.com/512/246/246185.png?w=360",
  },
  {
    id: 2,
    name: "CSS",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/240px-CSS3_logo.svg.png",
  },
  {
    id: 3,
    name: "Javascript",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png",
  },
  {
    id: 4,
    name: "React",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
  },
];

export const QuizSelection = () => {
  return (
    <BasicLayout>
      <div className="quiz-selection">
        <div className="title">
          <p>Hey {user}, select any topic to get started with the quiz</p>
          <span>Instructions</span>
        </div>

        <div className="quiz-topic-container">
          {quizes.map((e, i) => {
            return <QuizTopic key={`quiz${i}`} image={e.image} name={e.name} />;
          })}
        </div>

        {/* <Modal isOpen={openModal} setOpenModal={setOpenModal}>
          <Instructions />
        </Modal> */}
      </div>
    </BasicLayout>
  );
};
