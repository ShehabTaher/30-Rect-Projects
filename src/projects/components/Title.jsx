import React from 'react'

const Title = ({text , classes}) => {
  return (
    <div className={!classes ? 'title text-center' : classes}>{!text ? "Title" : text}</div>
  )
}

export default Title