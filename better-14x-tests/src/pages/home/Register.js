import React from 'react'
import axios from 'axios'

export default class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: ''
        };
    }
  
    componentDidMount = () => {
        const self = this;
        axios.get(`/api/auth/register/get_user/5`)
            .then(function(response) {
                self.setState({username: response.data['username']})
            });

        axios.post(`/api/auth/register`, {
            firstname: 'something'
        })
        .then(function(response) {
            console.log(response);
        });  
        
    }
  
    render() {
      return (
        <h1>
            {this.state.username}
        </h1>
      )
    }
}