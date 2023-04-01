import React, { Component } from "react"; // <-created using imrc shortcut
import "./navBar.css";
import "bootstrap/dist/js/bootstrap.bundle"
import {Link} from "react-router-dom";
class NavBar extends Component {
  //<- created using cc shortcut

  state = {};
  render() {
    return (
      
      <nav className="navbar navbar-dark fixed-top" style={{ backgroundColor: '#43345e'}}>
  <div className="container-fluid">
    <Link className="brand" to="/#">Faux<font className="logo" size="4">M</font>erch</Link>
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
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/catalog">Catalog</Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </Link>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li><Link className="dropdown-item" to="/">Home</Link></li>
              <li><Link className="dropdown-item" to="/catalog">Catalog</Link></li>
              <li>
                <hr className="dropdown-divider"></hr>
              </li>
              <li><Link className="dropdown-item" to="/about">About Us</Link></li>
              <li><Link className="dropdown-item" to="/admin">Admin</Link></li>
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
