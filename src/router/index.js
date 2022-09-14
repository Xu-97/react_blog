import { lazy, Suspense } from "react"  // 引入懒加载
import { Spin } from "antd"
import AppLayout  from "../pages/appLayout"
const Home = lazy(() => import('../pages/home'))
const Link = lazy(() => import('../pages/link'))
const My = lazy(() => import('../pages/my'))
const Share = lazy(()=> import('../pages/share'))
const NotFound = lazy(() => import('../pages/not-found'))
const Message = lazy(() => import('../pages/message'))
const Detail = lazy(() => import('../pages/detail'))
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
          key: 'home',
        },
        {
          path: "/detail",
          element: lazyLoad(<Detail />),
          key: 'detail'
        },
        {
          label: '友链',
          path: "/link",
          element: lazyLoad(<Link />),
          key: 'link'
        },
        {
          label: '留言',
          path: "/message",
          element: lazyLoad(<Message />),
          key: 'message'
        },
        {
          label: '更多',
          key: 'SubMenu',
          children:[
            {
              label: '我的',
              key: 'my',
              path:'/my',
              element: lazyLoad(<My />)
            },
            {
              label: '资源分享',
              key: 'share',
              path:'/share',
              element: lazyLoad(<Share />)
            },
          ]
        }
      ]
    },
    {
      path:"*",
      element: lazyLoad(<NotFound />)
    }
  ]

export default routers