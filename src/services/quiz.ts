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
    const response = await invokeAxios(`/quiz/${quizId}`);
    return [response, null];
  } catch (error) {
    return [null, error];
  }
};
