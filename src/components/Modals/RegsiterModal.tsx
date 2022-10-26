import { ModalActions, useModal } from "../../context/ModalProvider";
import { Modal } from "./Modal";
import { RegsiterForm } from "../Forms/RegsiterForm";

export const RegisterModal = () => {
  const { dispatch } = useModal();

  const closeModal = (event: React.MouseEvent) => {
    dispatch({
      type: ModalActions.openSignup,
    });
  };

  return (
    <Modal>
      <RegsiterForm closeForm={closeModal} />
    </Modal>
  );
};
