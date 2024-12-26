import React from 'react'
import { hero, about } from '../../assets'
import "./Programs.css"
const Programs = () => {
  return (
    <div className='container'>
       <div className="programs">
         <div className="program">
            <img src={hero}  />
            <div className="layer">
                <p>Web Development</p>
            </div>
         </div>
         <div className="program">
            <img src={hero}  />
            <div className="layer">
                <p>FrontEnd Developer</p>
            </div>
         </div>
         <div className="program">
            <img src={hero}  />
            <div className="layer">
                <p>Backend Developer</p>
            </div>
         </div>
       </div>
    </div>
  )
}

export default Programs