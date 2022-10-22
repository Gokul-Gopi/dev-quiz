import "./Modal.css";

interface IModal {
  closeModal: (e: React.MouseEvent) => void;
  children: JSX.Element;
}

export const Modal = ({ closeModal, children }: IModal) => {
  return (
    <div onClick={closeModal} className="custom-modal">
      {children}
    </div>
  );
};
