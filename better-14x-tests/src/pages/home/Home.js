import React, {Component, useState} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import "./Login.css";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    function toRegisterPage() {
        history.push('/Register');
    }

    // function toDashPage() {
    //     history.push('../dashboard/dashboard');
    // }

    function handleSubmit(event) {
        event.preventDefault();
        axios.get(`/api/resource`, { username : password })
        .then(function (response) {
            console.log(response)
            if (response !== null) {
                history.push('../dashboard/dashboard');
            } else {
                alert('Error!');
            }
        })

    }

    return (
        <div className="Login">
        <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="username">
            <Form.Label>User Name</Form.Label>
            <Form.Control
                autoFocus
                type="email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            </Form.Group>
            <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            </Form.Group>
            <Button block size="lg" onClick={handleSubmit}>
            Login
            </Button>
            <Button block size="lg" onClick={toRegisterPage}>
            Register
            </Button>
        </Form>
        </div>
    );
}

//type="submit" disabled={!validateForm()}