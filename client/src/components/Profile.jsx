import React, { useState, useEffect, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { UserContext } from '../context/User/UserContext';

export const Profile = () => {
  const ctx = useContext(UserContext);

  const { userSubmitForm, user } = ctx; // Renombré user para evitar conflictos con el destructuring anterior

  const [userForm, setUserForm] = useState({
    name: '',
    lastname: '',
    country: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
    email: user ? user.email : '', // Verifica si user está definido antes de acceder a user.email
  });

  const handleChange = async (event) => {
    setUserForm({
      ...userForm,
      [event.target.name]: event.target.value,
    });
  };

  const sendData = (event) => {
    event.preventDefault();
    userSubmitForm(userForm);
  };

  useEffect(() => {
    const updateData = () => {
      if (user) {
        setUserForm({
          ...userForm,
          name: user.name,
          lastname: user.lastname,
          country: user.country,
          address: user.address,
          city: user.city,
          state: user.state,
          zipcode: user.zipcode,
        });
      }
    };

    updateData();
  }, [user, userForm]); // Añadí user y userForm como dependencias para evitar advertencias de useEffect

  return (
    <main className="mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="h-1/2 bg-gray-100"></div>
          <div>
            <Form onSubmit={sendData}>
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
                                    onChange={handleChange}
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
}