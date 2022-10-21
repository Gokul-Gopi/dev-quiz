import "./CustomModal.css";

interface ICustomModal {
  isOpen: boolean;
  setOpenModal: (arg0: boolean) => void;
  children: JSX.Element;
}

export const CustomModal = ({
  isOpen,
  setOpenModal,
  children,
}: ICustomModal) => {
  return (
    <div
      onClick={() => setOpenModal(false)}
      className="custom-modal"
      style={{ display: isOpen ? "flex" : "none" }}
    >
      {children}
    </div>
  );
};
