import React from 'react'
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer>
      <a href="/">
        <FaFacebook className='icons'/>
      </a> <a href="/">
        <FaInstagram className='icons'/>
      </a> <a href="/">
        <FaLinkedin className='icons'/>
      </a>
      <p>Transfero &#169; 2022</p>
    </footer>
  )
}
