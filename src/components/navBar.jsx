import React, { Component } from "react"; // <-created using imrc shortcut
import "./navBar.css";
import "bootstrap/dist/js/bootstrap.bundle"
class NavBar extends Component {
  //<- created using cc shortcut

  state = {};
  render() {
    return (
      <nav className="navbar navbar-dark fixed-top" style={{ backgroundColor: '#43345e'}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/#">Fauxmerch</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Fauxmerch</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#">Catalog</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li><a className="dropdown-item" href="/#">Action</a></li>
              <li><a className="dropdown-item" href="/#">Another action</a></li>
              <li>
                <hr className="dropdown-divider"></hr>
              </li>
              <li><a className="dropdown-item" href="/#">Something else here</a></li>
            </ul>      
          </li>
        </ul>
        <form className="d-flex mt-3" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
          <button className="btn btn-white" type="submit" style={{ backgroundColor: '#674e96'}}>Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
    );
  }
}

export default NavBar;
