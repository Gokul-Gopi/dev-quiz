import { toast, ToastOptions } from "react-toastify";

export const showToast = (
  message: string,
  status: "success" | "error" | "warn"
) => {
  const toastConfig: ToastOptions = {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  return toast[status](message, toastConfig);
};

export const getErrorMessage = (error: any) => {
  let message =
    error?.response?.data?.message ||
    error?.response?.message ||
    error?.response?.statusText ||
    error?.message ||
    "Something went wrong!";

  return message;
};
