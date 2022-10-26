import { IoCloseOutline } from "react-icons/io5";
import { ModalActions, useModal } from "../../context/ModalProvider";
import { Modal } from "./Modal";
import "./LogoutModal.css";

export const LogoutModal = () => {
  const { dispatch } = useModal();

  const closeModal = (event: React.MouseEvent) => {
    event.stopPropagation();
    dispatch({
      type: ModalActions.openLogout,
    });
  };

  return (
    <Modal closeModal={closeModal}>
      <div className="logout-modal">
        <IoCloseOutline onClick={closeModal} className="close-btn" />
        <p>Are you sure you want to logout?</p>
        <div>
          <span>Yes</span>
          <span onClick={closeModal}>No</span>
        </div>
      </div>
    </Modal>
  );
};
