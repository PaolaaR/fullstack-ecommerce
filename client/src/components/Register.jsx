
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from './../context/User/UserContext';


export const Register = () => {
  const userCtx = useContext(UserContext);
  const { registerUser } = userCtx;

  const navigate = useNavigate(); 

  const [data, setdata] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (event) => {

    event.preventDefault()


    setdata({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const sendData = async (event) => {

    event.preventDefault();

    await registerUser(data);
    navigate('/fullstack-ecommerce/profile'); // Redirect after registration
  };

  return (
    <section style={{ maxWidth: '400px', margin: 'auto', marginTop: '50px' }}>
      <form
        onSubmit={sendData}
        style={{
          backgroundColor: '#f3b058',
          padding: '20px',
          borderRadius: '10px',
        }}
      >
        <h3 style={{ color: '#008000', textAlign: 'center' }}>Register</h3>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="name" style={{ color: '#008000' }}>
            User Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={data.name}
            onChange={handleChange}
            style={{ width: '100%', padding: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email" style={{ color: '#008000' }}>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={data.email}
            onChange={handleChange}
            style={{ width: '100%', padding: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="password" style={{ color: '#008000' }}>
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={data.password}
            onChange={handleChange}
            style={{ width: '100%', padding: '5px' }}
          />
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: '#008000',
            color: '#f3b058',
            padding: '10px',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Register
        </button>
      </form>
    </section>
  );
};







