import React from 'react'
import CommentItem from '../CommentItem'

export default function Comments(props) {
  const { message } = props
  return (
    <div>
      {
        message.map((item, index) => {
          return (
              <CommentItem
              item = {item}
              key = {index}
              />
          )
        })
      }
    </div>
  )
}
