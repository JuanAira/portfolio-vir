import React from 'react';
import Fade from 'react-reveal/Fade';
import '../../../template/css/styles.css'

const Header = () => {
  return (
    <header id="header" className="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-xl-5">
              <div className="text-container">
              <Fade left>
                <h1 className="h1-large">Hi, I am <span className="name-person">Virgina Correa</span></h1>
                <p className="p-large">I design applications, digital products, websites, and brand identities.
                  I'm here to help turn your dreams and ideas into focused clear products.</p>
                <a className="btn-solid-lg" href="#details">Know more</a>
                </Fade>
              </div>    
            </div> 
            <div className="col-lg-6 col-xl-7">
              <div className="image-container">
              <Fade right>
                <img className="img-fluid" src="https://inovatik.com/nubis/images/header-image.png" alt="alternative" />
              </Fade>
              </div> 
            </div> 
          </div> 
        </div> 
      </header> 
  )
}
export default Header;