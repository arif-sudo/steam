import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useEffect, useRef } from 'react'
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import { setMode, setNav, setLang } from '../slice';

import { useAppDispatch } from '../store';
import { useAppSelector } from '../store';

import { useCart } from 'react-use-cart';


const Navbar0 = () => {
  const { lang } = useAppSelector(state => state.auth)
  const { mode } = useAppSelector(state => state.auth)
  const { nav } = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()

  const navInput = useRef<HTMLElement>(null)
  const { totalItems } = useCart();

  const t = lang === 'en';


  useEffect(() => {
    const root: any = document.querySelector('#root')
    if (root) root.className = mode

    if (navInput) {
      navInput.current?.setAttribute('id', nav)
    }
  }, [mode, nav])



  return (
    <Navbar collapseOnSelect expand="lg" variant='dark' id='nav' ref={navInput} >
      <Container>
        <NavLink to='/'><Navbar.Brand style={{ color: "#FFFFFF8C" }} className='d-flex align-items-center '><i className="fa-brands fa-steam mx-1 fs-3"></i>Steam</Navbar.Brand></NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">{t ? "Store" : "Mağaza" }</Nav.Link>
            <Nav.Link ><NavLink to="/games">{t ? "Games" : "Oyunlar" }</NavLink></Nav.Link>
            <Nav.Link ><NavLink to="/about">{t ? "About" : "Haqqında" }</NavLink></Nav.Link>
            <Nav.Link >{t ? "Chat" : "Söhbət" }</Nav.Link>
            <Nav.Link ><NavLink to="/admin">Admin</NavLink></Nav.Link>
            <Nav.Link ><NavLink to="/support">{t ? "Support" : "Dəstək" }</NavLink></Nav.Link>
          </Nav>
          <Nav>

            {/* light changer */}
            <Nav.Link className="btnmode">
              <Button onClick={() => {
                dispatch(setMode())
                dispatch(setNav())
              }} id='mode' >{mode === "light" ? <i className="fa-solid fa-moon"></i> : <i className="fa-solid fa-sun"></i>}</Button>

            </Nav.Link>

            {/* language changer  */}
            <NavDropdown id="globe" title={<i className="fa-solid fa-globe"></i>} >
              <NavDropdown.Item onClick={() => dispatch(setLang('az'))} >AZ</NavDropdown.Item>
              <NavDropdown.Item onClick={() => dispatch(setLang('en'))} >EN</NavDropdown.Item>
            </NavDropdown>


            <Nav.Link id='profile' >
              <NavLink to="/cart"><i id="cart-icon" className="fa-solid fa-cart-shopping"></i><span>{totalItems}</span></NavLink>
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >

  )
}

export default Navbar0