import React, { FC } from "react";
import classes from "./SaveButton.module.css";

interface ISaveButtonProps {
  createNewEditTodo: () => void;
  children: string;
}

const SaveButton: FC<ISaveButtonProps> = ({ createNewEditTodo, children }) => {
  return (
    <button className={classes.save_btn} onClick={createNewEditTodo}>
      {children}
    </button>
  );
};

export default SaveButton;
