import './App.css';
import LoginPage from './components/LoginPage';
import HomePage from './components/Homepage';
import DiningPage from './components/DiningPage';
import Confirmpage from './components/Confirmpage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {useState} from "react";

function App() {

    const [loggedIn, setLoggedIn] = useState(true);

    return(
        <Router>
            <div>
                <Navbar bg="light" data-bs-theme="light">
                    <Container>
                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link href="/dining">Dining Menu</Nav.Link>
                            <Nav.Link href="/confirm">Confirmation Page</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                <hr />
                <Routes>
                    <Route path="/" exact element={<HomePage/>} />
                    <Route path="/login" element={<LoginPage/>} />
                    <Route path="/dining" element={<DiningPage/>} />
                    <Route path="/confirm" element={<Confirmpage/>} />
                </Routes>
            </div>
        </Router>
    );

}

export default App;
