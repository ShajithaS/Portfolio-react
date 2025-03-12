import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <div className='skills' id='skills'>
    <div className='skills-title'>
        <h1>My Skills</h1>
    </div>
    <div className='skill-content'>
            <div class="skill-card">
                <h2>Programming Languages</h2>
                <ul>
                    <li>C</li>
                    <li>Java</li>
                </ul>
            </div>
            <div class="skill-card">
                <h2>Web Technologies</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React.js</li>
                </ul>
            </div>
            <div class="skill-card">
                <h2>Data Structures & Algorithms</h2>
                <ul>
                    <li>Java</li>
                </ul>
            </div>
            <div class="skill-card">
                <h2>Query Language</h2>
                <ul>
                    <li>MySQL</li>
                </ul>
            </div>
            <div class="skill-card">
                <h2>Tools & IDEs</h2>
                <ul>
                    <li>Git</li>
                    <li>GitHub</li>
                    <li>VS Code</li>
                </ul>
            </div>
    </div>
    </div>
  )
}

export default Skills