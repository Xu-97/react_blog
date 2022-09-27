import React, { useEffect } from 'react'
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

export default function HighLight({ code }) {
  useEffect(() => {
    console.log(code)
    hljs.highlight(code)
  
  }, [code]);

  return (
    <div className="high-light" dangerouslySetInnerHTML={{ __html: code }}>
    </div>
  )
}
