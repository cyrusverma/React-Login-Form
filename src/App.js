import React, { useState } from "react";
import './App.css'

const App = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [validateErrors, setValidateErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newValidateErrors = {};

    if (!formData.username.trim()) {
      newValidateErrors["username"] = "Username is required";
    }

    if (!formData.email.trim()) {
      newValidateErrors["email"] = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newValidateErrors["email"] = "Invalid Email";
    }

    if (!formData.password.trim()) {
      newValidateErrors["password"] = "Password is required";
    } else if (formData.password.length < 6) {
      newValidateErrors["password"] = "Password is too short";
    }

    if (!formData.confirmPassword.trim()) {
      newValidateErrors["confirmPassword"] = "Confirm Password is required";
    } else if (formData.confirmPassword !== formData.password) {
      newValidateErrors["confirmPassword"] = "Passwords do not match";
    }

    setValidateErrors(newValidateErrors);
  };

  return (
    <>
     
    <form onSubmit={handleSubmit} className="form">
    <h1>Login Form </h1>
      <div>
        <label>Username</label>
        <input
          type="text"
          name="username"
          placeholder="username"
          autoComplete="off"
          onChange={handleChange}
          className="fields"
        />
        {validateErrors.username && <p className="p">{validateErrors.username}</p>}
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="abc@gmail.com"
          autoComplete="off"
          onChange={handleChange}
          className="fields"
        />
        {validateErrors.email && <p className="p">{validateErrors.email}</p>}
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="*********"
          autoComplete="off"
          onChange={handleChange}
          className="fields"
        />
        {validateErrors.password && <p className="p">{validateErrors.password}</p>}
      </div>
      <div>
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="*********"
          autoComplete="off"
          onChange={handleChange}
          className="fields"
        />
        {validateErrors.confirmPassword && (
          <p className="p">{validateErrors.confirmPassword}</p>
        )}
      </div>
      <button type="submit" className="btn">Submit</button>
    </form>
    </>
  );
};

export default App;
