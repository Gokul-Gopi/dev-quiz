import { invokeAxios } from "../utils/axios";

export const loginUser = async (data: any) => {
  try {
    const response = await invokeAxios("/auth/login", data, "POST");
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
