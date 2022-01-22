import { createSlice } from '@reduxjs/toolkit';

const textInputSlice = createSlice({
  name: 'textInput',
  initialState: {
    name: {
      first: '',
      middle: '',
      last: ''
    },
    email: '',
    password: ''
  },
  reducers: {
    setFirstName: (state, action) => {
      state.name.first = action.payload
    },
    setMiddleName: (state, action) => {
      state.name.middle = action.payload
    },
    setLastName: (state, action) => {
      state.name.last = action.payload
    },
    setName: (state, action) => {
      state.name = action.payload
    },
    setEmail: (state, action) => {
      state.email = action.payload
    },
    setPassword: (state, action) => {
      state.password = action.payload
    }
  }
})

export const selectName = state => state.textInput.name
export const selectEmail = state => state.textInput.email
export const selectPassword = state => state.textInput.password

export const { setFirstName, setMiddleName, setLastName, setName, setEmail, setPassword } = textInputSlice.actions

export default textInputSlice.reducer