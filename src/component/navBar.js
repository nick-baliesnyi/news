import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <Navbar bg="light" className="shadow-sm">
      <Navbar.Brand>
        <img
          src="https://img.icons8.com/cute-clipart/64/000000/news.png"
          width="30px"
        />
        Site name
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto text-primary">
          <Nav.Link>
            <Link to={"/"}>News</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to={"/graphic"}>Graphic</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to={"/login"}>Login</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
