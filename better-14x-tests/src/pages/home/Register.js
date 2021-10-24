import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";

export default function Register() {
    const url = 'http://localhost:5000/api/auth/register';

    const [formData, updateFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        username: '',
        password: '',
        usertype: ''
    })

    function handleChange(event) {
        const name = event.target.name
        const value = event.target.value
    
        const data = {
          ...formData,
          [name]: value
        }
    
        updateFormData(data)
    }

    function handleSubmit(event) {
        event.preventDefault()
    
        axios.post(url, formData)
          .then(resp => {
            if (resp.data.errors) {
              console.log('error');
            } else {
              console.log('success');
            }
          })
    
    }
    return (
        <Form>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalFirstName">
            <Form.Label column sm={2}>
            First Name
            </Form.Label>
            <Col sm={10}>
            <Form.Control type="text" 
                          placeholder="Your name" 
                          />
            </Col>
        </Form.Group>
    
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalLastName">
            <Form.Label column sm={2}>
            Last Name
            </Form.Label>
            <Col sm={10}>
            <Form.Control type="text" 
                          placeholder="Last Name" 
                          />
            </Col>
        </Form.Group>
    
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
            Email
            </Form.Label>
            <Col sm={10}>
            <Form.Control type="email" 
                          placeholder="email" 
                          />
            </Col>
        </Form.Group>

                
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalUserName">
            <Form.Label column sm={2}>
            User Name
            </Form.Label>
            <Col sm={10}>
            <Form.Control type="text" 
                          placeholder="User Name" 
                          />
            </Col>
        </Form.Group>
    
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
            <Form.Label column sm={2}>
            Password
            </Form.Label>
            <Col sm={10}>
            <Form.Control type="password" 
                          placeholder="password" 
                          />
            </Col>
        </Form.Group>
    
        <fieldset>
            <Form.Group as={Row} className="mb-3">
            <Form.Label as="legend" column sm={2}>
                User Type
            </Form.Label>
            <Col sm={10}>
                <Form.Check
                type="radio"
                label="Student"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
                />
                <Form.Check
                type="radio"
                label="TA"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
                />
                <Form.Check
                type="radio"
                label="Professor"
                name="formHorizontalRadios"
                id="formHorizontalRadios3"
                />
            </Col>
            </Form.Group>
        </fieldset>
    
        <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit" onClick={handleSubmit}>Register</Button>
            </Col>
        </Form.Group>
        </Form>
    );
}
