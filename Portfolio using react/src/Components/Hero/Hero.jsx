import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'

const Hero = () => {
  return (
    <div className='hero' id='home'>
        <img className='hero-image' src={profile_img} alt="profile_img"/>
        <h1>Hey, I’m <span>Shajitha!</span></h1>
        <p>🚀 Pre-final year B.E. CSE student at St. Joseph’s Institute of Technology</p>
    </div>
  )
}

export default Hero