import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "./Navbar.css";

function Productlist(props) {
  return (
    <div className='menu-nav'>
      <Nav.Link href='#features'>{props.list}</Nav.Link>
    </div>
  );
}

function NavbarCollapss() {
  return (
    <>
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>Apple</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Productlist list='ร้าน' />
              <Productlist list='Mac' />
              <Productlist list='iPad' />
              <Productlist list='iPhone' />
              <Productlist list='Watch' />
              <Productlist list='AirPods' />
              <Productlist list='Tvและบ้าน' />
              <Productlist list='ความบันเทิง' />
              <Productlist list='อุปกรณ์เสริม' />
              <Productlist list='บริการช่วยเหลือ' />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarCollapss;
