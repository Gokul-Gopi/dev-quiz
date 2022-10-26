import "./LandingPage.css";
import { AiOutlineBulb } from "react-icons/ai";
import { LoginForm } from "../../components/Forms/LoginForm";
import { useModal } from "../../context/ModalProvider";
import { RegisterModal } from "../../components/Modals/RegsiterModal";

export const LandingPage = () => {
  const { state } = useModal();
  // console.log(state.signup);
  return (
    <div className="landing-page">
      <div className="headings">
        <AiOutlineBulb />
        <h3>Welcome to</h3>
        <h1>
          <span>Dev</span> Quiz!
        </h1>
      </div>
      <LoginForm />
      {state.signup && <RegisterModal />}
    </div>
  );
};
