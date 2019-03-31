import React from 'react'
import { shallow } from 'enzyme'

import EmployeeList from '../components/EmployeeList'
import axios from 'axios'

jest.mock('axios')

describe('<EmployeeList />', () => {
  it('should fetch some employees from back-end system using axios', () => {
    const axiosSpy = jest.spyOn(axios, 'get')
    shallow(<EmployeeList />)
    expect(axiosSpy).toBeCalled()
  })

  xit('should render a list of 5 employees', () => {
    const describedComponent = shallow(<EmployeeList />)
    expect(describedComponent.find('li')).toHaveLength(5)
  })
})