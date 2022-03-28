import React from 'react';
import { faTwitter, faTiktok, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

function Navbar() {
  return (
    <div className='navbar'>
        <ul className='social-links'>
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
        </ul>

        <div className='logo'>
            <span>JOHNZ WEAR</span>
        </div>

        <ul className='links-list'>
            <li>
                <Link href='/'>Home</Link>
            </li>
            <li>
                <Link href='/women'>Women</Link>
            </li>
            <li>
                <Link href='/men'>Men</Link>
            </li>
            <li>
                <Link href='/about'>About Us</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar