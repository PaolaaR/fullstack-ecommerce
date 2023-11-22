import React, { useState, useEffect, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import {UserContext} from '../context/User/UserContext';

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
        email: user.email,
    });

    useEffect(() => {
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
    }, [user]);

    const handleChange = (event) => {
        setUserForm({
            ...userForm,
            [event.target.name]: event.target.value,
        });
    };

    const sendData = (event) => {
        event.preventDefault();
        userSubmitForm(userForm);
    };

    return (
        <main className="mt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative">
                    <div className="h-1/2 bg-gray-100"></div>
                    <div>
                        <Form onSubmit={sendData}>
                            <Form.Group controlId="formName">
                                <Form.Label>Tu nombre</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Nombre"
                                    name="name"
                                    value={userForm.name}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="formLastName">
                                <Form.Label>Tus apellidos</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Apellidos"
                                    name="lastname"
                                    value={userForm.lastname}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="formEmail">
                                <Form.Label>Tu correo</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Correo electrónico"
                                    name="email"
                                    value={userForm.email}
                                    readOnly
                                />
                            </Form.Group>

                            {/* Agrega más campos según sea necesario */}

                            <Button variant="primary" type="submit">
                                Guardar cambios
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Profile;