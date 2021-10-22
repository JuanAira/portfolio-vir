import React from 'react';

const Footer = () => {
  return (
    <>
    <div className="footer bg-gray">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="social-container">
              <span className="fa-stack">
                <a href="https://www.linkedin.com/in/virginia-correa/">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fab fa-linkedin fa-stack-1x" />
                </a>
              </span>
              <span className="fa-stack">
                <a href="https://www.behance.net/virginiacorrea">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fab fa-behance fa-stack-1x" />
                </a>
              </span>
              <span className="fa-stack">
                <a href="mailto:19virlujan@gmail.com">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fas fa-envelope fa-stack-1x" />
                </a>
              </span>
              <span className="fa-stack">
                <a href="https://wa.me/543492679142">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fab fa-whatsapp fa-stack-1x" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </> 
  )
}

export default Footer;