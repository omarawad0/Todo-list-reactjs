import React from "react";
import styles from "./InputField.module.css";

const InputField = ({
  value,
  onChange,
  name,
  type,
  label,
  placeholder,
  error,
}) => {
  return (
    <div className={styles.formControl}>
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        id={label}
        value={value}
        onChange={onChange}
      />
      {error && <small className={styles.error}>{error}</small>}
    </div>
  );
};

export default InputField;
