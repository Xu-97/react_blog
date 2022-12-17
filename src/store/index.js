/**
 * 创建store
 */
 import comment from "./modules/comment"
 import article from "./modules/article"
 const { configureStore } = require("@reduxjs/toolkit")

export default configureStore({
  reducer: {
    comment,
    article
  }
})