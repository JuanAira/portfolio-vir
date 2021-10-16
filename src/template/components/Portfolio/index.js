import React from 'react';
import Fade from 'react-reveal/Fade';

const Portfolio = () => {
  return(
          <div className="cards-2 bg-gray" id='Portfolio'>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="h2-heading">Portfolio</h2>
              </div> 
            </div> 
            <div className="row">
            <Fade bottom>
              <div className="col-lg-12">
                <div className="card">
                  <img className="quotes" src="https://cdn.icon-icons.com/icons2/844/PNG/512/Diigo_icon-icons.com_67072.png" alt="alternative" />
                  <div className="card-body">
                    <p className="testimonial-text">Suspendisse vitae enim arcu. Aliqu convallis risus a felis blandit, at mollis nisi bibendum aliquam noto ricos</p>
                    <div className="testimonial-author">Roe Smith</div>
                    <div className="occupation">General Manager, Presentop</div>
                  </div>
                  <div className="gradient-floor red-to-blue" />
                </div>
                <div className="card">
                  <img className="quotes" src="https://cdn.icon-icons.com/icons2/844/PNG/512/Diigo_icon-icons.com_67072.png" alt="alternative" />
                  <div className="card-body">
                    <p className="testimonial-text">Suspendisse vitae enim arcu. Aliqu convallis risus a felis blandit, at mollis nisi bibendum aliquam noto ricos</p>
                    <div className="testimonial-author">Sam Bloom</div>
                    <div className="occupation">General Manager, Presentop</div>
                  </div>
                  <div className="gradient-floor blue-to-purple" />
                </div>
                <div className="card">
                  <img className="quotes" src="https://cdn.icon-icons.com/icons2/844/PNG/512/Diigo_icon-icons.com_67072.png" alt="alternative" />
                  <div className="card-body">
                    <p className="testimonial-text">Suspendisse vitae enim arcu. Aliqu convallis risus a felis blandit, at mollis nisi bibendum aliquam noto ricos</p>
                    <div className="testimonial-author">Bill McKenzie</div>
                    <div className="occupation">General Manager, Presentop</div>
                  </div>
                  <div className="gradient-floor purple-to-green" />
                </div>
                <div className="card">
                  <img className="quotes" src="https://cdn.icon-icons.com/icons2/844/PNG/512/Diigo_icon-icons.com_67072.png" alt="alternative" />
                  <div className="card-body">
                    <p className="testimonial-text">Suspendisse vitae enim arcu. Aliqu convallis risus a felis blandit, at mollis nisi bibendum aliquam noto ricos</p>
                    <div className="testimonial-author">Vanya Dropper</div>
                    <div className="occupation">General Manager, Presentop</div>
                  </div>
                  <div className="gradient-floor red-to-blue" />
                </div>
                <div className="card">
                  <img className="quotes" src="https://cdn.icon-icons.com/icons2/844/PNG/512/Diigo_icon-icons.com_67072.png" alt="alternative" />
                  <div className="card-body">
                    <p className="testimonial-text">Suspendisse vitae enim arcu. Aliqu convallis risus a felis blandit, at mollis nisi bibendum aliquam noto ricos</p>
                    <div className="testimonial-author">Lefty Brown</div>
                    <div className="occupation">General Manager, Presentop</div>
                  </div>
                  <div className="gradient-floor blue-to-purple" />
                </div>
                <div className="card">
                  <img className="quotes" src="https://cdn.icon-icons.com/icons2/844/PNG/512/Diigo_icon-icons.com_67072.png" alt="alternative" />
                  <div className="card-body">
                    <p className="testimonial-text">Suspendisse vitae enim arcu. Aliqu convallis risus a felis blandit, at mollis nisi bibendum aliquam noto ricos</p>
                    <div className="testimonial-author">Susane Blake</div>
                    <div className="occupation">General Manager, Presentop</div>
                  </div>
                  <div className="gradient-floor purple-to-green" />
                </div>
              </div>
              </Fade>
            </div>
          </div>
        </div> 
  )
}

export default Portfolio;