import React, {useEffect, useState} from 'react'
import { getAboutMe } from '../../api/index'
import "./index.css"

export default function MY() {
  const [aboutMe, setAboutMe] = useState({})
  
  useEffect(() => {
    const _getAboutMe = async() => {
      const result = await getAboutMe()
      if(result.code === 200) {
        const {data} = result
        setAboutMe(data[0])
      }
    }
    _getAboutMe()
  },[])
  return (
    <div className='about-me' dangerouslySetInnerHTML={{__html: aboutMe.content}}></div>
  )
}
