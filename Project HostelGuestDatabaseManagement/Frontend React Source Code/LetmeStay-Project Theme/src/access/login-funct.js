import { useState } from "react";
import axios from "axios";
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import vinod from '../components/mystyle.module.css'

const Loginf = () => {
  // const baseUrl = "http://localhost:8080/api/v1/All_Student"; // Assuming your users are stored at this endpoint
  const baseUrl = "http://localhost:3000/credentials"
  const navigate = useNavigate();

  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');


  const submitActionHandler = (event) => {
    event.preventDefault();


    axios.get(baseUrl)
      .then((response) => {
        // Check if the entered username and password match any user in the response data
        const user = response.data.find((user) => user.username === enteredUserName && user.password === enteredPassword);

        if (user) {

          // Redirect to the desired route after successful login
          navigate("/guests");
          alert("Login success " + enteredUserName);
        } else {
          alert('Login failed. Please check your username and password.');
          console.log("error");
        }
      })
      .catch(error => {
        console.log("Error: ", error);
      });

  };

  return (

    <div className={vinod.registerPageImg}>

      <div className={vinod.regForm}>

        <Alert variant='primary'>
          <Container>
            <Form onSubmit={submitActionHandler}>
              <h1 style={{ "text-align": "center" }}>Guest, Welcome</h1>
              <h2 style={{ "text-align": "center" }}>Please Login</h2>
              <Form.Group controlId="form.Name" >
                <Form.Label>UserName</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" value={enteredUserName} onChange={(e) => setEnteredUserName(e.target.value)} required />
              </Form.Group>

              <Form.Group controlId="form.Email">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter Password" value={enteredPassword} onChange={(e) => setEnteredPassword(e.target.value)} required />
              </Form.Group>

              <Button className='btn btn-primary mt-3 mb-3' type="submit">Login</Button>
              <p>Don't you have Account? <span style={{ color: "blue" }} onClick={() => navigate("/register")}>Register</span> here </p>
            </Form>

          </Container>
        </Alert>


      </div>
    </div>
  )
}

export default Loginf;