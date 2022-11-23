import { invokeAxios } from "../utils/axios";

export const loginUser = async () => {
  try {
    const response = await invokeAxios("/auth/login");
    return response;
  } catch (error) {
    throw error;
  }
};

export const regsiterUser = async (data: any) => {
  try {
    const response = await invokeAxios("/auth/register", data, "POST");
    return response;
  } catch (error) {
    throw error;
  }
};
