import { ChangeEvent, MouseEvent } from "react";

export interface IUpdate {
    todo: string;
    id: number;
    isCompleted: boolean;
}

export interface IDatas extends IUpdate {
    userId: number;
}

export interface IUD extends IUpdate {
    request: ({ todo, id, isCompleted }: IUpdate) => Promise<any>;
}

export interface IProps {
    onChangeInput: (
        todoSet: React.Dispatch<React.SetStateAction<string>>
    ) => (e: ChangeEvent<HTMLInputElement>) => void;
    onClickCreate: (e: MouseEvent<HTMLButtonElement>) => Promise<void>;
    onClickUD: ({ request, todo, id, isCompleted }: IUD) => () => Promise<any>;
    datas: IDatas[] | undefined;
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    todoEdit: string;
    setTodoEdit: React.Dispatch<React.SetStateAction<string>>;
}
