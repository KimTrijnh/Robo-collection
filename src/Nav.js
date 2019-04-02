import React from "react";
import {Navbar, Form, FormControl, Button} from 'react-bootstrap'
import{Link} from 'react-router-dom'

export default class Nav extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className="mr-auto">
            <Link to="/" >Home</Link>
            <Link to="/Edit">Edit</Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
      </Navbar>
    );
  }
}
