import { IIconButton } from "../../utils/types";
import { Loader } from "../Loader/Loader";
import "./IconButton.css";

export const IconButton = ({
  icon,
  text,
  isLoading,
  className,
}: IIconButton) => {
  return (
    <button className={className} disabled={isLoading}>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="icon-and-text">
          {icon} {text}
        </div>
      )}
    </button>
  );
};
