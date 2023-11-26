import React, { useState } from "react";
import { signupService } from "../services/user";

export const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = await signupService(formData);
      console.log(userData);

      // Optionally, you can handle success, redirect, or show a success message.
    } catch (error) {
      console.error("Registration error:", error);
      // Optionally, you can handle errors, show an error message, etc.
    }
  };

  return (
    <section style={{ maxWidth: "400px", margin: "auto", marginTop: "50px" }}>
      <form onSubmit={handleSubmit} style={{ backgroundColor: "#f3b058", padding: "20px", borderRadius: "10px" }}>
        <h3 style={{ color: "#008000", textAlign: "center" }}>Register</h3>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="name" style={{ color: "#008000" }}>User Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            style={{ width: "100%", padding: "5px" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="email" style={{ color: "#008000" }}>Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: "100%", padding: "5px" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="password" style={{ color: "#008000" }}>Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            style={{ width: "100%", padding: "5px" }}
          />
        </div>
        <button type="submit" style={{ backgroundColor: "#008000", color: "#f3b058", padding: "10px", borderRadius: "5px", cursor: "pointer" }}>Register</button>
      </form>
    </section>
  );
};

export default Register;
