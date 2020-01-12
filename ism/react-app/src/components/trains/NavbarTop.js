import React from 'react';
import {Link} from 'react-router-dom';
import logo from 'logo.svg';

class NavbarTop extends React.Component {

  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="navbar-brand">
            {/* Logo */}
            <Link to="/" title="Electra Booking Engine">
              <img
                src={logo}
                alt="Logo Title"
                width="auto"
                height={50}
              />
            </Link>
            {/* Logo end */}
          </div>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-toggle="collapse"
            data-target="#menu"
          >
            <span />
            <span />
            <span />
          </button>
          <div className="collapse navbar-collapse" id="menu">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/flights">
                  Flight
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/hotels">
                  Hotel
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/trains">
                  Train
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/booked">
                  Booking Check
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/chart">
                  <i className="fas fa-shopping-basket" /> Chart (0)
                </Link>
              </li>
              <li className="dropdown nav-item">
                <Link
                  to=""
                  aria-haspopup="true"
                  type="text"
                  className="nav-link"
                  data-toggle="dropdown"
                  aria-expanded="false"
                  id="language"
                >
                  <i className="fas fa-globe" /> EN
                </Link>
                <div
                  tabIndex={-1}
                  role="menu"
                  aria-hidden="true"
                  className="dropdown-menu"
                  aria-labelledby="language"
                >
                  <button
                    type="button"
                    tabIndex={0}
                    className="dropdown-item active"
                  >
                    English (EN)
                  </button>
                  <button type="button" tabIndex={0} className="dropdown-item">
                    Bahasa (ID)
                  </button>
                </div>
              </li>
              <li className="dropdown nav-item">
                <Link
                  aria-haspopup="true"
                  type="text"
                  className="nav-link"
                  data-toggle="dropdown"
                  aria-expanded="false"
                  id="login"
                >
                  <i className="fas fa-user"></i> Login/ Register
                </Link>
                <div
                  tabIndex={-1}
                  role="menu"
                  aria-hidden="true"
                  className="dropdown-menu"
                  aria-labelledby="login"
                >
                  <div className="login-form">
                    <form className="pt-2 pb-1">
                      <div className="form-group">
                        <strong>Login to my account</strong>
                        <label htmlFor="email">Email address</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="email@example.com"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          placeholder="Password"
                        />
                      </div>
                      <div className="form-group">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="dropdownCheck"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="dropdownCheck"
                          >
                            Remember me
                          </label>
                        </div>
                      </div>
                      <button type="submit" className="btn btn-primary w-100">
                        Sign in
                      </button>
                    </form>
                    <div className="dropdown-divider" />
                    <Link 
                    to={{hash: "#", pathname: "", search: "", state: null}}
                    className="dropdown-item"
                    >
                      New around here? Sign up
                    </Link>
                    <Link 
                    to={{hash: "#", pathname: "", search: "", state: null}}
                    className="dropdown-item">
                      Forgot password?
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      )
  }
}

export default NavbarTop