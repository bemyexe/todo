import React, { FC } from "react";
import { ITodoItem } from "../../../types/types";
import classes from "./DeleteButton.module.css";
import { MdDeleteForever } from "react-icons/md";

interface IDeleteButtonProps {
  todoItem: ITodoItem;
  deleteTodo: (deleteTodo: ITodoItem) => void;
  children: string;
}

const DeleteButton: FC<IDeleteButtonProps> = ({
  todoItem,
  deleteTodo,
  children,
}) => {
  return (
    <button className={classes.delete_btn} onClick={() => deleteTodo(todoItem)}>
      {children}
      <MdDeleteForever size="15px" />
    </button>
  );
};

export default DeleteButton;
