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
            <li className='box-1'><a href=''>Try Behance Pro</a></li>
            <li className='box-1'><a href=''>Find Inspiration</a></li>
            <li className='box-1'><a href=''>Get Hired</a></li>
            <li className='box-1'><a href=''>Sell Creative Assets</a></li>
            <li className='box-1'><a href=''>Sell Freelance Services</a></li>
          </ul>
        </div>
        <div className='container-1'>
          <div>
            <ul className='first'>
              <h3 className='title'>Find Talent</h3>
              <li className='box-1'><a href=''>Post a Job</a></li>
              <li className='box-1'><a href=''>All Featured Freelance Designers</a></li>
              <li className='box-1'><a href=''>Graphic Designers</a></li>
              <li className='box-1'><a href=''>Photographers</a></li>
              <li className='box-1'><a href=''>Video Editors</a></li>
              <li className='box-1'><a href=''>Web Designers</a></li>
              <li className='box-1'><a href=''>Illustrators</a></li>
            </ul>
          </div>
        </div>
        <div className='container-1'>
          <ul className='first'>
            <h3 className='title'>Behance</h3>
            <li className='box-1'><a href=''>About Behance</a></li>
            <li className='box-1'><a href=''>Adobe Portfolio</a></li>
            <li className='box-1'><a href=''>Download the App</a></li>
            <li className='box-1'><a href=''>Blog</a></li>
            <li className='box-1'><a href=''>Careers</a></li>
            <li className='box-1'><a href=''>Help Center</a></li>
            <li className='box-1'><a href=''>Contact Us</a></li>
          </ul>
        </div>
        <div className='container-1'>
          <ul className='first'>
            <h3 className='title'>Social</h3>
            <li className='box-1'><a href=''><AiFillInstagram className='insta' />  Instagram</a></li>
            <li className='box-1'><a href=''><RiTwitterLine />  Twitter</a></li>
            <li className='box-1'><a href=''><IoLogoPinterest />  Pinterest</a></li>
            <li className='box-1'><a href=''><FaFacebook />  Facebook</a></li>
            <li className='box-1'><a href=''><FaLinkedin />  LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className='footer-2'>
        <div className='left'>
          <a href="#" className="adobe"><SiAdobe />   Adobe</a>
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