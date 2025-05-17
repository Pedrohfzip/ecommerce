import React from "react";
import { Navbar, Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#" className="text-dark">Logo</Navbar.Brand>
        <Button variant="primary" onClick={() => navigate('/login')} >Login</Button>
      </Container>
    </Navbar>
  );
};

export default Header;