        import React from "react";
        import logo from "./../logo.png"
        import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
        import { faBars } from '@fortawesome/free-solid-svg-icons'


        const Navbar = () => {
            return (
              <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container">
          <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo.."/></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            {/* <span className="navbar-toggler-icon"></span> */}
            <FontAwesomeIcon icon={faBars} style={{color: "#fff"}}/>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#Home">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Photography">Photography</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Blog">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Travel">Travel</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Contact">Contact</a>
              </li>
              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li> */}
            </ul>
          </div>
          </div>
        </nav>
            )
        }

        export default Navbar
