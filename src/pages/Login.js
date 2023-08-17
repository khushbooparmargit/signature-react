// import React from 'react';
import React, { Component } from 'react'
import axios from 'axios';



export class Login extends Component {

  constructor() {
    super();

    this.state = {

      // 'first_name':'',
      // 'last_name':'',
      'email': '',
      'password': '',
      'message': ''
    }
    
    this.eventHandler = this.eventHandler.bind(this);

  }
  // construtor end

  eventHandler(event) {
    var item = event.target.name;

    this.setState({
      [item]: event.target.value
    })
  }
  handlesubmit(event) {
    event.preventDefault();
    const { email , password} = this.state;

     var formdata={
      // 'first_name':first_name,
      // 'last_name':last_name,
      'email':email,
      'password':password
     }
  

// axios
axios.post('https://upnext1.com/Dev/aanganvadi_project/Api/user_list', formdata)
  .then((response) => {
  console.log(response)
  if (response.data.status) {
    this.setState({ 'message': "Login Successfull" })
  } else {
    this.setState({ 'message': "Something Went Wrong" })
  }
})
  }


render() {
  return (

    <React.Fragment>

      <h1>Please Login Here</h1>
      <form>

        <input type="email" name="email" onChange={this.eventHandler} value={this.state.value} placeholder="EMAIL ADDRESS"></input>
        <br />

        <input type='password' name="password" onChange={this.eventHandler} value={this.state.value} placeholder='YOUR PASSWORD'></input>
        <br />


        <button type="submit" >Submit</button>

      </form>




    </React.Fragment>



  )
}
}






export default Login;
