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
  className?: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IQuizTopic {
  name: string;
  image: string;
}

export interface IModalProvider {
  children: JSX.Element;
}
export interface IModalState {
  logout: boolean;
  instructions: boolean;
}

export type ModalActionType = "openLogoutModal" | "openInstructionsModal";
export interface IModalAction {
  type: ModalActionType;
}
