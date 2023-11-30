import React, { useState, useEffect, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { UserContext } from '../context/User/UserContext';

export const Profile = () => {
  const ctx = useContext(UserContext)

  const { userSubmitForm } = ctx

  const {
      name,
      email,
      lastname,
      country,
      address,
      city,
      state,
      zipcode
  } = ctx.user

  const [userForm, setUserForm] = useState({
      name: "",
      lastname: "",
      country: "",
      address: "",
      city: "",
      state: "",
      zipcode: "",
      email
  })

  let countries = [
      "-----",
      "México",
      "Colombia",
      "Perú",
      "Chile",
      "Otro país..."
  ]

  const handleChange = async (event) => {

      setUserForm({
          ...userForm,
          [event.target.name]: event.target.value
      })

  }

  const sendData = (event) => {

      event.preventDefault()

      userSubmitForm(userForm)

  }

  useEffect(() => {

      const updateData = () => {

          return setUserForm({
              ...userForm,
              name,
              lastname,
              country,
              address,
              city,
              state,
              zipcode
          })

      }

      updateData()

  }, [])



    return (
        <main className="mt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative">
                    <div className="h-1/2 bg-gray-100"></div>
                    <div>
                        <Form onSubmit={(e) => sendData(e)}>
                            <Form.Group controlId="formName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Name"
                                    name="name"
                                    value={userForm.name}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="formLastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Last Name"
                                    name="lastname"
                                    value={userForm.lastname}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="formEmail">
                                <Form.Label>E-mail</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="email"
                                    name="email"
                                    value={userForm.email}
                                    readOnly
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Save Changes
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Profile;