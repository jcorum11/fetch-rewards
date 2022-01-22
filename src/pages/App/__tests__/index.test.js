import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup } from '../../../test-utils'
import App from '..'

afterEach(cleanup)

describe('App', () => {
  it('Renders', () => {
    render(<App />)
  })

  it('Matches snapshot', () => {
    const { asFragment } = render(<App />)
    expect(asFragment()).toMatchSnapshot()
  })
})