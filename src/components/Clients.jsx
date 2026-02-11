import React from 'react'
import './Clients.css'

const Clients = () => {
  const clients = [
    {
      name: 'Academia Linaje',
      logo: '/clients/logo_academia.png',
      category: 'Educación'
    },
    {
      name: 'Estanque Silohe',
      logo: '/clients/estanque_silohe.png',
      category: 'Recuperación'
    },
    {
      name: 'Magnor',
      logo: '/clients/magnor.png',
      category: 'Corporativo'
    }
  ]

  return (
    <section id="clients" className="clients">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <span className="badge-line"></span>
            Clientes
          </div>
          <h2 className="section-title">Clientes Aliados</h2>
          <p className="section-subtitle">
            Empresas e instituciones que confían en nuestra tecnología para impulsar su transformación digital
          </p>
        </div>

        <div className="clients-grid">
          {clients.map((client, index) => (
            <div
              key={index}
              className="client-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="client-logo-wrapper">
                <img
                  src={client.logo}
                  alt={`${client.name} Logo`}
                  className="client-logo"
                />
              </div>
              <div className="client-info">
                <h3 className="client-name">{client.name}</h3>
                <span className="client-category">{client.category}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="clients-cta">
          <p className="cta-text">¿Quieres ser nuestro próximo cliente aliado?</p>
          <button className="btn btn-secondary">Contáctanos</button>
        </div>
      </div>
    </section>
  )
}

export default Clients
