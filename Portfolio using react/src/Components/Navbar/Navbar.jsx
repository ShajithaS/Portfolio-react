import React from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menuImg from './menu-icon.png';


const Navbar = () => {
  const menuRef = useRef(null);

  const openMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.right = "0"; // Show menu
    }
  };
  return (
    <div className='navbar'>
    {/*<img src={logo} alt="" style={{ height: "100px", width: "100px" }}/>*/}
    <h1 className='logo'>Shajitha S.</h1>
    <img src={menuImg} alt="Menu Icon" onClick={openMenu} />
    <ul className='nav-menu' ref={menuRef} >
        <li><AnchorLink className='anchor-link' href='#home'>Home</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'>About me</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#education'>Education</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#skills'>Skills</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'>Contact</AnchorLink></li>
    </ul>
    <div className='nav-connect'><AnchorLink className='connect-anchor-link' offset={50} href='#contact'>Connnect with me</AnchorLink></div>
    </div>

  )
}

export default Navbar