import { useRouteError } from "react-router-dom";
import "./ErrorPage.css";
import notFoundSVG from "../../assets/not-found.svg";

export const ErrorPage = () => {
  const error: any = useRouteError();

  return (
    <div className="error-page">
      <div>
        <img src={notFoundSVG} alt="Error" />
      </div>
      <span>{error?.statusText || error?.message}</span>
    </div>
  );
};
