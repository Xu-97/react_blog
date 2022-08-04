import { lazy, Suspense } from "react"  // 引入懒加载
import { Spin } from "antd"
import AppLayout  from "../pages/app-layout"
const Home = lazy( () => import('../pages/home'))
const User = lazy( () => import('../pages/user') )
const lazyLoad = (children) => {
  return <Suspense fallback = {<Spin />}>{children}</Suspense>
}

const routers = [
    {
      path: "/",
      element: <AppLayout/>,
      children:[
        {
          label: '首页',
          index: true,
          element: lazyLoad(<Home />),
          key: 'home'
        },
        {
          label: '用户',
          path: "/user",
          element: lazyLoad(<User />),
          key: 'user'
        }
      ]
    },

  ]

export default routers