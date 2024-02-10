import React from 'react';
import vinod from "./mystyle.module.css";
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';



export const Register = () => {
     let userEnteredUsername;
     let userEnteredPassword;
     const navigate=useNavigate();


  const usernameHandler = (e) => {
    userEnteredUsername = e.target.value;
  }

  const passwordHandler = (e) => {
    userEnteredPassword = e.target.value;
  }


  const handleSubmit = () => {
    if (userEnteredUsername === "admin" && userEnteredPassword === "password") {
         navigate("/guests");  
    }
  }

  return (
    <>
      <div className={vinod.registerPageImg}>

        <div className={vinod.regForm}>

          <Alert variant='primary'>
            <Container>
              <Form onSubmit={handleSubmit}>
                <h1 style={{ "text-align": "center" }}>Guest, Welcome</h1>
                <h2 style={{ "text-align": "center" }}>Please Login</h2>
                <Form.Group controlId="form.Name" >
                  <Form.Label>UserName</Form.Label>
                  <Form.Control type="text" placeholder="Enter UserName" onChange={usernameHandler} required />
                </Form.Group>

                <Form.Group controlId="form.Email">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter Password" onChange={passwordHandler} required />
                </Form.Group>

                <Button className='btn btn-primary mt-3 mb-3'>Login</Button>
                <p>Don't you have Account? <a href=''>Register</a> here </p>
              </Form>

            </Container>
          </Alert>
        </div>
      </div>

    </>

  )
}
