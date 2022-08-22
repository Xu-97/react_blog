import React from 'react'
import CommentItem from '../CommentItem'

export default function Comments(props) {
  const { message, handleFefresh } = props
  return (
    <div>
      {
        message.map((item, index) => {
          return (
              <CommentItem
              item = {item}
              key = {index}
              handleFefresh= {handleFefresh}
              />
          )
        })
      }
    </div>
  )
}
