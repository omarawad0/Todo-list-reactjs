import React from "react";
import styles from "./Todo.module.css";

const FilterButtons = ({ filter, setFilter }) => {
  return (
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
  );
};

export default FilterButtons;
