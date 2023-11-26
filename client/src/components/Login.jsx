import React, { useState, useContext } from "react";
import { loginService, signupService } from "../services/user";
import { UserContext } from "../context/User/UserContext";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const [isMember, setIsMember] = useState(true);
  const { token, setToken } = useContext(UserContext);
  const navigate = useNavigate(); // useNavigate instead of useHistory

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const dataObject = Object.fromEntries(formData);
    console.log(dataObject);

    if (isMember) {
      const userData = await loginService(dataObject);
      console.log(userData);
      setToken(userData.token);
    } else {
      const userData = await signupService(dataObject);
      console.log(userData);
      // After successful registration, redirect to the register route
      navigate("/Teacupdesign/register");
    }
  };

  return (
    <section style={{ maxWidth: "400px", margin: "auto", marginTop: "50px" }}>
      <form onSubmit={onSubmit} style={{ backgroundColor: "#f3b058", padding: "20px", borderRadius: "10px" }}>
        <h3 style={{ color: "#008000", textAlign: "center" }}>{isMember ? "Login" : "Register"}</h3>
        {!isMember && (
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="name" style={{ color: "#008000" }}>User Name</label>
            <input id="name" type="text" name="name" style={{ width: "100%", padding: "5px" }} />
          </div>
        )}
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="email" style={{ color: "#008000" }}>Email</label>
          <input type="email" name="email" id="email" style={{ width: "100%", padding: "5px" }} />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="password" style={{ color: "#008000" }}>Password</label>
          <input type="password" name="password" id="password" style={{ width: "100%", padding: "5px" }} />
        </div>
        <button type="submit" style={{ backgroundColor: "#008000", color: "#f3b058", padding: "10px", borderRadius: "5px", cursor: "pointer" }}>Submit</button>
        <p style={{ marginTop: "15px", color: "#008000" }}>
          {isMember ? "Not a member yet?" : "Already a member?"}
          <Link to="/Teacupdesign/register" style={{ color: "#008000", textDecoration: "none" }}>
            <button type="button" style={{ backgroundColor: "#008000", color: "#f3b058", border: "none", padding: "5px", marginLeft: "5px", cursor: "pointer" }}>
              {isMember ? "Register" : "Login"}
            </button>
          </Link>
        </p>
      </form>
    </section>
  );
};
