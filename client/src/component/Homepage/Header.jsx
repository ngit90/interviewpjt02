import React from 'react'
import './Homepage.css'
import { Link } from 'react-router-dom'
import logo from "../../assets/logo.png"; 

export default function Header() {
  return (
    <div>
       {/* Header */}
       <header className="header">
            <div className="logo">
                 <img src={logo} alt="NEXUS VENTURES"/></div>
            <nav className="nav">
              <button className="login-btn"><Link to='/login'>Login</Link></button>
              <button className="signup-btn"> <Link to='/signup'>Sign Up</Link></button>
            </nav>
          </header>
    </div>
  )
}
