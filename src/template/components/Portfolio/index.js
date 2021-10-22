import React from 'react';
import Fade from 'react-reveal/Fade';
import Bookmark from './img/bookmark-solid.svg'

const Portfolio = () => {
  return(
          <div className="cards-2 bg-gray" id='Portfolio'>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="h2-heading">Case studies</h2>
              </div> 
            </div> 
            <div className="row">
              <div className="col-lg-12">
            <Fade left>
                <div className="card">
                  <img className="quotes" src={Bookmark} alt="alternative" />
                  <div className="card-body">
                    <p className="testimonial-text">Suspendisse vitae enim arcu. Aliqu convallis risus a felis blandit, at mollis nisi bibendum aliquam noto ricos</p>
                    <div className="testimonial-author">Roe Smith</div>
                    <div className="occupation">General Manager, Presentop</div>
                  </div>
                  <div className="gradient-floor red-to-blue" />
                </div>
              </Fade>

              <Fade left>
                <div className="card">
                  <img className="quotes" src={Bookmark} alt="alternative" />
                  <div className="card-body">
                    <p className="testimonial-text">Suspendisse vitae enim arcu. Aliqu convallis risus a felis blandit, at mollis nisi bibendum aliquam noto ricos</p>
                    <div className="testimonial-author">Susane Blake</div>
                    <div className="occupation">General Manager, Presentop</div>
                  </div>
                  <div className="gradient-floor purple-to-green" />
                </div>
              </Fade>
              </div>
            </div>
          </div>
        </div> 
  )
}

export default Portfolio;