import React from 'react'
import './Logo.css'

const Logo = ({ size = 'medium', variant = 'default' }) => {
  const sizes = {
    small: 40,
    medium: 50,
    large: 80
  }

  const logoSize = sizes[size] || sizes.medium

  return (
    <div className={`logo-container ${variant}`}>
      <img
        src="/northcloud.png"
        alt="NorthCloud Logo"
        className="logo-image"
        style={{ height: logoSize }}
      />

      {variant === 'with-text' && (
        <div className="logo-text">
          <span className="logo-title">NorthCloud</span>
          <span className="logo-tagline">Technology</span>
        </div>
      )}
    </div>
  )
}

export default Logo
