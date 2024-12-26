import React from 'react'
import "./Title.css"
const Title = ({title, subTitle}) => {
  return (
    <div className='container'>
        <div className="title">
        <p>{subTitle}</p>
        <h4>{title}</h4>
        </div>
    </div>
  )
}

export default Title