import React from 'react'
import { Link } from 'react-router-dom'

const NavSignup = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className ="navbar-brand">
                    <Link to='/'>Navbar</Link> 
                </a>

                <button className="navbar-toggler" type="button" 
                  data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" 
                  aria-controls="navbarNavAltMarkup" aria-expanded="false" 
                  aria-label="Toggle navigation">

                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link active" href="#">Home</a>
                    <a className="nav-link active" href="#">Features</a>
                    <a className="nav-link active" href="#">Pricing</a>
                    <a className="nav-link active">Disabled</a>
                </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default NavSignup