import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div className='contact' id='contact'>
    <div className='title'>
        <h1>
            Contact
        </h1>
        
    </div>
        <div className='contact-content'>
        <div className='contact-para'>
           <p>Open to new opportunities and meaningful conversations. Let’s connect!</p>
           <p><i class="fa-solid fa-envelope mail" ></i> shajitha090204@gmail.com</p>
           <p><i class="fa-solid fa-location-dot"></i> Chennai,India</p>
        </div>    
        <div className='contact-icons'>
      
          <div className='icon'><a href='mailto:shajitha090204@gmail.com'><i class="fa-solid fa-envelope"></i></a> </div>

 <div className='icon'><a href='https://www.linkedin.com/in/shajitha-s-6b039725a/'><i class="fa-brands fa-linkedin-in"></i></a></div>
<div className='icon'><a href='https://github.com/ShajithaS'><i class="fa-brands fa-github"></i></a></div>
        </div>
    </div>
    </div>
  )
}

export default Contact