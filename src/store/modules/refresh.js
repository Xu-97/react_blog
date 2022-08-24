import { createSlice } from '@reduxjs/toolkit'

const refresh = createSlice({
  name: 'refresh',
  initialState: {
    isRefresh: false,
  },

  reducers:{
    handleRefresh(state, action) {
      state.isRefresh =  true
    }
  }
})

export const { handleRefresh } = refresh.actions

export default refresh.reducer
