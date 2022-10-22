import { createContext, useContext, useReducer } from "react";
import { IModalAction, IModalProvider, IModalState } from "../utils/types";

const initialState = {
  logout: false,
  instructions: false,
};

const ModalContext = createContext<{
  state: IModalState;
  dispatch: React.Dispatch<IModalAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

const reducer = (state: IModalState, action: IModalAction): IModalState => {
  switch (action.type) {
    case "openLogoutModal":
      return { ...state, logout: !state.logout };

    case "openInstructionsModal":
      return { ...state, instructions: !state.instructions };

    default:
      return { ...state };
  }
};

const ModalProvider = ({ children }: IModalProvider) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ModalContext.Provider value={{ state, dispatch }}>
      {children}
    </ModalContext.Provider>
  );
};

enum ModalActions {
  openLogout = "openLogoutModal",
  openInstructions = "openInstructionsModal",
}

const useModal = () => useContext(ModalContext);
export { useModal, ModalProvider, ModalActions };
