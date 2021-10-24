import React from 'react';
<<<<<<< HEAD
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { withRouter } from "react-router";
import Sidebar from "../../components/Sidebar.js";
import '../css/dashboard.css';
const Dash = props => {
    return (
        <>
         <Container fluid>
         <p>Dashboard</p>
         {/* make this a component */}
         <div class="card" style={{width: '18rem;'}}>
            <div class="card-body">
                <h5 class="card-title">CSE 142</h5>
                <h6 class="card-subtitle mb-2 text-muted">Midterm 1</h6>
                <p class="card-text">Going over content in weeks 1-5.</p>
                <a href="#" class="card-link">Omegalul</a>
                <a href="#" class="card-link">Get rekted</a>
            </div>
        </div>
                <Row>
                    <Col xs={2} id="sidebar-wrapper">      
                      <Sidebar />
                    </Col>
                    <Col  xs={10} id="page-content-wrapper">
                        this is a test
                    </Col> 
                </Row>

            </Container>
        </>
        );
  };
  const Dashboard = withRouter(Dash);
  export default Dashboard
=======
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
            <Card style={{ width: '25rem', borderRadius: '25px'}}>
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
            <Card style={{ width: '25rem', borderRadius: '25px' }}>
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
            <Card style={{ width: '25rem', borderRadius: '25px'}}>
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
>>>>>>> c50e981e7a3673a999e06ce9dce2fd80ca557b9c
