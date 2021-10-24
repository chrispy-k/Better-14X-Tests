import React from 'react';
import '../css/tests.css';
import Sidebar from '../../components/Sidebar.js'
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { useHistory } from 'react-router-dom'

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('You have completed the test. Please close this window.');
    event.preventDefault();
  }

    render() {
        return (
            <div>
                <div class ="flex-container">
                    <div class = "flex-child 1">
                        <Sidebar />
                    </div>
                    <div class = "flex-child-dash">
                    <div>
                    <Card style={{ width: '75rem', borderRadius: '25px'}}>
                    <Card.Body>
                        <Card.Title>CSE 142 Midterm</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Question 1</Card.Subtitle>
                        <Card.Text>Provide the output for the following expression:</Card.Text>
                        <Card.Text>
                        "1" + 2 + 3 + "4" + 5 * 6 + "7" + (8 + 9)
                        </Card.Text>
                        <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    <input type="submit" value="Submit"/>
                </form>
                    </Card.Body>
                    </Card>
                    </div>
                    <div>
                    <Card style={{ width: '75rem', borderRadius: '25px'}}>
                    <Card.Body>
                        <Card.Title>CSE 142 Midterm</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Question 2</Card.Subtitle>
                        <Card.Text>Provide the output for the following expression:</Card.Text>
                        <Card.Text>
                        "1" + 2 + 3 + "4" + 5 * 6 + "7" + (8 + 9)
                        </Card.Text>
                        <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    <input type="submit" value="Submit"/>
                </form>
                    </Card.Body>
                    </Card>
                    </div>
                    <div>
                    <Card style={{ width: '75rem', borderRadius: '25px'}}>
                    <Card.Body>
                        <Card.Title>CSE 142 Midterm</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Question 3</Card.Subtitle>
                        <Card.Text>Provide the output for the following expression:</Card.Text>
                        <Card.Text>
                        "1" + 2 + 3 + "4" + 5 * 6 + "7" + (8 + 9)
                        </Card.Text>
                        <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    <input type="submit" value="Submit"/>
                </form>
                    </Card.Body>
                    </Card>
                    </div>
            
        {/* <Editor
          className="box"
          value={this.state.jsSample}
          onValueChange={jsSample => this.setState({ jsSample })}
          highlight={jsSample => highlight(jsSample, languages.js)}
          padding={10}
        /> */}
            </div>
            </div>
        </div>
        )
    }
}
export default Test;


// <h3>CSE Midterm 1</h3>
// <div class = "flex-container">
//     <div class = "flex-child2">
//         <ol>
//             <ul>Question 1</ul>
//             <ul>Question 2</ul>
//             <ul>Question 3</ul>
//             <ul>Question 4</ul>
//             <ul>Question 5</ul>
//             <ul>Question 6</ul>
//             <ul>Question 7</ul>
//             <ul>Question 8</ul>
//             <ul>Question 9</ul>
//         </ol>
//     </div>
//     <div class = "flex-child2">
//         <h4>Question:</h4>
//         <p>Write a program that simulates an ant trying to crawl up a building of height 6 steps. The ant starts on the ground, at
//             height 0. Each iteration, the ant either crawls up one step, or slips off and falls all the way back to the ground. There
//             is a 50% chance on each iteration that the ant will slip. The program should keep going until the ant gets to the top of
//             the building. It should then print out the number of falls that the ant took before it finally reached the top.
//             Here is a sample execution:
//         number of falls: 8  
//         </p>
        
//     </div>
//     <div class = "flex-child2">
//         <h4>Answer:</h4>
//         <form onSubmit={this.handleSubmit}>
//             <input type="text" value={this.state.value} onChange={this.handleChange}/>
//             <input type="submit" value="Submit"/>
//         </form>
//     </div>
// </div>