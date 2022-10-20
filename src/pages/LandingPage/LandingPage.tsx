import "./LandingPage.css";
import { AiOutlineBulb } from "react-icons/ai";
import { LoginForm } from "../../components/LoginForm/LoginForm";

export const LandingPage = () => {
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
    </div>
  );
};
