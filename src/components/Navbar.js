import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import {
  // BrowserRouter as Router,
  Link
} from "react-router-dom";
// import { useState } from 'react';

export class Navbar extends Component {
  static propTypes = {

  }
  // const [search, setSearch] ; useState('null');

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"> <span>NEWS MAiNIA</span> </Link>
          <button className="navbar-toggler bg-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/">About Us</Link>
              </li>
              {/* <li className="nav-item nav">
                <Link className="nav-link nav-toggle" to="/" id="navbarnav" role="button" data-bs-toggle="nav" aria-expanded="false">
                  Filter Your News
                </Link>
                <ul className="nav-menu" aria-labelledby="navbarnav">
                  

                </ul>
              </li> */}
              <li className="nav-item"><Link className="nav-link active" to="/sports">Sports</Link></li>
              <li className="nav-item"><Link className="nav-link active" to="/business">Business</Link></li>
              <li className="nav-item"> <Link className="nav-link active" to="/entertainment">Entertainment</Link></li>
              <li className="nav-item"><Link className="nav-link active" to="/health">Health</Link></li>
              <li className="nav-item"><Link className="nav-link active" to="/science">Science</Link></li>

              {/* <li><hr className="nav-divider" /></li> */}
              <li><Link className="nav-link active" to="/technology">Technology</Link></li>
            </ul>

            {/* <form className='d-flex input-group w-auto'>
              <input type='search' className='form-control' placeholder='Search News'  aria-label='Search' />
              <button className="btn btn-outline-primary">Search</button>
            </form> */}
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
