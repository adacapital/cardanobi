import React from 'react'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-darker fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#home"><img src="img/cardanobi_logo_full_white.png" style={{width: '192px', height: '40px'}} alt="" /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav no-wrap">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#features">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#team">Team</a>
            </li>
            {/* <li class="nav-item">
              <a class="nav-link" href="#roadmap">Roadmap</a>
            </li> */}
            <li class="nav-item">
              <a class="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
