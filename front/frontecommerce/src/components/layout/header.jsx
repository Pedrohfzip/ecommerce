import React from "react";
import { Navbar, Container, Form, Button } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#" className="text-dark">Logo</Navbar.Brand>
        <Form className="d-flex mx-auto" style={{ flex: 1, maxWidth: "600px" }}>
          <Form.Control
            type="search"
            placeholder="Pesquisar..."
            className="me-2"
            aria-label="Search"
          />
        </Form>
        <Button variant="primary">Login</Button>
      </Container>
    </Navbar>
  );
};

export default Header;