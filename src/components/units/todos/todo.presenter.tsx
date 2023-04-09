import TodoList from "./todo-list";
import { IProps } from "./todo.types";

export default function TodoUI(props: IProps) {
    const {
        onChangeInput,
        onClickCreate,
        onClickUD,
        datas,
        todo,
        setTodo,
        todoEdit,
        setTodoEdit,
    } = props;

    return (
        <>
            <input
                data-testid="new-todo-input"
                onChange={onChangeInput(setTodo)}
                value={todo}
            />
            <button data-testid="new-todo-add-button" onClick={onClickCreate}>
                추가
            </button>
            {datas?.map((el) => (
                <TodoList
                    key={el.id}
                    el={el}
                    onChangeInput={onChangeInput}
                    todoEdit={todoEdit}
                    setTodoEdit={setTodoEdit}
                    onClickUD={onClickUD}
                />
            ))}
        </>
    );
}
