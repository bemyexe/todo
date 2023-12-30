import React, { FC } from "react";
import { ITodoItem } from "../../../types/types";
import classes from "./EditButton.module.css";
import { CiEdit } from "react-icons/ci";

interface IEditButtonProps {
  todoItem: ITodoItem;
  handleEditButtonClick: (
    e: React.MouseEvent<HTMLButtonElement>,
    editTodo: ITodoItem
  ) => void;
  children: string;
}

const EditButton: FC<IEditButtonProps> = ({
  todoItem,
  handleEditButtonClick,
  children,
}) => {
  return (
    <button
      className={classes.edit_btn}
      onClick={(e) => handleEditButtonClick(e, todoItem)}
    >
      {children}
      <CiEdit size="15px" />
    </button>
  );
};

export default EditButton;
