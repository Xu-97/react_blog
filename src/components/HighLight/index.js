import React, { useEffect } from 'react'
import Prism from "prismjs";
import "./index.css"

export default function HighLight({ code }) {
  useEffect(() => {
    Prism.highlightAll()
  }, [code]);

  return (
    <div className="high-light" dangerouslySetInnerHTML={{ __html: code }}>
    </div>
  )
}
