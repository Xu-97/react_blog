import React, {useEffect, useState} from 'react'
import { getFrinedLinks } from '../../api/link'
import "./index.css"
export default function User() {
  const [friends, setFriends] = useState([])

  useEffect(() => {
    getFriends()
  },[])

  const getFriends = async() => {
    const result = await getFrinedLinks()
    if(result.code === 200) {
      const data = result.data
      setFriends(data)
    }
  }
  // 跳转外链
  const handleClick = (url) => {
    window.open(url)
  } 
  return (
    <div className='links'>
    <div className='mine'>
      <h6>本站链接如下：</h6>
      <p>站点名称：劲夫随笔</p>
      <p>描述：Never Give Up</p>
      <p>网链：http://xrblogs.cn/</p>
      <p>头像：https://cdn.xrblogs.cn/avatar.jpg</p>
    </div>
    <div className='friends'>
      {
        friends.map(i => 
        <div 
          key={i.id} 
          className="items"
          onClick={()=> { handleClick(i.web_link) }}
          >
          <div className='avatar'>
            <img src={i.profile} alt="找不到图片了" />
          </div>
          <div className='info'>
            <p>{i.link_tag}</p>
            <p>{i.link_name}</p>
          </div>
        </div>
        )
      }
    </div>
    </div>
  )
}
