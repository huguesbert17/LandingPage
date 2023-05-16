import React from "react";


const Navbar = (props) => {
    return <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Start Bootstrap</a>
      <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse" id="navbarCollapse">
        <ul className="navbar-nav ms-auto mb-2 mb-md-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
}
export default Navbar