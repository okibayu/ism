import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


export default function MenuTop() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="navbar-brand">
            {/* Logo */}
            <Link to="/" title="Electra Booking Engine">
              <img
                src="img/logo-AMOS.png"
                alt="Amos Tours"
                width="auto"
                height="50px"
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
                <Link to="/flights" className="nav-link">Flight</Link>
              </li>
              <li className="nav-item">
                <Link to="/hotels" className="nav-link">Hotels</Link>
              </li>
              <li className="nav-item">
                <Link to="/trains" className="nav-link">Trains</Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/booked" className="nav-link">Booking Check</Link>
              </li>
              <li className="nav-item">
                <Link to="/chart" className="nav-link">Chart (0)</Link>
              </li>
              <li className="dropdown nav-item">
                <Link to="#"
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
                <Link to="#"
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
                    <Link to="#" className="dropdown-item">
                      New around here? Sign up
                    </Link>
                    <Link to="#" className="dropdown-item">
                      Forgot password?
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>

        <Switch>
          <Route path="/">
            <IndexPage />
          </Route>
          <Route path="/flights">
            <FlightsPage />
          </Route>
          <Route path="/hotels">
            <HotelsPage />
          </Route>
          <Route path="/trains">
            <TrainsPage />
          </Route>
        </Switch>
    </Router>
  );
}



function IndexPage() {
  return <h1>This Index Page</h1>;
}

function FlightsPage() {
  return <h1>This Flight Page</h1>;
}

function HotelsPage() {
  return <h1>This Hotel Page</h1>;
}

function TrainsPage() {
  return <h1>This Train Page</h1>;
}