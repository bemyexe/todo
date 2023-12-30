import { FC, useState } from "react";
import { ITodoItem } from "../../types/types";
import classes from "./TodoItemEdit.module.css";
import SaveButton from "../UI/SaveButton/SaveButton";
import CancelButton from "../UI/CancelButton/CancelButton";

interface ITodoItemEditProps {
  todoItem: ITodoItem;
  handleCancelButtonClick: () => void;
  addNewEditTodo: (newEditedTodo: ITodoItem) => void;
}

const TodoItemEdit: FC<ITodoItemEditProps> = ({
  todoItem,
  handleCancelButtonClick,
  addNewEditTodo,
}) => {
  const [editTodo, setEditTodo] = useState<ITodoItem>({
    id: todoItem.id,
    title: todoItem.title,
    body: todoItem.body,
  });

  const createNewEditTodo = () => {
    addNewEditTodo(editTodo);
    handleCancelButtonClick();
  };

  return (
    <div className={classes.todo_item_edit}>
      <div className={classes.todo_item_edit__content}>
        <input
          className={classes.todo_item_edit_titleInput}
          value={editTodo.title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEditTodo({ ...editTodo, title: e.target.value })
          }
        />
      </div>
      <div className={classes.todo_item_edit_bottom}>
        <input
          className={classes.todo_item_edit_bodyInput}
          value={editTodo.body}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEditTodo({ ...editTodo, body: e.target.value })
          }
        />

        <div className={classes.todo_item_edit_bottom__btns}>
          <SaveButton createNewEditTodo={createNewEditTodo}>Save</SaveButton>
          {/* <button onClick={createNewEditTodo}>Save</button> */}
          <CancelButton handleCancelButtonClick={handleCancelButtonClick}>
            Cancel
          </CancelButton>
          {/* <button onClick={handleCancelButtonClick}>Cancel</button> */}
        </div>
      </div>
    </div>
  );
};

export default TodoItemEdit;
