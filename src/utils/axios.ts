import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 15000,
  headers: { "x-api-key": import.meta.env.VITE_API_KEY },
});

type TMethod = "GET" | "POST" | "PUT" | "DELETE";
export const invokeAxios = async (
  route: string,
  data: any = {},
  method: TMethod = "GET"
) => {
  try {
    return await axiosInstance({
      url: route,
      data,
      method,
    });
  } catch (error) {
    throw error;
  }
};
