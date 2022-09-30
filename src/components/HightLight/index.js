import React, { useEffect } from 'react'
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';

export default function HighLight({ code }) {
  useEffect(() => {
    hljs.highlightAll()
  }, [code]);

  return (
    <div className="high-light" dangerouslySetInnerHTML={{ __html: code }}>
    </div>
  )
}
