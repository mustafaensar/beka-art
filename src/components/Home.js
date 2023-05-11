import React from 'react';
import homeImg1 from '../img/home-img-1.jpg'
import homeImg2 from '../img/home-img-2.jpg';
export default function Home() {
  return (
    <>
      <div className="page-width-1 page-left">
        <div className="d-flex position-relative tm-border-top tm-border-bottom intro-container">
          <div className="intro-left tm-bg-dark">
            <h2 className="mb-4">Welcome to Astro Motion</h2>
            <p className="mb-4">
              This HTML template has a motion video background loop which is provided by <a rel="sponsored" href="https://getfreepictures.com" target="_blank">Get Free Pictures</a>. This is
              one-page responsive layout for your websites. Feel
              free to use this for a commercial purpose. </p>
            <p className="mb-0">
              You are not permitted to redistribute this template on your Free CSS collection websites. Please <a rel="nofollow" href="https://templatemo.com/contact" target="_blank">contact us</a> for more information. </p>
          </div>
          <div className="intro-right">
            <img src={homeImg1} alt="homeImg1" className="img-fluid intro-img-1" />
            <img src={homeImg2} alt="homeImg2" className="img-fluid intro-img-2" />
          </div>
          <div className="circle intro-circle-1" />
          <div className="circle intro-circle-2" />
          <div className="circle intro-circle-3" />
          <div className="circle intro-circle-4" />
        </div>
        <div className="text-center">
          <a href="#0" data-page-no={2} className="btn btn-primary tm-intro-btn tm-page-link">
            View Gallery
          </a>
        </div>
      </div>
    </>
  )
}
