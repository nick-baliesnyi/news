import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = (props) => {
  return (
    <Navbar bg="light" className="shadow-sm">
      <Navbar.Brand href="/">
          <img src='https://img.icons8.com/cute-clipart/64/000000/news.png' width="30px"/>
          Парсер ВІКНУ 
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Стрічка новин</Nav.Link>
          <Nav.Link href="/graphic">Статистика</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
