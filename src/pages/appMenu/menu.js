export const menu = [
  {
    label: '首页',
    index: 'true',   
    key: 'home',
  },
  {
    label: '友链',
    path: "/link",    
    key: 'link'
  },
  {
    label: '留言',
    path: "/message",
    key: 'message'
  },
  {
    label: '更多',
    key: 'SubMenu',
    children:[
      {
        label: '我的',
        key: 'my',
        path:'/my' 
      },
      {
        label: '资源分享',
        key: 'share',
        path:'/share'        
      },
    ]
  }
]