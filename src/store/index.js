/**
 * 创建store
 */
 import comment from "./modules/comment"
 const { configureStore } = require("@reduxjs/toolkit")

export default configureStore({
  reducer: {
    comment
  }
})