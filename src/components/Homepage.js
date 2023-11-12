// src/components/LoginPage.js
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const HomePage = () => {

    const [mealPlanConfirmed, setmealPlanConfirmed] = useState(false);

    function handleClick() {
        alert('You clicked me!');
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Card style={{ width: '20rem' }} onClick={handleClick}>
                        <Card.Body>
                            <Card.Title>College Dining</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Dining Scheduler</Card.Subtitle>
                            <Card.Text>
                                You can set a dining plan from this option.
                            </Card.Text>

                            <Button variant="primary">Select Meal</Button>{'  '}
                            <Button variant="danger">Delete Meal</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '20rem' }}>
                        <Card.Body>
                            <Card.Title>College Transport</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Check transport options near college.</Card.Subtitle>
                            <Card.Text>
                                You can check available transport options around the campus.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default HomePage;
