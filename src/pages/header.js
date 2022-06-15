import React from "react";
import { useHistory } from "react-router-dom";

function Header() {
  let history = useHistory();
 
    return (
        <div>
        {/* ======= Header ======= */}
        <header id="header" className="fixed-top d-flex align-items-cente">
          <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
            <a href="index.html" className="logo me-auto me-lg-0">
              <img src="images\pngegg.png" alt="" className="img-fluid" />
            </a>
            <h1 className="logo me-auto me-lg-0">
              <a href="index.html">Golden Chef</a>
            </h1>
            <nav id="navbar" className="navbar order-last order-lg-0">
              <ul>
                <li>
                  <div className="input-group">
                    <input
                      type="search"
                      className="form-control-sm rounded"
                      placeholder="Search for Recipe"
                      aria-label="Search"
                      aria-describedby="search-addon"
                    />
                    <button type="button" className="book-a-table-btn btn">
                      search
                    </button>
                  </div>
                </li>
                <li>
                  <a className="nav-link scrollto active" href="#hero">
                    Home
                  </a>
                </li>
                <li>
                  <a className="nav-link scrollto" href="#why-us">
                    Recipe
                  </a>
                </li>
                {/*<li><a class="nav-link scrollto" href="#menu">Menu</a></li>*/}
                {/* <li>
                  <a className="nav-link scrollto" href="#specials">
                    Specials
                  </a>
                </li> */}
                {/*<li><a class="nav-link scrollto" href="#events">Events</a></li>*/}
                <li>
                  <a className="nav-link scrollto" href="#chefs">
                    Chefs
                  </a>
                </li>
                {/* <li>
                  <a className="nav-link scrollto" href="#gallery">
                    Gallery
                  </a>
                </li>
                <li className="dropdown">
                  <a href="#">
                    <span>Profile</span> <i className="bi bi-chevron-down" />
                  </a>
                  <ul>
                    <li>
                      <a href="#">View my Recipe</a>
                    </li>
                    <li>
                      <a href="#">View my Shopping List</a>
                    </li>
                    <li>
                      <a href="#">View my Favourite Recipe</a>
                    </li>
                    <hr className="dropdown-divider" />
                    <li>
                      <a href="#">Edit Profile</a>
                    </li>
                  </ul>
                </li> */}
                <li className="dropdown">
                  <a href="#">
                    <span>Login / Sign Up</span>{" "}
                    <i className="bi bi-chevron-down" />
                  </a>
                  <ul>
                    <li>
                      <a data-bs-toggle="modal" data-bs-target="#modalForm">
                        Login
                      </a>
                    </li>
                    {/* href="Login Pages\sign.html"  */}
                    <li>
                      <a data-bs-toggle="modal" data-bs-target="#modalFormS">
                        Sign up
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="nav-link scrollto" href="#contact">
                    Contact
                  </a>
                </li>
                <li>
                  <div className="nav-item">
                    <a
                      className="nav-link"
                      
                      tabIndex={-1}
                      // aria-disabled="true"
                      // onClick={history.push("/")}
                      // onChange={window.location.assign('/')}
                    >
                      Log out
                    </a>
                  </div>
                </li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle" />
            </nav>
            {/* .navbar */}
            {/*<a href="#book-a-table" class="book-a-table-btn scrollto d-none d-lg-flex">Book a table</a>*/}
          </div>
        </header>
        {/* End Header */}
        {/*Modal Login Form*/}
        {/* <button type="button" class="btn btn-primary mx-auto d-block mt-5" data-bs-toggle="modal" data-bs-target="#modalForm">
              Bootstrap Modal popup
          </button> */}
        {/* Modal */}
        <div
          className="modal login fade"
          id="modalForm"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Bootstrap 5 Modal Form
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Email Address</label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      name="username"
                      placeholder="Username"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      placeholder="Password"
                    />
                  </div>
                  <div className="mb-3 form-check">
                    <p className="float-start">
                      <a href="#">Forget Your password?</a>
                    </p>
                  </div>
                  <div className="modal-footer d-block">
                    <p className="float-start">
                      <a data-bs-toggle="modal" data-bs-target="#modalFormS">
                        Don't have an account? Create account
                      </a>
                    </p>
                    <button type="submit" className="btn float-end">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/*Sign up */}
        </div>
    );
  }


export default Header;