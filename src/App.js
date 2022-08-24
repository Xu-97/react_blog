import "./App.less"
import routers from './router'
import { useRoutes } from 'react-router-dom'
// 导入store

function App() {
  return useRoutes(routers) 
}

export default App;
