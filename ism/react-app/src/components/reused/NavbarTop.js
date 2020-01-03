import React from 'react'
import {NavLink} from "react-router-dom";

class NavbarTop extends React.Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="navbar-brand">
            {/* Logo */}
            <NavLink to="/" title="Electra Booking Engine">
              <img
                src="img/logo-AMOS.png"
                alt="Amos Tours"
                width="auto"
                height="50px"
              />
            </NavLink>
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
                <NavLink to="/flights" className="nav-link">
                  Flight
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/hotels" className="nav-link">
                    Hotel
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/trains" className="nav-link">
                    Train
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="booked" className="nav-link">
                  Booking Check
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/chart" className="nav-link">
                  <i className="fas fa-shopping-basket" /> Chart (0)
                </NavLink>
              </li>
              <li className="dropdown nav-item">
                <NavLink to={{hash: "", pathname: "#", search: "", state: null}}
                  aria-haspopup="true"
                  type="text"
                  className="nav-link"
                  data-toggle="dropdown"
                  aria-expanded="false"
                  id="language"
                >
                  <i className="fas fa-globe" /> EN
                </NavLink>
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
                <NavLink to={{hash: "", pathname: "#", search: "", state: null}}
                  aria-haspopup="true"
                  type="text"
                  className="nav-link"
                  data-toggle="dropdown"
                  aria-expanded="false"
                  id="login"
                >
                  <i className="fas fa-user"></i> Login/ Register
                </NavLink>
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
                    <a className="dropdown-item">
                      New around here? Sign up
                    </a>
                    <a className="dropdown-item">
                      Forgot password?
                    </a>
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