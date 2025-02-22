import React from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'



const Navbar = () => {
  return (
    <div className='navbar'>
    {/*<img src={logo} alt="" style={{ height: "100px", width: "100px" }}/>*/}
    <h1 className='logo'>Shajitha S.</h1>
    <ul className='nav-menu'>
        <li><AnchorLink className='anchor-link' href='#home'>Home</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'>About me</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#education'>Education</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#skills'>Skills</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'>Contact</AnchorLink></li>
    </ul>
    <div className='nav-connect'>Connect with me</div>
    </div>

  )
}

export default Navbar