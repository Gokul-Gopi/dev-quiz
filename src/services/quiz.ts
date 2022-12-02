import { invokeAxios } from "../utils/axios";
import { getErrorMessage, showToast } from "../utils/helpers";

export const getQuizes = async () => {
  try {
    return await invokeAxios("/quiz");
  } catch (error) {
    return showToast(getErrorMessage(error), "error");
  }
};

export const getQuiz = async (quizId: string) => {
  try {
    return await invokeAxios(`/quiz/${quizId}`);
  } catch (error) {
    return showToast(getErrorMessage(error), "error");
  }
};
