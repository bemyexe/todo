import React, { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ITodoItem } from "../../types/types";
import classes from "./TodoForm.module.css";
import { IoIosWarning } from "react-icons/io";

interface ITodoFormProps {
  addNewTodo: (newTodo: ITodoItem) => void;
}

type Inputs = {
  id: number;
  title: string;
  body: string;
};

const TodoForm: FC<ITodoFormProps> = ({ addNewTodo }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const createNewTodo: SubmitHandler<Inputs> = (data) => {
    const newTodo = {
      ...data,
      id: Date.now(),
    };
    console.log(newTodo);
    reset({ id: 0, title: "", body: "" });
    addNewTodo(newTodo);
  };
  return (
    <form className={classes.todo_form} onSubmit={handleSubmit(createNewTodo)}>
      <div className={classes.todo_form_inputs}>
        <input
          className={classes.todo_form_input}
          placeholder="Title"
          {...register("title", { required: true })}
        />
        {errors.title && (
          <span className={classes.span}>
            <IoIosWarning />
            Fill the title
          </span>
        )}
        <input
          className={classes.todo_form_input}
          placeholder="Body"
          {...register("body")}
        />
      </div>

      <input className={classes.todo_form_btn} value="Create" type="submit" />
    </form>
  );
};

export default TodoForm;
