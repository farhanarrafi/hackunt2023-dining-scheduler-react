// src/components/LoginPage.js
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


const ConfirmPage = () => {

    return (
        <Container>
            <Row>
                <p>
                    Your order has been confirmed with confirmation number: SUN-01-01-IAN-23456.
                    You ordered a {localStorage.getItem('selectedMealType')} meal of {localStorage.getItem('selectedMeal')}
                    and booked the table {localStorage.getItem('selectedTable')}
                    for {localStorage.getItem('selectedTime')}.
                </p>
            </Row>
        </Container>
    );
}

export default ConfirmPage;
