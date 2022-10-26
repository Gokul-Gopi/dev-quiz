import { createContext, useContext, useReducer } from "react";
import { IModalAction, IModalProvider, IModalState } from "../utils/types";

const initialState = {
  logout: false,
  instructions: false,
  signup: false,
};

const ModalContext = createContext<{
  modalState: IModalState;
  modalDispatch: React.Dispatch<IModalAction>;
}>({
  modalState: initialState,
  modalDispatch: () => null,
});

const reducer = (state: IModalState, action: IModalAction): IModalState => {
  switch (action.type) {
    case "LOGOUT_MODAL":
      return { ...state, logout: !state.logout };

    case "INSTRUCTION_MODAL":
      return { ...state, instructions: !state.instructions };

    case "SIGNUP_MODAL":
      return { ...state, signup: !state.signup };

    default:
      return { ...state };
  }
};

const ModalProvider = ({ children }: IModalProvider) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ModalContext.Provider
      value={{ modalState: state, modalDispatch: dispatch }}
    >
      {children}
    </ModalContext.Provider>
  );
};

enum ModalActions {
  logout = "LOGOUT_MODAL",
  instructions = "INSTRUCTION_MODAL",
  signup = "SIGNUP_MODAL",
}

const useModal = () => useContext(ModalContext);
export { useModal, ModalProvider, ModalActions };
