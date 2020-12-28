import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Login = () => {

  return (
    <Form className='p-4'>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Button variant="primary" type="submit" className='mx-4'>
        Sign up
      </Button>
    </Form>
  );
};

export default Login;
