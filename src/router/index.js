import { lazy, Suspense } from "react"; // 引入懒加载
import { Navigate } from "react-router-dom";
import AppLayout from "../pages/appLayout";
import Home from "../pages/home";
const Link = lazy(() => import("../pages/link"));
const My = lazy(() => import("../pages/my"));
const Share = lazy(() => import("../pages/share"));
const NotFound = lazy(() => import("../pages/not-found"));
const Message = lazy(() => import("../pages/message"));
const Detail = lazy(() => import("../pages/detail"));
const Weblog = lazy(() => import("../pages/weblog"));
const lazyLoad = (children) => {
  return (
    <Suspense
      fallback={<></>}
    >
      {children}
    </Suspense>
  );
};

const routers = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/home",
        label: "首页",
        element: <Home />,
        key: "home",
      },
      {
        path: "/detail",
        element: lazyLoad(<Detail />),
        key: "detail",
      },
      {
        label: "日志",
        path: "/weblog",
        element: lazyLoad(<Weblog />),
        key: "detail",
      },
      {
        label: "友链",
        path: "/link",
        element: lazyLoad(<Link />),
        key: "link",
      },
      {
        label: "留言",
        path: "/message",
        element: lazyLoad(<Message />),
        key: "message",
      },
      {
        label: "更多",
        key: "SubMenu",
        children: [
          {
            label: "我的",
            key: "my",
            path: "/my",
            element: lazyLoad(<My />),
          },
          {
            label: "资源分享",
            key: "share",
            path: "/share",
            element: lazyLoad(<Share />),
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: lazyLoad(<NotFound />),
  },
];

export default routers;
