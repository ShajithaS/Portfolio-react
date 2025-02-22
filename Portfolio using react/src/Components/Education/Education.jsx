import React from 'react'
import './Education.css'

const Education = () => {
  return (
    <div className='education' id='education'>
    <div className='education-title'>
        <h1>Education</h1>
    </div>
    <div className='education-content'>
            <div class="education-card">
                <h3>Bachelor of Engineering (B.E.) in Computer Science and Engineering</h3>
                <p><strong>Institution:</strong> St. Joseph’s Institute of Technology</p>
                <p><strong>CGPA:</strong> 9.51</p>
                <p><strong>Year:</strong> 2022 - Present</p>
            </div>
            <div class="education-card">
                <h3>Higher Secondary Certificate (HSC)</h3>
                <p><strong>School:</strong> Aristo Public School</p>
                <p><strong>Percentage:</strong> 95.6%</p>
                <p><strong>Year:</strong> 2021</p>
            </div>
            <div class="education-card">
                <h3>Secondary School Leaving Certificate (SSLC)</h3>
                <p><strong>School:</strong>Sri Saraswathi Vidhyaalya Matric.Higher Secondary School</p>
                <p><strong>Percentage:</strong> 98%</p>
                <p><strong>Year:</strong> 2019</p>
            </div>
        </div>
    </div>
  )
}

export default Education