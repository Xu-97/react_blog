import { createSlice } from '@reduxjs/toolkit'

const counter = createSlice({
  // 类似于命名空间 name值会作为action type的前缀
  name: 'counter',
  // 初始化状态
  initialState: {
    count: 0,
    list: []
  },
  // 定义reducer更新状态的函数, 2.组件中dispatch使用的action函数
  reducers: {
    add(state, action) {
      console.log(state, action)
      state.count ++ 
    },

    push(state) {
      state.list.push(Math.floor( Math.random() * 100))
    },

    del(state, action) {
      state.list.splice(action.payload, 1)
    }
  },

})

// 导出action函数
export const { add, push, del }  = counter.actions 

// 导出reducer, 创建store
export default counter.reducer