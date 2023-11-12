// src/components/LoginPage.js
import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/Col";
import {Dropdown} from "react-bootstrap";
import Card from "react-bootstrap/Card";

import axios from 'axios';
import { useNavigate } from "react-router-dom";


const DiningPage = () => {

    const [selectedTime, setSelectedTime] = useState('');
    const [selectedTable, setSelectedTable] = useState('');
    const [selectedMealType, setSelectedMealType] = useState('');
    const [selectedMeal, setSelectedMeal] = useState('');

    const [timeSelected, setTimeSelected] = useState(false);
    const [tableSelected, setTableSelected] = useState(false);
    const [mealTypeSelected, setMealTypeSelected] = useState(false);
    const [mealSelected, setMealSelected] = useState(false);
    const [submitSelected, setSubmitSelected] = useState(false);

    const tables = [{ id: 1, name: 'Table1',
    },{ id: 2, name: 'Table2'
    },{ id: 3, name: 'Table3'
    },{ id: 4, name: 'Table4'
    },{ id: 5, name: 'Table5'
    },{ id: 6, name: 'Table6' }]
    const availableTimes = [{ id: 1, name: '09AM-10AM',
    },{ id: 2, name: '10AM-11AM'
    },{ id: 3, name: '11AM-12PM'
    },{ id: 3, name: '12PM-01PM'
    },{ id: 3, name: '01PM-02PM'
    },{ id: 3, name: '02AM-03PM'}]

    const meals = [{ id: 1, name: 'Mixed Fruits', type: 'vegan', price: 1.99
    },{ id: 2, name: 'Mixed Nuts', type: 'vegan', price: 1.22
    },{ id: 2, name: 'Eggs', type: 'veg', price: 1.22
    },{ id: 2, name: 'Tofu', type: 'veg', price: 1.22
    },{ id: 2, name: 'Chicken', type: 'non-veg', price: 1.22
    },{ id: 3, name: 'Meat', type: 'non-veg', price: 1.59 }]



    function handleTimeClick() {
        alert(`Time ${selectedTime} has been selected!`);
    }

    function handleTableClick()  {
        alert(`Table ${selectedTable} has been selected!`);
    }

    function handleMealClick() {
        alert(`Meal ${selectedMeal} has been selected!`);
    }

    const tableListItems = tables.map(table =>
        <Col>
            <Button id={table.id} key={table.id} variant="secondary" size="lg" onClick={() => {
                setSelectedTime(table.name)
                setTableSelected(true)
            }}>
                {table.name}
            </Button>
        </Col>
    );

    const availableTimesListItems = availableTimes.map(time =>
        <Col>
            <Button id={time.id} key={time.id} variant="secondary" size="lg" onClick={() => {
                setSelectedTable(time.name)
                setTimeSelected(true)
            }}>
                {time.name}
            </Button>
        </Col>
    );

    const availableMealListItems = meals.map(meal =>
        <Col>
            <Row className="mb1">
                <Card style={{ width: '12rem' }} id={meal.id} key={meal.id} onClick={() => {
                    setSelectedMeal(meal.name)
                    setMealSelected(true)
                }}>
                    <Card.Body>
                        <Card.Title>{meal.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Price:$ {meal.price}</Card.Subtitle>
                    </Card.Body>
                </Card>
            </Row>
        </Col>
    );

    let navigate = useNavigate();

    const confirmOrder = () => {
        try {
            localStorage.setItem('selectedTime',selectedTime)
            localStorage.setItem('selectedTable',selectedTable)
            localStorage.setItem('selectedMealType',selectedMealType)
            localStorage.setItem('selectedMeal',selectedMeal)
            navigate("/confirm");

            // const response = axios.post('YOUR_SERVER_LOGIN_ENDPOINT', {
            //     selectedTime,
            //     selectedTable,
            //     selectedMealType,
            //     selectedMeal
            // });
            //
            // // Assuming your server responds with a success message
            // if (response.data.success) {
            //     localStorage.setItem('selectedTime',selectedTime)
            //     localStorage.setItem('selectedTable',selectedTable)
            //     localStorage.setItem('selectedMealType',selectedMealType)
            //     localStorage.setItem('selectedMeal',selectedMeal)
            //     // Handle successful login, e.g., redirect to a new page
            //     console.log('Confirm successful!');
            //     alert('Login successful!');
            //     navigate("/confirm");
            //
            // } else {
            //     // Handle server response indicating login failure
            //     alert('Please try again');
            // }
        } catch (error) {
            // Handle any errors during the HTTP request
            console.error('Error during confirming order:', error);
            alert('An error occurred during confirming order');
        }
    }

    return (
        <>
            <Container className="p-5 mb-4 bg-light rounded-3">
                <h3 className="header">Please select a table to see available times.</h3>
                <Row className="mb3">
                    {tableListItems}
                </Row>
            </Container>
            <Container className="p-5 mb-4 bg-light rounded-3" style={{ visibility: tableSelected ? 'visible': 'hidden' }}>
                <h3 className="header">Please select a time to see available meal options.</h3>
                <Row className="mb3">
                    {availableTimesListItems}
                </Row>
            </Container>
            <Container className="p-5 mb-4 bg-light rounded-3" style={{ visibility: timeSelected ? 'visible': 'hidden' }}>
                <h3 className="header">Please select type of Menu you want? (Veg/NonVeg/Vegan)</h3>
                <Row className="mb3">
                    <Dropdown onSelect={() => {
                        setMealTypeSelected(true)
                    }}>
                        <Dropdown.Toggle variant="success" id="dropdown-">
                            {selectedMealType == '' ? 'Meal Type' : selectedMealType}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item as="button" onClick={() => {
                                setSelectedMealType('veg')
                            }}>Vegetarian</Dropdown.Item>
                            <Dropdown.Item as="button" onClick={() => {
                                setSelectedMealType('vegan')
                            }}>Vegan</Dropdown.Item>
                            <Dropdown.Item as="button" onClick={() => {
                                setSelectedMealType('non-veg')
                            }}>Non-vegetarian</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Row>
            </Container>
            <Container className="p-5 mb-4 bg-light rounded-3" style={{ visibility: mealTypeSelected ? 'visible': 'hidden' }}>
                <h3 className="header">Please select the meal options you want.</h3>
                <Row className="mb3">
                    {availableMealListItems}
                </Row>
            </Container>
            <Container className="p-5 mb-4 align-items-center" style={{ visibility: mealSelected ? 'visible': 'hidden' }}>
                <Button variant="primary" size="lg" disabled={submitSelected} onClick={() => {
                    setSubmitSelected(true)
                    confirmOrder()
                }}>
                    Confirm Order
                </Button>
            </Container>
        </>
    );
}

export default DiningPage;
