import React from 'react'
import { faTwitter, faTiktok, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import footerpic from '../images/payments.png'
import Image from 'next/image'

function Footer() {
  return (
    <div className='footer'>
        <div className='upper__footer'>

       
            
               <ul className='footer_links'>
                  
                   <li>
                       <Link href="/">Home</Link>
                   </li>
                   <li>
                       <Link href="/">About Us</Link>
                   </li>
                  
               </ul>
               <ul  className='footer_links'>
                    <li>
                       <Link href="/">Shirts</Link>
                   </li>
                    <li>
                       <Link href="/">Hoodies</Link>
                   </li>
                   <li>
                       <Link href="/">Caps</Link>
                   </li>
                   <li>
                       <Link href="/">Trousers</Link>
                   </li>
               </ul>
            
            <div>
                <ul className='social__links'>
                    <li>
                        <a href='#' target="_blank">
                            <FontAwesomeIcon icon={faTwitter} className='social-icon'/>
                        </a>
                    </li>
                    <li>
                        <a href='#' target="_blank">
                            <FontAwesomeIcon icon={faTiktok} className='social-icon'/>
                        </a>
                    </li>
                    <li>
                        <a href='#' target="_blank">
                            <FontAwesomeIcon icon={faFacebook} className='social-icon'/>
                        </a>
                    </li>
                    <li>
                        <a href='#' target="_blank">
                            <FontAwesomeIcon icon={faInstagram} className='social-icon'/>
                        </a>
                    </li>
                    <li>

                    </li>
               </ul>

                <Image width="300" height="50" src={footerpic}/>
            </div>
        </div>
        <div>
            JohnzWear &copy;2022
        </div>
    </div>
  )
}

export default Footer