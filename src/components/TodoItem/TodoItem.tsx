import { FC } from "react";
import { ITodoItem } from "../../types/types";
import classes from "./TodoItem.module.css";
import EditButton from "../UI/EditButton/EditButton";
import DeleteButton from "../UI/DeleteButton/DeleteButton";

interface ITodoItemProps {
  todoItem: ITodoItem;
  deleteTodo: (deleteTodo: ITodoItem) => void;
  handleEditButtonClick: (
    e: React.MouseEvent<HTMLButtonElement>,
    editTodo: ITodoItem
  ) => void;
}

const TodoItem: FC<ITodoItemProps> = ({
  todoItem,
  deleteTodo,
  handleEditButtonClick,
}) => {
  return (
    <div className={classes.todo_item}>
      <div className={classes.todo_item__content}>
        <div className={classes.todo_item__top}>
          <div className={classes.todo_item__top__left}>
            <div className={classes.todo_item_title}>{todoItem.title}</div>
            <EditButton
              todoItem={todoItem}
              handleEditButtonClick={handleEditButtonClick}
            >
              Edit
            </EditButton>
            {/* <button onClick={(e) => handleEditButtonClick(e, todoItem)}>
              Edit
            </button> */}
          </div>
          <DeleteButton deleteTodo={deleteTodo} todoItem={todoItem}>
            Delete
          </DeleteButton>
          {/* <button onClick={() => deleteTodo(todoItem)}>Delete</button> */}
        </div>

        <div className={classes.todo_item__bottom}>{todoItem.body}</div>
      </div>
    </div>
  );
};

export default TodoItem;
