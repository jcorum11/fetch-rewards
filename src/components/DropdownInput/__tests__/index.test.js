import React from 'react'
import DropdownInput from '..'
import { render, cleanup } from '../../../test-utils'
import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup)

describe('DropdownInput', () => {
  it('Renders', async () => {
    render(<DropdownInput type='State' />)
  })

  it('Matches snapshot', async () => {
    const { asFragment } = render(<DropdownInput type='State' />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('Inserts text into label', () => {
    const { getByTestId } = render(<DropdownInput type='State' />)
    expect(getByTestId('stateinput-label')).toHaveTextContent('State:')
  })
})