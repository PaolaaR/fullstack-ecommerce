import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'

import {UserContext} from '../context/User/UserContext'


export const Login = () => {

  const userCtx = useContext(UserContext)

  const { 
      loginUser      
  } = userCtx

  const [data, setData] = useState({
      name: "",
      password: ""
  })

  const handleChange = (event) => {

    setData({
        ...data,
        [event.target.name]: event.target.value
    })
    

}

  const sendData = (event) => {
      
      event.preventDefault()

      return loginUser(data)

  }

  return (
    <div className="bg-orange-500 flex flex-col justify-center items-center min-h-screen">
     

      <div style={{ maxWidth: '400px', margin: 'auto', marginTop: '50px' }}>
        <div>
          <form
            style={{
              backgroundColor: '#f3b058',
              padding: '20px',
              borderRadius: '10px',
            }}
            onSubmit={(e) => { sendData(e) }}
          >
            
            <div style={{ marginBottom: '15px' }}>
              <h3 style={{ color: '#008000', textAlign: 'center' }}>Login</h3>
              <label htmlFor="name" style={{ color: '#008000' }}>
                Name
              </label>
              <div className="mt-1">
                <input 
                  id="name" 
                  name="name" 
                  type="name" 
                  onChange={(e) => { handleChange(e) }}
                  required 
                  style={{ width: '100%', padding: '5px' }}
                />
              </div>
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="password" style={{ color: '#008000' }}>
                Password
              </label>
              <div className="mt-1">
                <input 
                  id="password" 
                  name="password" 
                  type="password"
                  required 
                  onChange={(e) => { handleChange(e) }}
                  style={{ width: '100%', padding: '5px' }}
                />
              </div>
            </div>
            <div className="w-full sm:w-full sm:max-w-md">
        <p className="mt-2 text-center text-sm text-gray-600 text-white">
          Not an account yet? &nbsp;
          <Link to="/teacupdesign/register">
            <a className="font-medium text-yellow-500 hover:text-yellow-300">
              Register here.
            </a>
          </Link>
        </p>
      </div>
            <div>
              <button type="submit"  style={{
            backgroundColor: '#008000',
            color: '#f3b058',
            padding: '10px',
            borderRadius: '5px',
            cursor: 'pointer',
          }}>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
