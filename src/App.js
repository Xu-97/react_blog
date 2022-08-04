import "./App.less"
import routers from './router'
import { useRoutes } from 'react-router-dom'
import { Suspense } from "react";

function App() {
  return (
    <Suspense>
      { useRoutes(routers) }
    </Suspense>
  )

}

export default App;
