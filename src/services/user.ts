import { invokeAxios } from "../utils/axios";
import { getErrorMessage, showToast } from "../utils/helpers";

export const loginUser = async (data: any) => {
  try {
    return await invokeAxios("/auth/login", data, "POST");
  } catch (error) {
    return showToast(getErrorMessage(error), "error");
  }
};

export const regsiterUser = async (data: any) => {
  try {
    return await invokeAxios("/auth/register", data, "POST");
  } catch (error) {
    return showToast(getErrorMessage(error), "error");
  }
};
