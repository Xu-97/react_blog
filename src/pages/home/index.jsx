import React,{useEffect, useState} from 'react'
import { getArticleData, articleDetail } from '../../api/home'
import HighLight from '../../components/HighLight'
import "./index.css"
export default function Home() {
  const [articles, setArticles] = useState([])
  const [detail, setDetail] = useState('')

  useEffect(() => {
    _getArticleData()
  },[])
  async function _getArticleData() {
    const result = await getArticleData({pageNum:1,pageSize:10})
    if (result.code === 200) {
      setArticles(result.data)
    }
  }
  
  // const JSCode = `const App = props => {
  //   return (
  //     <div>
  //       <h1> Prism JS </h1>
  //       <div>Awesome Syntax Highlighter</div>
  //     </div>
  //   );
  // };
  // `;

  function htmlUnEscape(str) { //反转义
    var unescapes = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#39;': "'",
        '<br/>': '\n'
      },
      reEscapedHtml = new RegExp(/&(?:amp|lt|gt|quot|#39);/g);
    return (str && reEscapedHtml.test(str)) ? str.replace(reEscapedHtml, function(entity) {
      return unescapes[entity];
    }) : (str || '')
  }
  const handleClick = async(i) => {
    const result = await articleDetail(i.id)
    if(result.code === 200) {
      setDetail((htmlUnEscape(result.data[0].content)))
    }
  }
  return (
    <div className='editor-content-view'>
      {
        articles.map(item => <li 
          onClick={() => {handleClick(item)}} 
          key={item.id}
          >{item.title}</li>)
      }
            <HighLight code={detail} language="javascript" />
      {/* <div className='content' dangerouslySetInnerHTML={{__html: (detail)}}>
      </div> */}
    </div>
  )
}
