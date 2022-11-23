import { invokeAxios } from "../utils/axios";

export const getQuizes = async () => {
  try {
    const response = await invokeAxios("/quizes");
    return response;
  } catch (error) {
    throw error;
  }
};

export const getQuiz = async (quizId: string) => {
  try {
    const response = await invokeAxios(`/quiz/${quizId}`);
    return response;
  } catch (error) {
    throw error;
  }
};
