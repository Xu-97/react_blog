/**
 * 创建store
 */
 import counter from "./modules/counter"
 import refresh from "./modules/refresh"
 const { configureStore } = require("@reduxjs/toolkit")

export default configureStore({
  reducer: {
    counter,
    refresh
  }
})