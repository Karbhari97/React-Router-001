import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
function Nav() {
  return (
    <div id="nav-container">
      <div id="icons">
        <div
          style={{
            display: "flex",
            textDecoration: "underline",
            marginRight: "20px",
          }}
        >
          <i class="bi bi-telephone-fill"></i>&nbsp;<p>8956745896</p>
        </div>
        <div
          style={{
            display: "flex",
            textDecoration: "underline",
            marginRight: "20px",
          }}
        >
          <i class="bi bi-envelope"></i>&nbsp;<p>enquiry@urbensciencemep.com</p>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/Home">
            <img
              src="https://www.urbansciencemep.com/_next/static/images/blackLogo-10fc2f582f155efcc2c792a97edc1f33.png"
              alt="Brand"
              width={130}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Home">
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link active" to="/About">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Project">
                  Project
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle active"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Service
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/Building">
                      Building Service
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Fire">
                      Fire Service
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Fabricated">
                      Fabricated System
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <button className="btn btn-primary">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/Enquire"
                    id="enquire"
                  >
                    Enquire Now
                  </Link>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
