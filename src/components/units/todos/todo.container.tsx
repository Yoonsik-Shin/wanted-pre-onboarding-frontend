import TodoUI from "./todo.presenter";
import { ChangeEvent, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IDatas, IUD } from "./todo.types";
import { createTodo, getTodos } from "./todo.queries";
import { AxiosReq } from "../../../commons/lib/auth-todo-axios";

export default function Todo() {
    const location = useLocation();
    const navigate = useNavigate();
    const [todo, setTodo] = useState<string>("");
    const [todoEdit, setTodoEdit] = useState<string>("");
    const [refetch, setRefetch] = useState<boolean>(false);
    const [datas, setDatas] = useState<IDatas[]>([]);
    const accessToken =
        localStorage.getItem("access_token") ?? location?.state?.access_token;

    const Rerender = () => {
        setRefetch((prev) => !prev);
    };

    const onChangeInput =
        (todoSet: React.Dispatch<React.SetStateAction<string>>) =>
        (e: ChangeEvent<HTMLInputElement>) => {
            todoSet(e.target.value);
        };

    const onClickCreate = async () => {
        await createTodo(todo);
        setTodo("");
        Rerender();
    };

    const onClickUD =
        ({ request, todo, id, isCompleted }: IUD) =>
        async () => {
            await request({ todo, id, isCompleted });
            Rerender();
        };

    useEffect(() => {
        if (!accessToken) {
            navigate("/signin");
        } else {
            getTodos(setDatas, accessToken);
            AxiosReq(accessToken);
        }
    }, [refetch]);

    return (
        <TodoUI
            onChangeInput={onChangeInput}
            onClickCreate={onClickCreate}
            onClickUD={onClickUD}
            datas={datas}
            todo={todo}
            setTodo={setTodo}
            todoEdit={todoEdit}
            setTodoEdit={setTodoEdit}
        />
    );
}
