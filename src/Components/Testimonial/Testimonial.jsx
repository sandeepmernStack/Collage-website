import React ,{ useState }from 'react';
import './Testimonial.css';
import {about} from "../../assets"
const testimonials = [
  { name: 'Jack Williums', imgSrc: about, desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit Lorem ipsum, dolor sit amet consectetur adipisicing elitLorem ipsum, dolor sit amet consectetur adipisicing elit...' },
  { name: 'Jane Doe', imgSrc: about, desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum, dolor sit amet consectetur adipisicing elitLorem ipsum, dolor sit amet consectetur adipisicing elit...' },
  { name: 'John Smith', imgSrc: about, desc: 'Aperiam dolores magnam rem quidem ratione expedita Lorem ipsum, dolor sit amet consectetur adipisicing elitLorem ipsum, dolor sit amet consectetur adipisicing elit...' },
  { name: 'Emily Davis', imgSrc: about, desc: 'Assumenda explicabo enim maiores consectetur adipisicing Lorem ipsum, dolor sit amet consectetur adipisicing elitLorem ipsum, dolor sit amet consectetur adipisicing elit...' },
];




const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

const handleNext = () => {
  setCurrentIndex((prevIndex) =>
    prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
  );
};

const handlePrev = () => {
  setCurrentIndex((prevIndex) =>
    prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
  );
};

  return (
    <div className="container testimonial">
      <button onClick={handlePrev} className="btn">Previous</button>
      
      <div className="slider">
        {testimonials.map((testimonial, index) => (
          <div className="slide" key={index}>
            <div className="slide-img">
              <p>{testimonial.name}</p>
              <img src={testimonial.imgSrc} alt={`${testimonial.name}'s profile`} />
            </div>
            <div className="slide-desc">
              <p>{testimonial.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={handleNext} className="btn">Next</button>
    </div>
  );
};

export default Testimonial;
