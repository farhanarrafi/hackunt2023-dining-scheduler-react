// src/components/LoginPage.js
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import axios from 'axios';
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let navigate = useNavigate();

    const handleLogin = () => {
        // In a real application, you would perform authentication here
        // For simplicity, let's just check if both username and password are non-empty
        if (username && password) {
            try {
                const response = axios.post('YOUR_SERVER_LOGIN_ENDPOINT', {
                    username,
                    password,
                });

                // Assuming your server responds with a success message
                if (response.data.success) {
                    // Handle successful login, e.g., redirect to a new page
                    console.log('Login successful!');
                    setLoggedIn(true);
                    alert('Login successful!');
                    navigate("/home");

                } else {
                    // Handle server response indicating login failure
                    alert('Invalid username or password');
                }
            } catch (error) {
                // Handle any errors during the HTTP request
                console.error('Error during login:', error);
                alert('An error occurred during login');
            }
        } else {
            alert('Please enter both username and password.');
        }
    };

    return (
        <Container className="p-3">
            <Container className="p-5 mb-4 bg-light rounded-3">
                <h1 className="header">Please login to use Application</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formUserName">
                        <Form.Label>Student ID</Form.Label>
                        <Form.Control type="text" placeholder="Enter student ID" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={handleLogin}>
                        Submit
                    </Button>
                </Form>
            </Container>
        </Container>
    );
}

export default LoginPage;
