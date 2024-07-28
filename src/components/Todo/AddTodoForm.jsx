import React, { useState } from "react";
import styles from "./Todo.module.css";
import InputField from "../InputField";
import { generateRandomId } from "../../utils/generateRandomId";
const AddTodoForm = ({ addTodo }) => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDescription, setTodoDescription] = useState("");

  return (
    <div className={styles.formControlWrapper}>
      <InputField
        value={todoTitle}
        onChange={setTodoTitle}
        type="text"
        label="Title"
        placeholder="Enter title"
      />
      <InputField
        value={todoDescription}
        onChange={setTodoDescription}
        type="text"
        label="Description"
        placeholder="Enter Description"
      />
      <button
        onClick={() => {
          if (!todoTitle.trim() || !todoDescription.trim()) return;
          addTodo({
            id: generateRandomId(),
            title: todoTitle,
            description: todoDescription,
            completed: false,
          });
          setTodoTitle("");
          setTodoDescription("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTodoForm;
