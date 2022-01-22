import { configureStore } from '@reduxjs/toolkit';
import dropdownReducer from './components/DropdownInput/dropdownInputSlice'
import textInputReducer from './components/TextInput/textInputSlice'
import appReducer from './pages/App/appSlice'

export default configureStore({
  reducer: {
    app: appReducer,
    dropdown: dropdownReducer,
    textInput: textInputReducer
  }
})