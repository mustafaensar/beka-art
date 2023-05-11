import React from 'react'

export default function Navbar() {
  return (
    <>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-xs-12">
            <div className="cd-slider-nav">
              <nav className="navbar navbar-expand-lg" id="tm-nav">
                <a className="navbar-brand" href="#">Beka Art</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-supported-content" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbar-supported-content">
                  <ul className="navbar-nav mb-2 mb-lg-0">
                    <li className="nav-item selected">
                      <a className="nav-link" aria-current="page" href="#0" data-no={1}>Home</a>
                      <div className="circle" />
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#0" data-no={2}>Gallery</a>
                      <div className="circle" />
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#0" data-no={3}>About</a>
                      <div className="circle" />
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#0" data-no={4}>Contact</a>
                      <div className="circle" />
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
