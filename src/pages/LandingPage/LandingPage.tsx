import "./LandingPage.css";
import { AiOutlineBulb } from "react-icons/ai";
import { LoginForm } from "../../components/Forms/LoginForm";
import { useModal } from "../../context/ModalProvider";
import { RegisterModal } from "../../components/Modals/RegsiterModal";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

export const LandingPage = () => {
  const { modalState } = useModal();
  const { authState } = useAuth();
  const navigate = useNavigate();

  if (authState.isLoggedIn) {
    navigate("/quiz");
  }

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
      {modalState.signup && <RegisterModal />}
    </div>
  );
};
