import axios from "axios";

// const baseURL = "http://localhost:8000/todos";
const baseURL = "https://www.pre-onboarding-selection-task.shop/todos";

export const AuthorizedTodosAxios = axios.create({
    baseURL,
    headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token") ?? ""}`,
    },
});

export const AxiosReq = (accessToken: string) => {
    AuthorizedTodosAxios.interceptors.request.use(
        (request) => {
            request.headers.Authorization = `Bearer ${accessToken}`;
            return request;
        },
        async (error) => {
            const {
                config,
                response: { status },
            } = error;
            if (status === 401) {
                config.headers.Authorization = `Bearer ${accessToken}`;
                return await AuthorizedTodosAxios(config);
            }
        }
    );
};
