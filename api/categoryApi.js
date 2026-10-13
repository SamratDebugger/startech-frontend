import { api } from "../axios/axiosInstance";

export const fetchCategories = async () => {
  const res = await api.get("/categories");
  return res.data.data;
};
