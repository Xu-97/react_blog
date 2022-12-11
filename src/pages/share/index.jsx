import React from 'react'
// import React, {useEffect,useState} from 'react'

// import { getFileByUpload } from '../../api/upload'
export default function Share() {
  // const [path,setPath] = useState([])
  // useEffect(() => {
  //   const _getFile = async() => {
  //     const result = await getFileByUpload(3)
  //     const {data} = result 
  //     setPath(data)
  //   }
  //   _getFile()
  // },[])
  return (
    <div className='share' style={ {width:'400px'}}>
      {/* {
        path.map(i => <img style={ {width:'100%'}} key={i.path} src={`api/${i.path}`} alt=""/>)
      } */}
    </div>
  )
}

