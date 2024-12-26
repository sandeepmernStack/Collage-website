import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import Campus from './Components/Campus/Campus'
import Contact from './Components/Contact/Contact'
import Testimonial from './Components/Testimonial/Testimonial'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Title title={"Our Creative Programs"} subTitle={"PROGRAMS"}/>
      <Programs/>
      <Title title={"What Our Student Say"} subTitle={"TESTIMONIALS"}/>
     <Testimonial/>
      <Title title={"Connect Campus Gallery"} subTitle={"CAMPUS"}/>
      <Campus/>
      <Title title={"Get In Touch"} subTitle={"CONTACT US"}/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App