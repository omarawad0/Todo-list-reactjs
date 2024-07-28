import React from "react";
import styles from "./InputField.module.css";

const InputField = ({ value, onChange, type, label, placeholder }) => {
  return (
    <div className={styles.formControl}>
      <label for={label}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        id={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default InputField;
