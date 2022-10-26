import { ModalActions, useModal } from "../../context/ModalProvider";
import { Modal } from "./Modal";
import { RegsiterForm } from "../Forms/RegsiterForm";

export const RegisterModal = () => {
  const { modalDispatch } = useModal();

  const closeModal = (event: React.MouseEvent) => {
    modalDispatch({
      type: ModalActions.signup,
    });
  };

  return (
    <Modal>
      <RegsiterForm closeForm={closeModal} />
    </Modal>
  );
};
