import React from "react";
import '../../../template/css/styles.css'

const Navbar = () => {
  return (
    <nav id="navbarExample" className="navbar navbar-expand-lg fixed-top navbar-light" aria-label="Main navigation">
    <div className="container">
      <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav ms-auto navbar-nav-scroll">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#header">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#details">Descriprion</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Portfolio">Portfolio</a>
          </li>
        </ul>
        <span className="nav-item">
          <a className="btn-solid-sm" href="https://drive.google.com/file/d/1uXGy8Xna8eU-Xo4hiKDD-M5UU8-Igysm/view?usp=sharing" download="CV VIRGINA CORREA.PDF">Downloand cv</a>
        </span>
      </div> 
    </div> 
  </nav> 
  )
}

export default Navbar;