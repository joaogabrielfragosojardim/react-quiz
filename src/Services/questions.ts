import { api } from "./api";

export const getQuestions = async (amount: number) => {
  const response = await api.get("api.php", {
    params: {
      amount: amount,
    },
  });

  return response.data;
};
