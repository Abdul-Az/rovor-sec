import React, { Component } from 'react';
import {firebaseApp} from "./base";
import {  FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import { Card, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import {
    Container, Col, Form, Label, Input,Button 
  } from 'reactstrap';

class Branches extends Component {
    constructor(props) {
        super(props);
       
        this.state = {
            password: ""
          };
     this.logout = this.logout.bind(this);
     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ password: event.target.value});
    }
    handleSubmit(event) {
        event.preventDefault();
        this.state.password === "admin" ?
          alert("matched") : alert(this.state.password)
    }

    logout() {
        firebaseApp.auth().signOut();
    }
 
render() {
  return (
      <div style={{ alignItems: "center"}}>
    <CardDeck  style={{ width: '900px', height: '550px', margin: '30px' }}>
      <Card>
        <CardImg top width="100%"  style={{ width: '400px', height: '400px' }} src={require("../firebase/TCS-01.png" )} alt="Card image cap" />
        <CardBody>
          <CardTitle>TCS Mumbai</CardTitle>
        <Form  onSubmit={this.handleSubmit} className="form">
        <Col>
        <FormGroup>
        {/* <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            /> */}
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
          <Button type="submit" >Submit</Button>
        </Form>
        </CardBody>
      </Card>
      <Card >
      <CardImg top width="100%"  style={{ width: '400px', height: '400px' }} src={require("../firebase/TCS-01.png" )} alt="Card image cap" />
        <CardBody>
          <CardTitle>TCS Chennai</CardTitle>
        <Form className="form">
        <Col>
       <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
            //   value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
            </FormGroup>
          </Col>
          <Button>Submit</Button>
        </Form>
        </CardBody>
      </Card>
    </CardDeck>
    <Button style={{margin: "20px" }} onClick={this.logout}>Logout</Button>
    </div>
  );
}
}
// export {Branches};
export default Branches;