import React from 'react'
import "./Contact.css"
import useWeb3Forms from "@web3forms/react";
const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "a7b5dffa-b9b0-4998-96f3-d1ca6f1d5daa");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };
    


  return (
    <div className='container'>
        <div className="contact">
            <div className="col">
                <ul>
                    <li>sandeep9682980@gmail.com</li>
                    <li>+91 - 234 - 688 - 679</li>
                    <li> CampusConnect showcases our college’s vibrant community, academic excellence, and opportunities for growth, inspiring students to achieve their full potential</li>
                </ul>
            </div>
            <div className="col">
                <form onSubmit={onSubmit}>
                    <label>Your Name</label>
                    <input type="text" placeholder='Enter Your Name' name='name'/>
                    <label>Phone</label>
                    <input type="tel" placeholder='Enter Your Phone' name='phone'/>
                    <label>Message</label>
                    <input type="text" placeholder='Enter Your Message' name='message'/>
                    <button className='btn' type='submit'>Submit Now</button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    </div>
  )
}

export default Contact