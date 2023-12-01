import React, { useState, useEffect, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { UserContext } from '../context/User/UserContext';

export const Profile = () => {
  const ctx = useContext(UserContext);

  const { userSubmitForm, user } = ctx; 
  const [userForm, setUserForm] = useState({
    name: '',
    lastname: '',
    country: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
    email: user ? user.email : '', 
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
  }, [user, userForm]);

  return (
    <div style={{ backgroundColor: 'gray',maxWidth: '900px', margin: 'auto', marginTop: '50px', color:'black', border: 'solid 15px orange'}}>
      <Form onSubmit={sendData}>
    <Form.Group className="mb-3" >
      <Form.Label>Name</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter name"
        name="name"
        value={userForm.name}
        onChange={handleChange}
      />
    </Form.Group>

    <Form.Group className="mb-3" >
      <Form.Label>Lastname</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter lastname"
        name="lastname"
        value={userForm.lastname}
        onChange={handleChange}
      />
    </Form.Group>

    <Form.Group className="mb-3" >
      <Form.Label>Country</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter country"
        name="country"
        value={userForm.country}
        onChange={handleChange}
      />
    </Form.Group>

    <Form.Group className="mb-3" >
      <Form.Label>Address</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter address"
        name="address"
        value={userForm.address}
        onChange={handleChange}
      />
    </Form.Group>

    <Form.Group className="mb-3" >
      <Form.Label>City</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter city"
        name="city"
        value={userForm.city}
        onChange={handleChange}
      />
    </Form.Group>

    <Form.Group className="mb-3" >
      <Form.Label>State</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter state"
        name="state"
        value={userForm.state}
        onChange={handleChange}
      />
    </Form.Group>

    <Form.Group className="mb-3" >
      <Form.Label>Zipcode</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter zipcode"
        name="zipcode"
        value={userForm.zipcode}
        onChange={handleChange}
      />

      <Form.Group className="mb-3" >
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          value={userForm.email}
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="warning" type="submit">
        Submit
      </Button>
    </Form.Group>
      </Form>
    </div>
  );
};
    