import React from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
function Login() {
return (
<Container>
<Row>
<Col md={7}>
<div> 
<h1> Login </h1>
  <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Login </Button>
      <div className="py-4"> 
      <p> Don't Have an Account?<Link to="/signup"> Signup </Link></p>
      </div>
  </Form>
</div>
</Col>


<Col md={5} className="login__bg--container"></Col>
</Row>
</Container>
)
}

export default Login;
