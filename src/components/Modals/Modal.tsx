import "./Modal.css";

interface IModal {
  children: JSX.Element;
}

export const Modal = ({ children }: IModal) => {
  return <div className="custom-modal">{children}</div>;
};
