import React from 'react';
import Sidebar from '../../components/Sidebar'
import ProfilePic from '../../images/no-photo-available.png';
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import '../css/profile.css';


export default function Profile() {
    return (
        <div>
            <div class ="flex-container">
                    <Sidebar />
                <div>
            <div class = "profile-card">
            <Card style={{ width: '25rem', borderRadius: '25px', textAlign: 'center'}}>
            <Card.Body>
            <img src={ProfilePic} alt="stock profile pic" style={{width:"250px", height:"250px"}}/>
                <Card.Title>User Profile</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">johnsonj@uw.edu</Card.Subtitle>
                <Card.Text>
                    John Johnson
                </Card.Text>
            </Card.Body>
        </Card>
        </div>
                </div>
                </div>
        </div>
    )
}