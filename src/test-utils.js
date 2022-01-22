import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
// Import your own reducer
import dropdownReducer from './components/DropdownInput/dropdownInputSlice'
import textInputReducer from './components/TextInput/textInputSlice'
import appReducer from './pages/App/appSlice'

function render(
  ui,
  {
    preloadedState,
    store = configureStore({ reducer: { dropdown: dropdownReducer, textInput: textInputReducer, app: appReducer }, preloadedState }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }