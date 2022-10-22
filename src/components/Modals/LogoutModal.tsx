import { IoCloseOutline } from "react-icons/io5";
import { ModalActions, useModal } from "../../context/ModalProvider";
import { Modal } from "./Modal";
import "./LogoutModal.css";

export const LogoutModal = () => {
  const { dispatch } = useModal();

  const closeLogoutModal = (event: React.MouseEvent) => {
    event.stopPropagation();
    dispatch({
      type: ModalActions.openLogout,
    });
  };

  return (
    <Modal closeModal={closeLogoutModal}>
      <div className="logout-modal">
        <IoCloseOutline onClick={(e) => {}} className="close-btn" />
        <p>Are you sure you want to logout?</p>
        <div>
          <span>Yes</span>
          <span onClick={closeLogoutModal}>No</span>
        </div>
      </div>
    </Modal>
  );
};
