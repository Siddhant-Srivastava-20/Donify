import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import './Home.css'

const Home = () => {

  return (
    <div className="home">
      <Navbar />
      <section className="hero">
        <img src="/hero.png" alt="Donify Hero" className="hero-image" />
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>
              Blood when
              <br />
              it matters.
              <br />
              <span>Found in seconds.</span>
            </h1>
            <p className="hero-desc">
              Connecting donors and those in need.
              <br />
              Because every drop can save a life.
            </p>
            <div className="hero-buttons">
              <button className="find-btn" 
              onClick={handleFindBlood}
              >
                Find Blood Now →
              </button>
              <button className="donor-btn"
          onClick={handleRegisterDonor}
          >
                Register as Donor
              </button>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-icon">🩸</div>
                <h3>98K+</h3>
                <p>Total Donors</p>
              </div>
              <div className="hero-stat-divider"></div>
              <div className="hero-stat">
                <div className="hero-stat-icon">❤️</div>
                <h3>2.4K+</h3>
                <p>Active Requests</p>
              </div>
              <div className="hero-stat-divider"></div>

              <div className="hero-stat">
                <div className="hero-stat-icon">👥</div>
                <h3>1.2K+</h3>
                <p>Lives Impacted Today</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home