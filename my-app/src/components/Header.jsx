import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../img/transfero_logo_branco.png'

export default function Header() {
  return (
    <>
      <header>
        <img src={Logo} alt='Logo Tranfero'></img>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/projetos'>Projects</Link>
          <Link to='/empresa'>Company</Link>
          <Link to='/contato'>Contact</Link>
        </div>
      </header>
    </>
  )
}
