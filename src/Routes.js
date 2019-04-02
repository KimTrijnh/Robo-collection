import React from 'react'
import {Route, Switch, BrowserRouter as Router, NavLink} from 'react-router-dom'
import App from './App'
import View from './View'
import Notfound from './Notfound'
import Add from './Add'
import Edit from './Edit'
import {Navbar, Form, FormControl, Button, Nav} from 'react-bootstrap'

// import Nav from './Nav'

 const Routes = () => {
    return (
        <Router>
       <Navbar bg="light" expand="lg">
       <div className="container">
        <Navbar.Brand href="#home"><img src="/img/Wall-E-icon.png" width="40px" alt="walle"/></Navbar.Brand>
          <Nav className="mr-auto">
            <NavLink className="mx-2 px-3" to="/"  
            activeStyle={{fontWeight: "bold", color: "blue" }}>Home</NavLink>
            <NavLink className="mx-2 px-3" to="/Add" 
            activeStyle={{fontWeight: "bold", color: "blue" }}>Add</NavLink>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
          </div>
      </Navbar>
      
        <Switch>
            <Route exact path="/" component={App} />
            <Route path='/view/candidate/:id' component={View} />
            <Route path='/Add' component={Add} />
            <Route path='/Edit/:id' component={Edit} />
            <Route component={Notfound} />
        </Switch>  
        </Router>
       
    )
}

export default Routes;