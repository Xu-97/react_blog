import { lazy, Suspense } from "react"  // 引入懒加载
import { Spin } from "antd"
const Home = lazy( () => import('../pages/home'))
const User = lazy( () => import('../pages/user') )
const lazyLoad = (children) => {
  return <Suspense fallback = {<Spin />}>{children}</Suspense>
}

const routers = [
    {
      path: "/",
      element: lazyLoad(<Home />),
    },
    {
      path: "/user",
      element: lazyLoad(<User />),
    },
  ]

export default routers