import React from "react";
import { Navbar, Container, Form, Button } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#" className="text-dark">Logo</Navbar.Brand>
        <Button variant="primary">Login</Button>
      </Container>
    </Navbar>
  );
};

export default Header;