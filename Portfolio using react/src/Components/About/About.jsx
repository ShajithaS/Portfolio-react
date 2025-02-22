import './About.css'
import React from 'react'
import profile_img from '../../assets/profile_img.jpg'

const About = () => {
  return (
    <div className='about' id='about'>
    <div className='title'>
        <h1>
            About me
        </h1>
        
    </div>
        <div className='about-para'>
            <p >I am a pre-final year B.E. Computer Science and Engineering student at St. Joseph’s Institute of Technology, currently maintaining a CGPA of 9.51. I have a strong foundation in C, Java, HTML, CSS, JavaScript, and the MERN stack. I am passionate about Data Structures and Algorithms (DSA) and actively improve my problem-solving skills through platforms like LeetCode. I am looking for internship opportunities to gain hands-on experience, apply my knowledge to real-world projects, and learn from industry experts. I am eager to explore new challenges, collaborate with teams, and grow as a developer. 🚀</p>
        </div>
    </div>
  )
}

export default About