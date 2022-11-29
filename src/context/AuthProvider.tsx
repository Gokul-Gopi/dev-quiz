import { createContext, useContext, useEffect, useReducer } from "react";
import { addAuthHeader } from "../utils/helpers";
import { IAuthAction, IAuthState } from "../utils/types";

const initialState = {
  name: "",
  isLoggedIn: false,
};

const reducer = (state: IAuthState, action: IAuthAction): IAuthState => {
  switch (action.type) {
    case "SET_USER": {
      const { name, isLoggedIn } = action.payload;
      return { name, isLoggedIn };
    }

    default:
      return state;
  }
};

const AuthContext = createContext({
  authState: initialState,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  authDispatch: (action: IAuthAction) => {},
});

const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem("user") as string);

    if (userDetails?.token) {
      dispatch({
        type: "SET_USER",
        payload: { name: userDetails?.firstname, isLoggedIn: true },
      });
      addAuthHeader(userDetails?.token);
    } else {
      dispatch({
        type: "SET_USER",
        payload: { name: "", isLoggedIn: false },
      });
    }
  }, [state.isLoggedIn]);

  return (
    <AuthContext.Provider value={{ authState: state, authDispatch: dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };
