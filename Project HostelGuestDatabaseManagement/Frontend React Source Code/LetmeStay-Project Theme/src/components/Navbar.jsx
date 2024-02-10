import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Guest from './Guest';
import AddGuest from './AddGuest';
import UpdateGuest from './UpdateGuest';
import Loginf from '../access/login-funct';
import SignUpf from '../access/signupfun';



const Navbar1 = () => {
  
  return (
    <div>

      <BrowserRouter>
        <Navbar sticky="top" expand="lg" className="bg-primary">
          <Container>
            <Navbar.Brand href="#home" className='text-white'>LetMeStay</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/guests" className='text-white'>Guests</Nav.Link>
                <Nav.Link href="/add" className='text-white'>AddGuest</Nav.Link>


              </Nav>
            </Navbar.Collapse>
            
          </Container>
        </Navbar>

        <Routes>
          <Route path='/register' element={<SignUpf />}></Route>
          <Route path='/' element={<Loginf />}></Route>
          <Route path='/guests' element={<Guest />}></Route>
          <Route path='/add' element={<AddGuest />}></Route>
          <Route path='/edit/:id' element={<UpdateGuest />}></Route>
        </Routes>

      </BrowserRouter >

    </div >
  )
}

export default Navbar1