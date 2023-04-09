import axios from "axios";

const accessToken = localStorage.getItem("access_token");
const baseURL = "http://localhost:8000/todos";
// const baseURL = "https://www.pre-onboarding-selection-task.shop/todos";

export const AuthorizedTodosAxios = axios.create({
    baseURL,
    headers: { Authorization: `Bearer ${accessToken ?? ""}` },
});
