import React from 'react';
import TextInput from '..';
import {render, cleanup} from '../../../test-utils'
import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup)

describe('TextInput', () => {
  it('Renders', async () => {
    render(<TextInput type='Name' nameType='First' />)
  })

  it('Matches snapshot', async () => {
    const { asFragment } = render(<TextInput type='Name' nameType='First' />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('Inserts text into label', () => {
    const { getByTestId } = render(<TextInput type='Name' nameType='First' />)
    expect(getByTestId('firstnameinput-label')).toHaveTextContent('First Name:')
  })
})
