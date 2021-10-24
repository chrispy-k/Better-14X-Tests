import React, {Component, useState} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from 'axios'

export default function Register() {

    const [formData, updateFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        username: '',
        password: '',
        type_user: ''
    })

    function handleChange(event) {
        const name = event.target.name
        const value = event.target.value
    
        const data = {
          ...formData,
          [name]: value
        }
    
        updateFormData(data);
    }
  
    function handleSubmit(event) {
        event.preventDefault()

        axios.post(`/api/auth/register`, formData)
            .then(response => console.log(response));

        
    }

    return (
        <Form>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalFirstName">
            <Form.Label column sm={2}>
            First Name
            </Form.Label>
            <Col sm={10}>
            <Form.Control name="firstname"
                          type="text" 
                          placeholder="Your name" 
                          onChange={handleChange}  />
            </Col>
        </Form.Group>
    
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalLastName">
            <Form.Label column sm={2}>
            Last Name
            </Form.Label>
            <Col sm={10}>
            <Form.Control name="lastname"
                          type="text" 
                          placeholder="Your name" 
                          onChange={handleChange}  />
            </Col>
        </Form.Group>
    
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
            Email
            </Form.Label>
            <Col sm={10}>
            <Form.Control name="email"
                          type="email" 
                          placeholder="email" 
                          onChange={handleChange}  />
            </Col>
        </Form.Group>

                
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalUserName">
            <Form.Label column sm={2}>
            User Name
            </Form.Label>
            <Col sm={10}>
            <Form.Control name="username"
                          type="text" 
                          placeholder="user name" 
                          onChange={handleChange}  />
            </Col>
        </Form.Group>
    
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
            <Form.Label column sm={2}>
            Password
            </Form.Label>
            <Col sm={10}>
            <Form.Control name="password"
                          type="password" 
                          placeholder="password" 
                          onChange={handleChange}  />
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
                    value="student"
                    name="type_user"
                    id="studentRadio"
                    onChange={handleChange}
                />
                <Form.Check
                    type="radio"
                    label="TA"
                    value="TA"
                    name="type_user"
                    id="TARadio"
                    onChange={handleChange}
                />
                <Form.Check
                    type="radio"
                    label="Professor"
                    value="professor"
                    name="type_user"
                    id="professorRadio"
                    onChange={handleChange}
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