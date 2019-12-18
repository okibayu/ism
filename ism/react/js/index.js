class navbarTop extends Component {
  render() {
    return (
      
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="navbar-brand">
          {/* Logo */}
          <a href="index.html" title="Electra Booking Engine">
            <img
              src="img/logo-AMOS.png"
              alt="Amos Tours"
              width="auto"
              height="50px"
            />
          </a>
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
              <a className="nav-link" href="#">
                Flight
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Hotel
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Train
              </a>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Booking Check
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fas fa-shopping-basket" /> Chart (0)
              </a>
            </li>
            <li className="dropdown nav-item">
              <a
                aria-haspopup="true"
                type="text"
                href="#"
                className="nav-link"
                data-toggle="dropdown"
                aria-expanded="false"
                id="language"
              >
                <i className="fas fa-globe" /> EN
              </a>
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
              <a
                aria-haspopup="true"
                type="text"
                href="#"
                className="nav-link"
                data-toggle="dropdown"
                aria-expanded="false"
                id="login"
              >
                <i className="fas fa-user"> </i> Login/ Register
              </a>
              <div
                tabIndex={-1}
                role="menu"
                aria-hidden="true"
                className="dropdown-menu"
                aria-labeldby="login"
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
                  <a className="dropdown-item" href="#">
                    New around here? Sign up
                  </a>
                  <a className="dropdown-item" href="#">
                    Forgot password?
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
};

ReactDOM.render(< navbarTop />, document.getElementById('header'));
