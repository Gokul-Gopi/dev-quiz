import { IoCloseOutline } from "react-icons/io5";
import { ModalActions, useModal } from "../../context/ModalProvider";
import { Modal } from "./Modal";
import "./LogoutModal.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

export const LogoutModal = () => {
  const { modalDispatch } = useModal();
  const { authDispatch } = useAuth();
  const navigate = useNavigate();

  const closeModal = () => {
    modalDispatch({
      type: ModalActions.logout,
    });
  };

  const logout = () => {
    localStorage.removeItem("user");
    closeModal();
    authDispatch({
      type: "SET_USER",
      payload: { name: "", isLoggedIn: false },
    });
    navigate("/");
  };

  return (
    <Modal>
      <div className="logout-modal">
        <IoCloseOutline onClick={closeModal} className="close-btn" />
        <p>Are you sure you want to logout?</p>
        <div>
          <span onClick={logout}>Yes</span>
          <span onClick={closeModal}>No</span>
        </div>
      </div>
    </Modal>
  );
};
