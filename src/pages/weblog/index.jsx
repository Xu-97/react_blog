import React,{useEffect, useState} from 'react'
import { getWebLog } from '../../api/index'

export default function WebLog() {
  const [moods, setMoods] = useState([])

  useEffect(() => {
    const _getWebLog = async() => {
      const result = await getWebLog() 
      if(result.code === 200) {
        const {data} = result
        setMoods(data)
      }
    }
    _getWebLog()
  },[])


  return (
    <div>
      {
        moods.map(i => 
          <p key={i.id}>{i.id}</p>
          )
      }
    </div>
  )
}
