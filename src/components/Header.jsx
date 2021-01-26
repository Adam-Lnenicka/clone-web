import React from 'react'
import Logo from '../logo-copy.png'


import {Link} from 'react-router-dom'


export default function Header(){
    return(
      <div className="Header">

    <div className="Header">
    <nav class="navbar1 navbar navbar-expand-lg navbar-light">
    <a class="navbar-brand navbar-brand3" href="/"><img src={Logo} alt="logo"/></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span > <i class="fa fa-bars"></i><div>Menu</div></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">

        <li class="nav-item" id="nav-item">
          <Link  class="nav-link"id="nav-link"  to="/" ><span style={{color: "#575757"}}>About us</span></Link>

        </li>
        <li class="nav-item" id="nav-item">
            <li>
                <Link  class="nav-link" id="nav-link" to="/" ><span style={{color: "#575757"}}>our work</span></Link>
            </li>
        </li>

        <li class="nav-item dropdown" id="nav-item">
                  <a  id="drop" class="nav-link" href="/"  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span id ="drop" style={{color: "#575757"}}>SECTORS <i class="fas fa-chevron-right fa-rotate-90"></i></span>
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" id="drop1" href="/">Financial services</a>
                    <a class="dropdown-item" id="drop1" href="/">Digital Government</a>
                    <a class="dropdown-item" id="drop1" href="/">Retail</a>
                    <a class="dropdown-item" id="drop1" href="/">Travel</a>
                  </div>
        </li>

        <li class="nav-item" id="nav-item">
            <li>
                <Link  class="nav-link" id="nav-link" to="/" ><span style={{color: "#575757"}}>blog</span></Link>
            </li>
        </li>

        <li class="nav-item" id="nav-item">
            <li>
                <Link  class="nav-link" id="nav-link" to="/" ><span style={{color: "#575757"}}>careers</span></Link>
            </li>
        </li>

        <li class="nav-item" id="nav-item">
            <li>
                <Link  class="nav-link" id="nav-link" to="/" ><span style={{color: "#575757"}}>contact</span></Link>
            </li>
        </li>


      </ul>
  
    </div>
    
  </nav>
  <p style={{color:"red"}}>Clone website created for job application purposes. <br></br></p>
  
  </div>
  
  </div>

    )
}