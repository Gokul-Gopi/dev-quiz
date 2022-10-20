import { IIconButton } from "../../utils/types";
import "./IconButton.css";

export const IconButton = ({ icon, text, className }: IIconButton) => {
  return (
    <button className={className}>
      <div>
        {icon} {text}
      </div>
    </button>
  );
};
