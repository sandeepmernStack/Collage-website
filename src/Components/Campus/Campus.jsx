import React from 'react'
import "./Campus.css"

import { about } from '../../assets'
const Campus = () => {
  return (
    <div className='container'>
       <div className="gallery">
           <div className="item">
            <img src={about} />
           </div>
           <div className="item">
            <img src={about} />
           </div>
           <div className="item">
            <img src={about} />
           </div>
           <div className="item">
            <img src={about} />
           </div>
       </div>
    </div>
  )
}

export default Campus