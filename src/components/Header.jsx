import React, { useState } from 'react'
import Logo from './Logo'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div onClick={() => scrollToSection('hero')}>
            <Logo size="medium" variant="with-text" />
          </div>

          <button
            className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
            <a onClick={() => scrollToSection('hero')}>Inicio</a>
            <a onClick={() => scrollToSection('features')}>Características</a>
            <a onClick={() => scrollToSection('clients')}>Clientes</a>
            <a onClick={() => scrollToSection('contact')}>Contacto</a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
