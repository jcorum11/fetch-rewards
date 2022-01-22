import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import dropdownApi from '../../api/dropdown'

export const fetchOptions = createAsyncThunk('dropdown/fetchOptionsStatus', async () => {
  const response = await dropdownApi.fetchOptions()
  return response
})

const dropdownSlice = createSlice({
  name: 'dropdown',
  initialState: {
    options: [],
    status: 'idle',
    selectedState: '',
    occupation: ''
  },
  reducers: {
    setState: (state, action) => {
      state.selectedState = action.payload
    },
    setOccupation: (state, action) => {
      state.occupation = action.payload
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchOptions.pending, (state, action) => {
      state.status = 'loading'
    })
    builder.addCase(fetchOptions.fulfilled, (state, action) => {
      state.status = 'complete'
      state.options = action.payload
    })
  }
})

export const selectOptions = state => state.dropdown.options
export const selectOptionsFetchStatus = state => state.dropdown.status
export const selectOccupation = state => state.dropdown.occupation
export const selectState = state => state.dropdown.selectedState

export const { setState, setOccupation } = dropdownSlice.actions

export default dropdownSlice.reducer
