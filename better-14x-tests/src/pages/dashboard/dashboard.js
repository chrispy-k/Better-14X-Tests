import React from 'react';
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