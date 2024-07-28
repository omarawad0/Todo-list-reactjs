import React from "react";
import { client } from "../../utils/apiClient";
import { config } from "../../config/appConfig";
import useAsync from "../../hooks/useAsync";
import styles from "./Todo.module.css";

const AsyncTodos = () => {
  const { data: asyncTodos, error, run, isLoading, isError } = useAsync();

  const fetchToDosHandler = () => {
    run(client(config.URL));
  };
  return (
    <div>
      <div>
        <h3>Async Todos</h3>
        <button disabled={isLoading} onClick={fetchToDosHandler}>
          Fetch ToDos
        </button>
      </div>
      {isError && <p>Error: {error.message}</p>}
      <ul>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          asyncTodos.map((toDo) => (
            <li key={toDo.id}>
              <div className={styles.todoItem}>
                <div>
                  <p>{toDo.title}</p>
                </div>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};
export default AsyncTodos;
