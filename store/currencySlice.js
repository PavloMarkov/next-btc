import { createSlice } from '@reduxjs/toolkit'

export const currencySlice = createSlice({
  name: "currency",
  initialState:[{
    date: '',
    currencyValue: {
      USD:'',
      GBP: '',
      EUR: '',
    }
  }],
  reducers: {
       addActualPrice (state, action) {
        state.push(action.payload)
      },
    }
  })

  export const { addActualPrice } = currencySlice.actions

  export default currencySlice.reducer