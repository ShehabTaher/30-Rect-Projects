import React from 'react'

const Title = ({text , classes}) => {
  return (
    <div className={!classes ? 'title' : classes && "title  text-center"}>{!text ? "Title " : text}</div>
  )
}

export default Title