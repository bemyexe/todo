import React, { FC, Fragment, useState } from "react";
import { ITodoItem } from "../../types/types";
import TodoItem from "../TodoItem/TodoItem";
import TodoItemEdit from "../TodoItemEdit/TodoItemEdit";

interface ITodoListProps {
  todoItems: ITodoItem[];
  deleteTodo: (deleteTodo: ITodoItem) => void;
  addNewEditTodo: (newEditedTodo: ITodoItem) => void;
}

const TodoList: FC<ITodoListProps> = ({
  todoItems,
  deleteTodo,
  addNewEditTodo,
}) => {
  const [todoEditId, setTodoEditId] = useState<number>(0);

  const handleEditButtonClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    editTodo: ITodoItem
  ) => {
    e.preventDefault();
    setTodoEditId(editTodo.id);
  };

  const handleCancelButtonClick = () => {
    setTodoEditId(0);
  };

  return (
    <div>
      {todoItems.length ? (
        todoItems.map((todo) => (
          <Fragment>
            {todoEditId === todo.id ? (
              <TodoItemEdit
                key={todo.id}
                todoItem={todo}
                handleCancelButtonClick={handleCancelButtonClick}
                addNewEditTodo={addNewEditTodo}
              />
            ) : (
              <TodoItem
                key={todo.id}
                deleteTodo={deleteTodo}
                todoItem={todo}
                handleEditButtonClick={handleEditButtonClick}
              />
            )}
          </Fragment>
        ))
      ) : (
        <div>Nothing</div>
      )}
    </div>
  );
};

export default TodoList;
