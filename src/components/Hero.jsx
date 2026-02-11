import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="grid-pattern"></div>
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Innovación en Desarrollo de Software
          </div>

          <h1 className="hero-title">
            Transformamos Ideas en
            <span className="gradient-text"> Soluciones Digitales</span>
          </h1>

          <p className="hero-description">
            Desarrollo de software a medida con tecnologías de vanguardia.
            Creamos aplicaciones escalables, seguras y de alto rendimiento
            que impulsan el crecimiento de tu negocio.
          </p>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-value">500+</div>
              <div className="stat-label">Proyectos Completados</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-value">98%</div>
              <div className="stat-label">Satisfacción del Cliente</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-value">24/7</div>
              <div className="stat-label">Soporte Técnico</div>
            </div>
          </div>

          <div className="hero-buttons">
            <button className="btn btn-primary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"/>
              </svg>
              Solicitar Consultoría
            </button>
            <button className="btn btn-secondary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
              </svg>
              Ver Portafolio
            </button>
          </div>

          <div className="hero-tech-stack">
            <span className="tech-label">Tecnologías que dominamos:</span>
            <div className="tech-items">
              <span className="tech-badge">React</span>
              <span className="tech-badge">Node.js</span>
              <span className="tech-badge">Python</span>
              <span className="tech-badge">Cloud AWS</span>
              <span className="tech-badge">Docker</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="code-window">
            <div className="window-header">
              <div className="window-dots">
                <span className="dot-red"></span>
                <span className="dot-yellow"></span>
                <span className="dot-green"></span>
              </div>
              <div className="window-title">innovation.tsx</div>
              <div className="window-actions">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="4 14 10 14 10 20"/>
                  <polyline points="20 10 14 10 14 4"/>
                  <line x1="14" y1="10" x2="21" y2="3"/>
                  <line x1="3" y1="21" x2="10" y2="14"/>
                </svg>
              </div>
            </div>
            <div className="window-content">
              <div className="code-line">
                <span className="line-number">1</span>
                <span className="code-keyword">const</span>
                <span className="code-text"> innovation = </span>
                <span className="code-function">createSolution</span>
                <span className="code-text">()</span>
              </div>
              <div className="code-line">
                <span className="line-number">2</span>
                <span className="code-text">  .</span>
                <span className="code-function">withTechnology</span>
                <span className="code-text">(</span>
                <span className="code-string">'cutting-edge'</span>
                <span className="code-text">)</span>
              </div>
              <div className="code-line">
                <span className="line-number">3</span>
                <span className="code-text">  .</span>
                <span className="code-function">addQuality</span>
                <span className="code-text">(</span>
                <span className="code-string">'enterprise-grade'</span>
                <span className="code-text">)</span>
              </div>
              <div className="code-line">
                <span className="line-number">4</span>
                <span className="code-text">  .</span>
                <span className="code-function">deploy</span>
                <span className="code-text">()</span>
              </div>
              <div className="code-cursor"></div>
            </div>
          </div>

          <div className="floating-card card-1">
            <div className="card-icon blue">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
              </svg>
            </div>
            <div className="card-content">
              <div className="card-title">Security First</div>
              <div className="card-bar"></div>
            </div>
          </div>

          <div className="floating-card card-2">
            <div className="card-icon green">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"/>
              </svg>
            </div>
            <div className="card-content">
              <div className="card-title">High Performance</div>
              <div className="card-bar"></div>
            </div>
          </div>

          <div className="floating-card card-3">
            <div className="card-icon blue-light">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3 0 1.13-.64 2.11-1.56 2.62l1.45 1.45C23.16 18.16 24 16.68 24 15c0-2.64-2.05-4.78-4.65-4.96zM3 5.27l2.75 2.74C2.56 8.15 0 10.77 0 14c0 3.31 2.69 6 6 6h11.73l2 2L21 20.73 4.27 4 3 5.27zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73z"/>
              </svg>
            </div>
            <div className="card-content">
              <div className="card-title">Cloud Native</div>
              <div className="card-bar"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
