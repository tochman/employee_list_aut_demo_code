import React, { Component } from 'react';
import axios from 'axios'

class EmployeeList extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    this.fetchEmployees()
  }

  async fetchEmployees() {
    let employees = await axios.get('https://reqres.in/api/users?per_page=5')
    debugger
    this.setState({ employees: employees.data.data })
  }
  render() {
    let employeeList
    if (this.state.employees) {
      employeeList = this.state.employees.map(employee => {
        return (
          <li key={employee.id}>{`${employee.first_name} ${employee.last_name}`}</li>
        )
      })
    }

    return (
      <>
        <ul>
          {employeeList}
        </ul>
      </>
    );
  }
}

export default EmployeeList;