import React from 'react';
import Fade from 'react-reveal/Fade';
import '../../../template/css/styles.scss'
import './styles.scss'
import Redes from '../Footer/index'

const Header = () => {
  return (
    <header id="header" className="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-xl-12">
              <div className="text-container description-person">
              <Fade top>
                <h1 className="h1-large">Hi, I am <span className="name-person">Virgina Correa</span></h1>
                <p className="p-large">I design applications, digital products, websites, and brand identities.
                  I'm here to help turn your dreams and ideas into focused clear products.</p>
                <a className="btn-solid-lg btn-portfolio" href="#details">Portfolio</a>
                </Fade>
              </div>   
              <Redes/> 
            </div> 
          </div> 
        </div> 
      </header> 
  )
}
export default Header;