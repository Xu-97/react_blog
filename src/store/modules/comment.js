import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getMessage } from '../../api/message'
/**
 * createAsyncThunk
 * state 1.pending(进行中) 2.fulfilled(成功) 3.rejected(失败)
 * 类似于Prmomise
 */
export const loadComment = createAsyncThunk('comment', async(params) => {
  const result = await getMessage(params)
  return result
})

const commentSlice = createSlice({
  name: 'comment',
  initialState: {
    data:[],
    total: 0,
    lister: false
  },
  reducers:{
    handleListenr(state, action) {
      state.lister = true
    }
  },
  extraReducers: {
    [loadComment.fulfilled](state,{payload}) {
      state.data = payload.data
      state.total = payload.total
      state.lister = false
    },
    [loadComment.rejected](state, error) {
      console.log(error)
      return error
    },
    [loadComment.pending](state) {
    }
  }
})

export default commentSlice.reducer

export const {handleListenr} = commentSlice.actions



