import axios from "axios";

export const api = axios.create({
  baseURL: "https://fakestoreapi.noksha.dev/api",
});
