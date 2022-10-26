import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error: any = useRouteError();

  return <div>{error?.statusText || error?.message}</div>;
};
