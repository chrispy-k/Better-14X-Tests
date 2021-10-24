import React from 'react';
import Sidebar from '../../components/Sidebar.js'
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { withRouter } from "react-router";
import '../css/dashboard.css';

export default function Score () {
    return (
    <div>
        <div class ="flex-container">
            <div class = "flex-child 1">
                <Sidebar />
            </div>
            <div class = "flex-child-dash">
            <Card style={{ width: '25rem', borderRadius: '25px'}}>
            <Card.Body>
                <Card.Title>CSE 142</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Midterm 1</Card.Subtitle>
                <Card.Text>
                    80/100
                </Card.Text>
                <Card.Link href="#">Check Test</Card.Link>
            </Card.Body>
        </Card>
            </div>
            <div class = "flex-child-dash">
            <Card style={{ width: '25rem', borderRadius: '25px' }}>
            <Card.Body>
                <Card.Title>CSE 143</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Midterm 1</Card.Subtitle>
                <Card.Text>
                    90/100
                </Card.Text>
                <Card.Link href="#">Check Test</Card.Link>
            </Card.Body>
        </Card>
            </div>
            <div class = "flex-child-dash">
            <Card style={{ width: '25rem', borderRadius: '25px'}}>
            <Card.Body>
                <Card.Title>CSE 373</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Midterm 1</Card.Subtitle>
                <Card.Text>
                    85/100
                </Card.Text>
                <Card.Link href="#">Check Test</Card.Link>
            </Card.Body>
        </Card>
            </div>
        </div>

        {/* make this a component and clickable*/}
    </div>
    )
};