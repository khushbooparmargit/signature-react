// import React from 'react';
import './Register.css';
import axios from 'axios';
import React, { Component } from 'react'


export class Register extends Component {

  constructor() {
    super();

    this.state = {
      'first_name': '',
      'last_name': '',
      'email': '',
      'password': '',
      'message': ''
    }


    this.eventHandler = this.eventHandler.bind(this);
  }

  eventHandler(event) {
    // ye form wala name hai 
    var item = event.target.name;

    this.setState({
      [item]: event.target.value
    })
  }


  handlesubmit(event) {
    event.preventDefault();
  
    console.log(this.state.first_name);


    const { first_name, last_name, email, password } = this.state;

    // ye data ka format api se backend developer send kr rha hai 
    var formdata = {
      'first_name': first_name,
      'last_name': last_name,
      'email': email,
      'password': password
    }

    console.log(formdata);

    axios.post('https://upnext1.com/Dev/aanganvadi_project/Api/user_list',formdata)
      .then((response) => {
        console.log(response);
        this.setState({ 'message': 'you have registered Successfully' })

      })
    }



    render() {
      return (
        <React.Fragment>

          <h1> Plz first register</h1>
          <h3>{this.state.message}</h3>
          <div className='formcontent'>
            <form  onSubmit={this.handlesubmit.bind(this)}>
              <input type='text' name="first_name"  onChange={this.eventHandler} value={this.state.first_name} ></input>
              <br/>

              <input type='text' name="last_name"  onChange={this.eventHandler} value={this.state.last_name}></input>
              <br />

              <input type="email" name="email" onChange={this.eventHandler} value={this.state.email}></input>
              <br />

              <input type='password' name="password" onChange={this.eventHandler} value={this.state.password}></input>
              <br />

              <button type="submit">Submit</button>

            </form>
          </div>


        </React.Fragment>
      )
    }
  }



export default Register;