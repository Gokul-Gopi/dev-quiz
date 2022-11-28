import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { authState } = useAuth();
  const navigate = useNavigate();

  return <>{authState.isLoggedIn ? children : navigate("/")}</>;
};
