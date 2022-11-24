import { IconType } from "react-icons";

export interface IFormInput {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  register: any;
  errors: any;
  icon: JSX.Element;
  rules: any;
}

export interface IIconButton {
  icon: JSX.Element;
  text: string;
  isLoading?: boolean;
  className?: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IRegisterUser {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IQuizTopic {
  name: string;
  image: string;
}

export interface IModalState {
  logout: boolean;
  instructions: boolean;
  signup: boolean;
}

export type ModalActionType =
  | "LOGOUT_MODAL"
  | "INSTRUCTION_MODAL"
  | "SIGNUP_MODAL";
export interface IModalAction {
  type: ModalActionType;
}

export interface IAuthState {
  name: string;
  isLoggedIn: boolean;
}

export interface IAuthAction {
  type: "SET_USER";
  payload: IAuthState;
}
