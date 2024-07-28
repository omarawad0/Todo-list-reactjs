import React, { useState } from "react";
import InputField from "../InputField";
import styles from "./FormRegistration.module.css";

const localizedErrors = {
  fullName: "Full Name is required",
  email: "Email is required",
  emailInvalid: "Email is invalid",
  password: "Password is required",
  confirmPassword: "Passwords do not match",
  terms: "You must accept the terms and conditions",
};

const FormRegistration = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateFormFields = () => {
    let formErrors = {};
    if (!formData.fullName) formErrors.fullName = localizedErrors.fullName;
    if (!formData.email) {
      formErrors.email = localizedErrors.email;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = localizedErrors.emailInvalid;
    }
    if (!formData.password) formErrors.password = localizedErrors.password;
    if (formData.password !== formData.confirmPassword) {
      formErrors.confirmPassword = localizedErrors.confirmPassword;
    }
    if (!formData.terms) formErrors.terms = localizedErrors.terms;
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateFormFields();
    if (Object.keys(formErrors).length === 0) {
      setErrors({});
      console.log("Form submitted successfully", formData);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>Registration Form</h2>
        <InputField
          label="Full Name"
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Enter your full name"
          error={errors.fullName}
        />
        <InputField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          error={errors.email}
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          error={errors.password}
        />
        <InputField
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm your password"
          error={errors.confirmPassword}
        />
        <div style={{ marginBottom: "20px" }}>
          <label>
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
            />
            I agree to the terms
          </label>
          {errors.terms && <p className={styles.error}>{errors.terms}</p>}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default FormRegistration;
