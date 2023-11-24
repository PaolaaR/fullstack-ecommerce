import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
 
 
export const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [messageError, setMessageError] = useState('');
 
  const handleReset = () => {
    setName('');
    setEmail('');
    setMessage('');
    setEmailError('');
    setNameError('');
    setMessageError('');
  };
 
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
 
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      valid = false;
    } else {
      setEmailError('');
    }
 
    if (name.trim() === '') {
      setNameError('Please enter your name');
      valid = false;
    } else {
      setNameError('');
    }
 
    if (message.trim() === '') {
      setMessageError('Please enter a message');
      valid = false;
    } else {
      setMessageError('');
    }
 
    if (valid) {
      console.log('send');
      handleReset();
    }
  };
 
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#333' }}>
      <div style={{ width: '450px', backgroundColor: '#444', padding: '20px', display: 'flex', flexDirection: 'column' }}>
        <h1 style={{ color: '#fff' } }> Contact Form </h1>
        <Form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label style={{ color: '#fff' }}>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
            {nameError && <Form.Text style={{ color: 'red' }}>{nameError}</Form.Text>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label style={{ color: '#fff' }}>E-mail</Form.Label>
            <Form.Control type="email" placeholder="Enter your e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
            {emailError && <Form.Text style={{ color: 'red' }}>{emailError}</Form.Text>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label style={{ color: '#fff' }}>Message</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Enter your message" value={message} onChange={(e) => setMessage(e.target.value)} />
            {messageError && <Form.Text style={{ color: 'red' }}>{messageError}</Form.Text>}
          </Form.Group>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button type="submit" className="btn btn-primary">Send</button>
            <button type="button" className="btn btn-danger" onClick={handleReset}>Delete</button>
          </div>
        </Form>
      </div>
    </div>
  );
}