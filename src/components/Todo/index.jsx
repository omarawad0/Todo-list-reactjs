import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import styles from "./Todo.module.css";
import {
  getItemFromLocalStorage,
  setItemToLocalStorage,
} from "../../utils/LocalStorage";
import { config } from "../../config/appConfig";

const Todo = () => {
  const [toDos, setToDos] = useState(
    getItemFromLocalStorage(config.localStorageKey) || []
  );
  const [filter, setFilter] = useState("all");

  const setToDosHandler = (value) => {
    setToDos(value);
    setItemToLocalStorage(config.localStorageKey, value);
  };
  const setNewTodo = (toDoValue) => {
    setToDosHandler([...toDos, toDoValue]);
  };

  const toggleTodo = (id) => {
    const newToDos = toDos.map((toDo) => {
      if (id === toDo.id) {
        return { ...toDo, completed: !toDo.completed };
      } else {
        return toDo;
      }
    });
    setToDosHandler(newToDos);
  };

  const deleteTodo = (id) => {
    const newToDos = toDos.filter((toDo) => toDo.id !== id);
    setToDosHandler(newToDos);
  };
  const withFilter = () => {
    switch (filter) {
      case "completed":
        return toDos.filter((toDo) => toDo.completed);
      case "incomplete":
        return toDos.filter((toDo) => !toDo.completed);
      default:
        return toDos;
    }
  };
  return (
    <div className={styles.todoWrapper}>
      <h1>To Do List</h1>
      <AddTodoForm addTodo={setNewTodo} />
      <div className={styles.filterButtons}>
        <button
          className={filter === "all" ? styles.selected : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={filter === "completed" ? styles.selected : ""}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
        <button
          className={filter === "incomplete" ? styles.selected : ""}
          onClick={() => setFilter("incomplete")}
        >
          Incomplete
        </button>
      </div>
      <ul>
        {withFilter(toDos).map((toDo) => (
          <li key={toDo.id}>
            <div className={styles.todoItem}>
              <input
                type="checkbox"
                checked={toDo.completed}
                onChange={() => toggleTodo(toDo.id)}
              />
              <div>
                <p>{toDo.title}</p>
                <p>{toDo.description}</p>
              </div>
            </div>
            <button onClick={() => deleteTodo(toDo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
