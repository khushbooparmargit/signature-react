// import React from 'react'
import React, { Component } from 'react';
import axios from 'axios';
import './UserList.css';


class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userdata: [],
      loading: true,
      error: null,
    };
  }


  componentDidMount() {
    // Fetch data from API
    axios.post('https://upnext1.com/Dev/aanganvadi_project/Api/user_list',
    ).then((response) => {
      const userData = response.data.responseData;

      this.setState({ 'userdata': userData })
      this.setState({ 'loading': false })

    });
  }
  render() {

    if (this.state.error) {
      return (
        <>
          <h1>{this.state.error}</h1>
        </>
      )
    }

    if (this.state.loading) {
      return (
        <>
          <h1>please wait...........loading</h1>
        </>
      )
    }


    var items = this.state.userdata;
    console.log(items);

    return (
      <React.Fragment>
        <h1>user list</h1>

        <div className='tbl'>
          <table>
            <tr>
              <th>Sr. No</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Password</th>
            </tr>


            {
              items.map(item => (
                <tr>
                  <td key={item.id}> {item.id} </td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td>
                </tr>

              ))
            }

          </table>
        </div>
      </React.Fragment>
    )
  }
}
export default UserList;
