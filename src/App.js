import './App.css';
import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';


import Contact from './pages/Contact';
import Home from './pages/Home';
import Reference from './pages/Reference';
import About from './pages/About';
import Result from './pages/Result';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
          <Navbar.Brand as={Link} to="/">PNV</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to='/about'>About</Nav.Link>
              <Nav.Link as={Link} to='/reference'>Reference</Nav.Link>
              <Nav.Link as={Link} to='/contact' >Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/about' component={About}/>
          <Route path='/reference' component={Reference}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/result' render={(props) => <Result {...props}/>}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
