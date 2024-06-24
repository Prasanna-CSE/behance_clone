import React from 'react'
import { AiFillInstagram } from "react-icons/ai";
import { RiTwitterLine } from "react-icons/ri";
import { IoLogoPinterest } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiAdobe } from "react-icons/si";
import behance from '../../assets/images/behance.png'
import '../FooterComponents/FooterComponents.css'
const FooterComponents = () => {
  return (
    <div>
      <div className='footer-container'>
        <div className='behance-container'>
          <img className='behance' src={behance} alt='behance-img'></img>
        </div>
        <div className='container-1'>
          <ul className='first'>
            <h3 className='title'>Built For Creatives</h3>
            <li className='box-1'><a className='anchor' href=''>Try Behance Pro</a></li>
            <li className='box-1'><a className='anchor' href=''>Find Inspiration</a></li>
            <li className='box-1'><a className='anchor' href=''>Get Hired</a></li>
            <li className='box-1'><a className='anchor' href=''>Sell Creative Assets</a></li>
            <li className='box-1'><a className='anchor' href=''>Sell Freelance Services</a></li>
          </ul>
        </div>
        <div className='container-1'>
          <div>
            <ul className='first'>
              <h3 className='title'>Find Talent</h3>
              <li className='box-1'><a className='anchor' href=''>Post a Job</a></li>
              <li className='box-1'><a className='anchor' href=''>All Featured Freelance Designers</a></li>
              <li className='box-1'><a className='anchor' href=''>Graphic Designers</a></li>
              <li className='box-1'><a className='anchor' href=''>Photographers</a></li>
              <li className='box-1'><a className='anchor' href=''>Video Editors</a></li>
              <li className='box-1'><a className='anchor' href=''>Web Designers</a></li>
              <li className='box-1'><a className='anchor' href=''>Illustrators</a></li>
            </ul>
          </div>
        </div>
        <div className='container-1'>
          <ul className='first'>
            <h3 className='title'>Behance</h3>
            <li className='box-1'><a className='anchor' href=''>About Behance</a></li>
            <li className='box-1'><a className='anchor' href=''>Adobe Portfolio</a></li>
            <li className='box-1'><a className='anchor' href=''>Download the App</a></li>
            <li className='box-1'><a className='anchor' href=''>Blog</a></li>
            <li className='box-1'><a className='anchor' href=''>Careers</a></li>
            <li className='box-1'><a className='anchor' href=''>Help Center</a></li>
            <li className='box-1'><a className='anchor' href=''>Contact Us</a></li>
          </ul>
        </div>
        <div className='container-1'>
          <ul className='first'>
            <h3 className='title'>Social</h3>
            <li className='box-1'><a className='anchor' href=''><AiFillInstagram  />  Instagram</a></li>
            <li className='box-1'><a className='anchor' href=''><RiTwitterLine />  Twitter</a></li>
            <li className='box-1'><a className='anchor' href=''><IoLogoPinterest />  Pinterest</a></li>
            <li className='box-1'><a className='anchor' href=''><FaFacebook />  Facebook</a></li>
            <li className='box-1'><a className='anchor' href=''><FaLinkedin />  LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className='footer-2'>
        <div className='left'>
          <a href="#" className="adobe-2"><SiAdobe />   Adobe</a>
          <p className='para'>© 2024 Adobe Inc. All rights reserved.</p>
          <a className='box-2' href=''>English</a>
          <a className='box-2' href=''>TOU</a>
          <a className='box-2' href=''>Privacy</a>
          <a className='box-2' href=''>Community</a>
          <a className='box-2' href=''>Cookie preferences</a>
          <a className='box-2' href=''>Do not sell or share my personal information</a>
        </div>
      </div>
    </div>

  )
}

export default FooterComponents