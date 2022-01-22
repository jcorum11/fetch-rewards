import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import appApi from '../../api/app'

export const sendInputs = createAsyncThunk('app/sendInputsStatus', async (inputs) => {
  const response = await appApi.sendInputs(inputs)
  return response
})

const appSlice = createSlice({
  name: 'app',
  initialState: {
    response: '',
    status: 'Idle...'
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(sendInputs.pending, (state, action) => {
      state.status = 'Loading...'
    })
    builder.addCase(sendInputs.fulfilled, (state, action) => {
      state.status = 'Sent!'
      state.response = action.payload
    })
  }
})

export const selectResponse = state => state.app.response
export const selectPostStatus = state => state.app.status

export default appSlice.reducer
