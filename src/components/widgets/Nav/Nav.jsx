import React from 'react'
import logo from '../../../media/logoClear.webp';
import tlogo from '../../../media/2021 Twitter logo - white.png';
import dlogo from '../../../media/Discord-Logo-White.png';
import klogo from '../../../media/keplrLogo.webp';
import './Nav.css';
// import './nav.js';

import {Link} from 'react-router-dom'

export default function Nav(props) {

    const handleClick = (event) => {
      event.preventDefault();
      props.handleKeplr();
    }

  return (
    <> 
    
    <nav id="navbar"className="navbar navbar-expand-md navbar-dark ">
        <div className="container-fluid">
          <Link to='/'><img className='App-logo'src= {logo} alt="Area47 Logo" width="40" height="40"/></Link>
          {/* <a className="navbar-brand" href="#"> <img src= {logo} alt="Area47 Banner" width="40" height="40"/></a> */}
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                {/* <Link to='/gallery/?search=Anim'> */}  
                {/* For the fancy one ^^^  */}

                <Link to='/gallery'>
                  {/* <a className="nav-link" href="#timeline">Gallery</a> */}
                  Gallery
                </Link>
              </li>

              <li className="nav-item">
              <Link to='/gaming'>
                  {/* <a className="nav-link" href="#timeline">Gallery</a> */}
                  Gaming
                </Link>
              </li>

              <li className="nav-item">
              <Link to='/create'>
                  {/* <a className="nav-link" href="#timeline">Gallery</a> */}
                  Create With US
                </Link>
              </li>
              <li className="nav-item">

              <Link to='/about'>
                  {/* <a className="nav-link" href="#timeline">Gallery</a> */}
                  About
                </Link>
                {/* <a className="nav-link active" aria-current="page" href="#disclaimer">About</a> */}
              </li>

              

              
                                 {/* <li className="nav-item dropdown">
                                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                  </a>
                                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider"></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                  </ul>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link disabled">Disabled</a>
                                </li>  */}
            </ul>
            <div className="d-flex">
                                {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"> */}
               <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              {/* <li className="nav-item">
                   <a className="nav-link active" aria-current="page" onClick={ handleClick } target="_blank"><img src={klogo} width="30"alt=""/></a>
              </li>                    */}

              <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="https://twitter.com/area47base" target="_blank"><img src={tlogo} width="30"alt=""/></a>
              </li>
                  
              <li className="nav-item">
                   <a className="nav-link active" aria-current="page" href="https://discord.gg/rf8azByFbG" target="_blank"><img src={dlogo} width="30"alt=""/></a>
              </li>
                              
              {/* <button className="btn btn-outline-primary" type="submit">Connect</button>  */}
            </ul>
          </div>
          </div>
        </div>
      </nav>
      
    </>
  )
}
