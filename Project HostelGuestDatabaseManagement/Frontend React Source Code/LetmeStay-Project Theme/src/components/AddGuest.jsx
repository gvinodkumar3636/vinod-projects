import { Form, Button, Container, Alert } from 'react-bootstrap';
import React, { useState } from 'react';
// import axios from 'axios';
import { useNavigate } from "react-router-dom";


import GuestServices from '../services/GuestServices';



function AddGuest() {

    const [fullname, setGuestName] = useState('');
    const [email, setGuestEmail] = useState('');
    const [username, setGuestUsername] = useState('');
    const [phone, setGuestPhone] = useState('');

    // const baseURL = "http://localhost:3000/guests";

    const navigate = useNavigate();

    const guestNameChangeHandler = (event) => {

        setGuestName(event.target.value);
        console.log(event.target.value);
    };

    const guestMailChangeHandler = (event) => {
        setGuestEmail(event.target.value);
        console.log(event.target.value);
    };
    const guestPhoneChangeHandler = (event) => {

        setGuestPhone(event.target.value);
        console.log(event.target.value);
    };

    const guestUsernameChangeHandler = (event) => {
        setGuestUsername(event.target.value);
        console.log(event.target.value);
    };

    const submitActionHandler = (event) => {
        event.preventDefault();

        //  console.log("clicked")

        //  axios.post(baseURL, {
        //     name: studentName,
        //     role: studentRole
        //   })

        //     .then((response) => {
        //       alert("Student " + studentName + " added!");
        //       navigate("/");
        //     }).catch(error => {
        //       alert("error===" + error);
        //     });

        GuestServices.createGuest({ fullname: fullname, email: email, username:username, phone:phone})
        .then((response) => {
            alert("Guest: " + fullname + " added!");
            console.log(response)
            navigate("/guests");
        }).catch(error => {
            alert("error===" + error);
        });


    };


    return (
        <div>
        <Alert variant='primary'>
            <Container>
                <Form onSubmit={submitActionHandler}>

                    <Form.Group controlId="form.Name" >
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Full Name" onChange={guestNameChangeHandler} required />
                    </Form.Group>

                    <Form.Group controlId="form.Email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" onChange={guestMailChangeHandler} required />
                    </Form.Group>

                    <Form.Group controlId="form.Username" >
                        <Form.Label>UserName</Form.Label>
                        <Form.Control type="text" placeholder="Enter UserName" onChange={guestUsernameChangeHandler} required />
                    </Form.Group>

                    <Form.Group controlId="form.Phone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="tel" pattern="[789][0-9]{9}" placeholder="Enter Contact Number" onChange={guestPhoneChangeHandler} required />
                    </Form.Group>

                    <br></br>
                    <Button type='submit'>Add Guest</Button>
                    &nbsp;&nbsp;&nbsp;
                    <Button type='submit' className='btn btn-danger'  onClick={()=>navigate("/guests")}>Cancel</Button>
                </Form>

            </Container>
        </Alert></div>



    );



}
export default AddGuest;