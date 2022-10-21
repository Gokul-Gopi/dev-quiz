import {
  AiOutlineBulb,
  AiOutlineLogout,
  AiOutlineTrophy,
} from "react-icons/ai";
import { useModal } from "../Context/ModalProvider";
import { CustomModal } from "../CustomModal/CustomModal";
import { IoCloseOutline } from "react-icons/io5";
import "./Navbar.css";

export const Navbar = () => {
  const { openModal, setOpenModal } = useModal();

  return (
    <nav>
      <h2>
        <AiOutlineBulb /> <span>Dev</span> Quiz!
      </h2>

      <div className="nav-btns">
        <button>
          <AiOutlineTrophy />
        </button>
        <button onClick={() => setOpenModal(true)}>
          <AiOutlineLogout />
        </button>
      </div>

      <CustomModal isOpen={openModal} setOpenModal={setOpenModal}>
        <div className="logout-modal">
          <IoCloseOutline
            onClick={() => setOpenModal(false)}
            className="close-btn"
          />
          <p>Are you sure you want to logout?</p>
          <div>
            <span>Yes</span>
            <span onClick={() => setOpenModal(true)}>No</span>
          </div>
        </div>
      </CustomModal>
    </nav>
  );
};
