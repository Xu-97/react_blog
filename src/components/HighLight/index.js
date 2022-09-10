import React, { useEffect } from 'react'
import Prism from "prismjs";
import "./index.css"

export default function HighLight({code, language }) {
  useEffect(() => {
    Prism.highlightAll()
    console.log('---');
  }, [code]);

  return (
    <div className="high-light" dangerouslySetInnerHTML={{ __html: code }}>
      {console.log(code)}
    </div>
  )
}
