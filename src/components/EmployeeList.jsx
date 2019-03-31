import React, { Component } from 'react';
import { List, Image } from 'semantic-ui-react'

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
    this.setState({ employees: employees.data.data })
  }
  render() {
    let employeeList
    if (this.state.employees) {
      employeeList = this.state.employees.map(employee => {
        return (
          <div key={employee.first_name}>
            <List.Item >
              <Image avatar src={employee.avatar} />
              <List.Content>
                <List.Header as='a'>{`${employee.first_name} ${employee.last_name}`}</List.Header>
                <List.Description>
                  {`${employee.first_name}@email.com`}
                </List.Description>
              </List.Content>
            </List.Item>
          </div>
        )
      })
    }

    return (
      <>
        <List>
          {employeeList}
        </List>
      </>
    );
  }
}

export default EmployeeList;