import React from "react";
import './styles/navbar.css'

function NavTabs(props) {
  return (
    <header className="header">
    <div className="main-menu">
        <nav className="navbar navbar-expand-lg  navbar-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" 
            data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>

            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
              <li className="nav-item">
        <a
          href="#home"
          onClick={() => props.handlePageChange("Home")}
          className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}> Home</a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => props.handlePageChange("Portfolio")}
          className={props.currentPage === "Portfolio" ? "nav-link active" : "nav-link"}>Portfolio</a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => props.handlePageChange("Contact")}
          className={props.currentPage === "Contact" ? "nav-link active" : "nav-link"}>Contact</a>
      </li>
      </ul>
      </div>     
      </nav>
    </div>
 </header>
  );
}

export default NavTabs;