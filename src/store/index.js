/**
 * 创建store
 */
 import counter from "./modules/counter"
 import comment from "./modules/comment"
 const { configureStore } = require("@reduxjs/toolkit")

export default configureStore({
  reducer: {
    counter,
    comment
  }
})