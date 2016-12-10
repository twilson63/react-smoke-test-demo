import React from 'react'
import { shallow } from 'enzyme'
import Home from './'

it('renders home component', () => {
  const wrapper = shallow(<Home />)
  // here we are testing for the
  // text Test Demo Home
  const homeTitle = <h2>Test Demo Home</h2>
  expect(wrapper.contains(homeTitle))
    .toEqual(true)
})
