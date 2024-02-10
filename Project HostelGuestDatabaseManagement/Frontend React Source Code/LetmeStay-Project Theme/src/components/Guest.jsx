import Table from 'react-bootstrap/Table';


import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import GuestServices from '../services/GuestServices';


function Guest() {
    
    
    const [guest, setGuest] = useState([]);
    const navigate = useNavigate();

    // const baseURL = "http://localhost:3000";

    const setGuestData = () => {
        // axios.get(baseURL + "/guests")
        GuestServices.getGuest()
            .then((response) => {
                setGuest(response.data);
                console.log(response.data);
            }).catch(error => {
                alert("Error Ocurred while loading data:" + error);
            });
    }


    useEffect(() => {
        setGuestData();
    }, []);


    const removeGuest = (id) => {
        // console.log(id);
        // axios.delete(baseURL + "/guests/" +id)
        let isConfirm = window.confirm("Are you sure?");
        if (isConfirm) {
            GuestServices.deleteGuest(id)
                .then((response) => {

                    alert("Guest removed");
                    setGuestData();

                }).catch(error => {
                    alert("error===" + error);
                });
        }

    }



    return (
        <div>
            <div className='d-flex flex-row justify-content-end'><button className='btn btn-danger m-2' onClick={()=>navigate("/")}>Log Out</button></div>
            <div><h1 className='d-flex flex-row justify-content-center mt-4'>List of Guests</h1></div>
            
            

            <div className='d-flex flex-row justify-content-end me-5'><button className='btn btn-success' onClick={() => navigate("/add")}>Add +</button></div>

            <Table className='table table-striped'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>FullName</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Phone</th>
                        <th>Actions</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        guest &&
                        guest.map((guest, index) => (
                            <tr key={guest.index}>
                                <td>{index + 1}</td>
                                <td>{guest.fullname}</td>
                                <td>{guest.email}</td>
                                <td>{guest.username}</td>
                                <td>{guest.phone}</td>


                                <td>
                                    {/* <button className='btn btn-info me-2'>Details</button> */}
                                    <button className='btn btn-primary me-2' onClick={() => navigate("/edit/" + guest.id)}>Update</button>


                                    <button
                                        onClick={() => removeGuest(guest.id)} className="btn btn-danger">Delete
                                    </button>

                                </td>

                            </tr>
                        ))
                    }

                </tbody>
            </Table>




        </div>

    );

    
        
    


}




export default Guest;