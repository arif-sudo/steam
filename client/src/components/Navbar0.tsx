import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useEffect, useRef } from 'react'
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import { setMode } from '../slice';
import { setNav } from '../slice';

import { useAppDispatch } from '../store';
import { useAppSelector } from '../store';

const Navbar0 = () => {
  const dispatch = useAppDispatch()

  // const state = useAppSelector(state => state.auth)
  const {mode} = useAppSelector(state => state.auth)
  const {nav} = useAppSelector(state => state.auth)
  const navInput = useRef<HTMLElement>(null)


  useEffect(() => {
    const root:any = document.querySelector('#root')
    if (root) root.className = mode

    if (navInput){ 
      navInput.current?.setAttribute('id', nav)
    }
  }, [mode, nav])

  return (
    <Navbar collapseOnSelect expand="lg" variant='dark' id='nav' ref={navInput} >
      {/* bg="dark" !??!*/}
      <Container>
        <NavLink to='/'><Navbar.Brand style={{color: "#FFFFFF8C"}} className='d-flex align-items-center '><i className="fa-brands fa-steam mx-1 fs-3"></i>Steam</Navbar.Brand></NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Store</Nav.Link>
            <Nav.Link ><NavLink to="/products">Products</NavLink></Nav.Link>
            <Nav.Link ><NavLink to="/about">About</NavLink></Nav.Link>
            <Nav.Link ><NavLink to="/cart">Cart</NavLink></Nav.Link>
            <Nav.Link >Chat</Nav.Link>
            <Nav.Link ><NavLink to="/support">Support</NavLink></Nav.Link>
          </Nav>
          <Nav>
            
            {/* light changer */}
            <Nav.Link className="btnmode"> 
              <Button onClick={() => {
                dispatch(setMode()) 
                dispatch(setNav()) 
              }} id='mode' >{mode === "light" ? <i className="fa-solid fa-moon"></i>: <i className="fa-solid fa-sun"></i>}</Button>

            </Nav.Link>
            
            {/* language changer  */}
            <NavDropdown id="globe" title={<i className="fa-solid fa-globe"></i>} >
              <NavDropdown.Item id="item1"> AZ</NavDropdown.Item>
              <NavDropdown.Item>EN</NavDropdown.Item>
            </NavDropdown>


            <Nav.Link id='profile' >
              <p>Arif<span id="profile-img"></span></p>
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >

  )
}

export default Navbar0