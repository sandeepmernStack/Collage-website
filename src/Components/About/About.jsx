import React from 'react'
import "./About.css"
import { about } from '../../assets'
const About = () => {
  return (
    <div className='container'>
       <div className="about">
         <div className="item">
            <img src={about} style={{height:"250px"}} className='about-img' />
         </div>
         <div className="item">
             <div className="details">
                <h4>Empowering Minds, Shaping Futures</h4>
                <p>Welcome to CampusConnect, your gateway to an enriching academic journey. Our platform offers a comprehensive overview of our college’s vibrant community, world-class programs, and state-of-the-art facilities. Explore opportunities for personal growth, academic excellence, and career advancement.</p>
             </div>
         </div>
       </div>
    </div>
  )
}

export default About