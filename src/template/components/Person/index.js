/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Fade from 'react-reveal/Fade';

const Person = () => {
  return (
    <div id="details" className="basic-1">
    <div className="container">
      <div className="row">
      <div className="col-lg-6 col-xl-7">
          <div className="image-container">
          <Fade top>
            <img className="img-fluid" src="https://inovatik.com/nubis/images/details-1.png" alt="alternative" />
          </Fade>
          </div>
        </div> 
        <div className="col-lg-6 col-xl-5">
          <div className="text-container">
          <Fade top>
            <div className="section-title">ABOUT ME</div>
            <h6 className="text-center">I define myself as an organized person, curious and responsable, always predisposed to learn new stuff. I am passionate about creating, researching and innovating.</h6>
            <p className="text-center"> 
                I am a multi-disciplinary designer specializing in UI UX.
                My work has a wide spectrum of designs ranging from friendly and accessible, to conceptual and up to high-end commercial and technological projects, always focusing on the user's needs and the business's success.
                I strive to create a design that is true to the product's goals and the visual experience.
            </p>
          </Fade>
          </div> 
        </div> 
      </div> 
    </div> 
  </div> 
  )
}

export default Person;