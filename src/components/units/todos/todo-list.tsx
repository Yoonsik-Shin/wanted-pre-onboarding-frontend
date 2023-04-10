import { ChangeEvent, useState } from "react";
import { deleteTodo, updateTodo } from "./todo.queries";
import { IDatas, IUD } from "./todo.types";

interface IProps {
    el: IDatas;
    onChangeInput: (
        todoSet: React.Dispatch<React.SetStateAction<string>>
    ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
    todoEdit: string;
    setTodoEdit: React.Dispatch<React.SetStateAction<string>>;
    onClickUD: ({ request, todo, id, isCompleted }: IUD) => () => Promise<any>;
}

export default function TodoList(props: IProps) {
    const { el, onChangeInput, todoEdit, setTodoEdit, onClickUD } = props;
    const [isEdit, setIsEdit] = useState(false);
    const [isCompleted, setIsCompleted] = useState<boolean>(false);

    const onClickEdit = (state: boolean) => () => {
        setIsEdit(state);
    };

    const onClickEditSubmit = async () => {
        await onClickUD(Request.updateTodo)();
        setIsEdit(false);
    };

    const onChangeChecked = (e: ChangeEvent<HTMLInputElement>) => {
        setIsCompleted(e.target.checked);
    };

    const Request = {
        updateTodo: {
            request: updateTodo,
            todo: todoEdit,
            id: el.id,
            isCompleted,
        },
        deleteTodo: {
            request: deleteTodo,
            todo: todoEdit,
            id: el.id,
            isCompleted: el.isCompleted,
        },
    };

    return (
        <li>
            <label>
                <input
                    type="checkbox"
                    defaultChecked={el.isCompleted}
                    onChange={onChangeChecked}
                />
            </label>
            <span>{`${el.id}번 todo : `}</span>
            {!isEdit && (
                <>
                    <span>{el.todo}</span>
                    <button
                        data-testid="modify-input"
                        onClick={onClickEdit(true)}
                    >
                        수정
                    </button>
                    <button
                        data-testid="delete-button"
                        onClick={onClickUD(Request.deleteTodo)}
                    >
                        삭제
                    </button>
                </>
            )}
            {isEdit && (
                <>
                    <input
                        defaultValue={el.todo}
                        onChange={onChangeInput(setTodoEdit)}
                    />
                    <button
                        data-testid="submit-button"
                        onClick={onClickEditSubmit}
                    >
                        제출
                    </button>
                    <button
                        data-testid="cancel-button"
                        onClick={onClickEdit(false)}
                    >
                        취소
                    </button>
                </>
            )}
        </li>
    );
}
