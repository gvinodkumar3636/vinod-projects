import { Form, Button, Container } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

import { useNavigate, useParams } from "react-router-dom";
import GuestServices from '../services/GuestServices';

function UpdateGuest() {
    const [fullname, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');

    // Get the Guest ID from the URL params
    const { id } = useParams();
    // const baseURL = "http://localhost:3000/guests";
    const baseURL = "http://localhost:8080/api/v1/Guestlist"

    const navigate = useNavigate();

    const fetchDetails = () => {


        // Fetch the Guest data based on the ID when the component mounts
        GuestServices.getGuestById(id)
            .then(response => {
                const fData = response.data;
                setName(fData.fullname);
                setEmail(fData.email);
                setUsername(fData.username);
                setPhone(fData.phone);
            })
            .catch(error => {
                console.error("Error fetching Guest data:", error);
            });
    }



    const guestNameChangeHandler = (event) => {
        setName(event.target.value);
    };

    const guestEmailChangeHandler = (event) => {
        setEmail(event.target.value);
    };

    const guestUsernameChangeHandler = (event) => {
        setUsername(event.target.value);
    };

    const guestPhoneChangeHandler = (event) => {
        setPhone(event.target.value);
    };

    const submitActionHandler = (event) => {
        event.preventDefault();

        GuestServices.editGuest(id, {
            fullname: fullname,
            email: email,
            username: username,
            phone: phone
        })
            .then(() => {
                alert("Guest: " + username + " updated!");
                navigate("/guests");
            })
            .catch(error => {
                alert("Error updating Guest: " + error);
            });
    }
    useEffect(() => {
        if (id)
            fetchDetails(id);
    }, [id]);

    return (
        <Container>
            <Form onSubmit={submitActionHandler}>
                <Form.Group controlId="form.name" >
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" value={fullname} onChange={guestNameChangeHandler} required />
                </Form.Group>
                <Form.Group controlId="form.mail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={email} onChange={guestEmailChangeHandler} required />
                </Form.Group>
                <Form.Group controlId="form.username" >
                    <Form.Label>UserName</Form.Label>
                    <Form.Control type="text" value={username} onChange={guestUsernameChangeHandler} required />
                </Form.Group>
                <Form.Group controlId="form.phone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="tel" pattern="[789][0-9]{9}" value={phone} onChange={guestPhoneChangeHandler} required />
                </Form.Group>
                <br />
                <Button type='submit'>Update</Button>
                &nbsp;&nbsp;&nbsp;
                <Button type='button' className='btn btn-danger' onClick={() => navigate("/guests")}>Cancel</Button>
            </Form>
        </Container>
    );
}

export default UpdateGuest;