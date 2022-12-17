import { createSlice } from '@reduxjs/toolkit'

const articleSclice = createSlice({
  name: 'article',
  initialState:{
    labelId: ''
  },
  reducers: {
    handleLabelId(state,action) {
      state.labelId = action.payload
    },
    resetLabelId(state, payload) {
      state.labelId = ''
    } 
  },

})

export default articleSclice.reducer

export const { handleLabelId, resetLabelId } = articleSclice.actions
