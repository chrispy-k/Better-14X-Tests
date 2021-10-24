import React from 'react';
import Sidebar from '../../components/Sidebar.js'
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { withRouter } from "react-router";
import '../css/dashboard.css';

export default function Dashboard () {
    return (
    <div>
        <div class ="flex-container">
            <div class = "flex-child 1">
                <Sidebar />
            </div>
            <div class = "flex-child-dash">
            <Card style={{ width: '18rem', borderRadius: '25px'}}>
            <Card.Body>
                <Card.Title>CSE 142</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Midterm 1</Card.Subtitle>
                <Card.Text>
                    Going over content in weeks 1-5.
                </Card.Text>
                <Card.Link href="/test">Test Link</Card.Link>
            </Card.Body>
        </Card>
            </div>
            <div class = "flex-child-dash">
            <Card style={{ width: '18rem', borderRadius: '25px' }}>
            <Card.Body>
                <Card.Title>CSE 143</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Midterm 1</Card.Subtitle>
                <Card.Text>
                    Going over content in weeks 1-5.
                </Card.Text>
                <Card.Link href="#">Test Link</Card.Link>
            </Card.Body>
        </Card>
            </div>
            <div class = "flex-child-dash">
            <Card style={{ width: '18rem', borderRadius: '25px'}}>
            <Card.Body>
                <Card.Title>CSE 373</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Midterm 1</Card.Subtitle>
                <Card.Text>
                    Going over content in weeks 1-5.
                </Card.Text>
                <Card.Link href="#">Test Link</Card.Link>
            </Card.Body>
        </Card>
            </div>
        </div>

        {/* make this a component and clickable*/}
    </div>
    )
};