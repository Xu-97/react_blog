import React,{useEffect} from 'react'
import { getArticleData } from '../../api/home'

export default function Home() {
  // const [] = useState()
  useEffect(() => {
    _getArticleData()
  },[])
  const _getArticleData = async () => {
    const result = await getArticleData({pageNum:1,pageSize:10})
    console.log(result);
  }
  return (
    <div>
      home
    </div>
  )
}
