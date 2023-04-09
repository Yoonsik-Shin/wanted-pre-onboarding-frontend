import { AuthorizedTodosAxios } from "../../../commons/lib/auth-todo-axios";
import { IDatas, IUpdate } from "./todo.types";

export const getTodos = async (
    setDatas: React.Dispatch<React.SetStateAction<IDatas[]>>,
    accessToken: string
) => {
    try {
        const result = await AuthorizedTodosAxios({
            method: "get",
            url: "/",
            headers: { Authorization: `Bearer ${accessToken}` },
        });
        setDatas(result.data);
    } catch (error) {
        console.error(error);
    }
};

export const createTodo = async (todo: string) => {
    try {
        await AuthorizedTodosAxios({
            method: "post",
            url: "/",
            headers: { "Content-Type": "application/json" },
            data: { todo },
        });
    } catch (error) {
        console.error(error);
    }
};

export const updateTodo = async ({ todo, id, isCompleted }: IUpdate) => {
    try {
        await AuthorizedTodosAxios({
            method: "put",
            url: `/${id}`,
            headers: { "Content-Type": "application/json" },
            data: { todo, isCompleted },
        });
    } catch (error) {
        console.error(error);
    }
};

export const deleteTodo = async ({ todo, id, isCompleted }: IUpdate) => {
    try {
        await AuthorizedTodosAxios({
            method: "delete",
            url: `/${id}`,
        });
    } catch (error) {
        console.error(error);
    }
};
