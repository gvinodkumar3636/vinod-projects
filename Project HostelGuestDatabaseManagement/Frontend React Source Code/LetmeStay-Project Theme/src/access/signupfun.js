import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Alert } from 'react-bootstrap';
import vinod from '../components/mystyle.module.css'

const SignUpf = () => {
    // const baseUrl="http://localhost:8080/api/v1/All_Student"; // Assuming your users are stored at this endpoint
    const baseUrl = "http://localhost:3000/credentials"
    const navigate = useNavigate();


    const [enteredUserName, setenteredUserName] = useState('');
    const [enteredPassword, setenteredPassword] = useState('');
    const [enteredId, setenteredId] = useState('');
    const [enteredrole, setenteredrole] = useState('');

    const UserNameHandler = (event) => {
        setenteredUserName(event.target.value);
    }
    const PasswordHandler = (event) => {
        setenteredPassword(event.target.value);
    }
    const IDHandler = (event) => {
        setenteredId(event.target.value);
    }
    const designationHandler = (event) => {
        setenteredrole(event.target.value);
    }

    const formActionhandler = (event) => {
        event.preventDefault();
        console.log(enteredUserName);
        console.log(enteredPassword);
        axios.post(baseUrl, {
            username: enteredUserName,
            password: enteredPassword,
            employeeid: enteredId,
            role: enteredrole
        }).then((response) => {
            alert("successfully Registered " + enteredUserName);
            navigate("/");//if login successfully it will navigate to login form
            console.log(response)
        }).catch(error => {
            alert("error===>" + error)
        })
    }
    return (
        
        <div className={vinod.registerPageImg}>

            <div className={vinod.regForm}>

                <Alert variant='primary'>
                    <Container>
                        <Form onSubmit={formActionhandler}>
                            <h1 style={{ "text-align": "center" }}>Guest, Welcome</h1>
                            <h2 style={{ "text-align": "center" }}>Please Register Here</h2>

                            <Form.Group controlId="form.Empid">
                                <Form.Label>Employee ID</Form.Label>
                                <Form.Control type="text" placeholder="Employee ID" value={enteredId} onChange={IDHandler} required />
                            </Form.Group>

                            <Form.Group controlId="form.Designation">
                                <Form.Label>Designation</Form.Label>
                                <Form.Control type="text" placeholder="Enter Designation" value={enteredrole} onChange={designationHandler} required />
                            </Form.Group>

                            <Form.Group controlId="form.UserName" >
                                <Form.Label>UserName</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" value={enteredUserName} onChange={UserNameHandler} required />
                            </Form.Group>

                            <Form.Group controlId="form.Password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter Password" value={enteredPassword} onChange={PasswordHandler} required />
                            </Form.Group>



                            <Button className='btn btn-primary mt-3 mb-3 me-3' type="submit">Register</Button>
                            <Button className='btn btn-danger mt-3 mb-3' onClick={() => navigate("/")}>Cancel</Button>

                        </Form>

                    </Container>
                </Alert>
            </div>
        </div>


    )
}

export default SignUpf;