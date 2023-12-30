import React, { useState } from "react";
import "./Global.css";
import TodoForm from "./components/TodoForm/TodoForm";
import { ITodoItem } from "./types/types";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const [todoItems, setTodoItems] = useState<ITodoItem[]>([]);

  const addNewTodo = (newTodo: ITodoItem) => {
    setTodoItems([...todoItems, newTodo]);
  };

  const deleteTodo = (deleteTodo: ITodoItem) => {
    setTodoItems(todoItems.filter((item) => item.id !== deleteTodo.id));
  };

  const addNewEditTodo = (newEditedTodo: ITodoItem) => {
    setTodoItems(
      todoItems.map((item: ITodoItem) =>
        item.id === newEditedTodo.id ? newEditedTodo : item
      )
    );
  };

  return (
    <div className="bg">
      <div className="app_container">
        <h1 className="title">Todo</h1>
        <TodoForm addNewTodo={addNewTodo} />
        <h1 className="title">Todo List</h1>
        <TodoList
          deleteTodo={deleteTodo}
          todoItems={todoItems}
          addNewEditTodo={addNewEditTodo}
        />
      </div>
    </div>
  );
}

export default App;
