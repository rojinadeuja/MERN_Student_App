//React component to manage data in CRUD application

import React, {Component} from "react";
import Form from 'react-bootstrap/Form'; //Import Form component
import Button from 'react-bootstrap/Button'; //Import Button component
import axios from 'axios'; //Import Axiosto send student's data to the MongoDb server


export default class CreateStudent extends Component {
    constructor(props){
        super(props)

        //Setting up functions
        this.onChangeStudentName = this.onChangeStudentName.bind(this);
        this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
        this.onChangeStudentRollno = this.onChangeStudentRollno.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        //Setting up initial state
        this.state = {
            name: '',
            email: '',
            rollno: ''
        }
    }
    onChangeStudentName(e) {
        this.setState({name: e.target.value})
    }
    onChangeStudentEmail(e) {
        this.setState({email: e.target.value})
    }
    onChangeStudentRollno(e) {
        this.setState({rollno: e.target.value})
    }
    onSubmit(e) {
        e.preventDefault()
        const studentObject = {name: this.state.name, email: this.state.email, rollno: this.state.rollno};
        axios.post('http://localhost:4000/students/create-student', studentObject).then(res=>console.log(res.data));
        this.setState({name: '', email:'', rollno:''})
    }
    render(){
        return(
        <div class="form-wrapper">
            <Form onSubmit={this.onSubmit}>
                <Form.Group controlId="Rollno">
                     <Form.Label>Roll No.</Form.Label>
                    <Form.Control type="text" value={this.state.rollno} onChange={this.onChangeStudentRollno}/>
                </Form.Group>
                <Form.Group controlId="Name">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" value={this.state.name} onChange={this.onChangeStudentName}/>
                </Form.Group>
                <Form.Group controlId="Email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" value={this.state.email} onChange={this.onChangeStudentEmail}/>
                </Form.Group>
                <Button variant="success" size="lg" block="block" type="submit">
                    Create Student
                </Button>
            </Form>
        </div>);
    }
}