import {
  AiOutlineBulb,
  AiOutlineLogout,
  AiOutlineTrophy,
} from "react-icons/ai";
import { ModalActions, useModal } from "../../context/ModalProvider";
import "./Navbar.css";
import { LogoutModal } from "../Modals/LogoutModal";

export const Navbar = () => {
  const { state, dispatch } = useModal();

  return (
    <nav>
      <h2>
        <AiOutlineBulb /> <span>Dev</span> Quiz!
      </h2>
      <div className="nav-btns">
        <button>
          <AiOutlineTrophy />
        </button>
        <button
          onClick={() =>
            dispatch({
              type: ModalActions.openLogout,
            })
          }
        >
          <AiOutlineLogout />
        </button>
      </div>

      {state.logout && <LogoutModal />}
    </nav>
  );
};
