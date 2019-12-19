
class NavbarTop extends React.Component {
  render() {
    return (
      <div className="container">
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
                  <i className="fas fa-user"></i> Login/ Register
                </a>
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
      </div>
      );
  }
}

ReactDOM.render(<NavbarTop />, document.getElementById('header'));

class SliderTop extends React.Component {
  render() {
    return (
      <div className="owl-carousel owl-theme slideshow single-slider">
        <div className="item owl-caption" style={{backgroundImage: 'url(img/sliders/train.jpg)', backgroundPosition: 'center center', backgroundSize: 'cover', width: '100%', height: '500px'}}>
          <h1 className="animated fadeInDown">Train Booking Offers – Avail Best Deals</h1>
          <h4 className="animated fadeInUp">December Best deal Upto 10%
            <button className="btn-danger rounded">Book Now!</button>
          </h4>
          <div className="owl-back" />
        </div>
        <div className="item owl-caption" style={{backgroundImage: 'url(img/sliders/train5.png)', backgroundPosition: 'center center', backgroundSize: 'cover', width: '100%', height: '500px'}}>
          <h1 className="animated fadeInDown">Book Your Holiday Travel Early and Save</h1>
          <h4 className="animated fadeInUp">December Discount Upto 20%
            <button className="btn-danger rounded">Book Now!</button>
          </h4>
          <div className="owl-back" />
        </div>
        <div className="item owl-caption" style={{backgroundImage: 'url(img/sliders/train3.png)', backgroundPosition: 'center center', backgroundSize: 'cover', width: '100%', height: '500px'}}>
          <h1>Students Get a Fast Track to Savings</h1>
          <h4 className="animated fadeInUp">Save 25% on Travel in Jakarta and Bandung
            <button className="btn-danger rounded">Book Now!</button>
          </h4>
          <div className="owl-back" />
        </div>
      </div>
    );
  }
}

//ReactDOM.render(<SliderTop />, document.getElementById('slider'));

class SearchForm extends React.Component {
  render() {
    return (
    
    <div className="card">               
      <div className="card-header justify-content-lg-around-start pt-0 pb-0">
        <ul className="nav nav-fill" id="myTab" role="tablist">
          <li className="nav-item">
            <a className="nav-link" id="flight-tab" data-toggle="tab" href="#flight" role="tab" aria-controls="flight" aria-selected="false">
              <i className="fas fa-plane fa-lg" style={{transform: 'rotate(-45deg)'}} />
              <p>Flight</p>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="hotel-tab" data-toggle="tab" href="#hotel" role="tab" aria-controls="hotel" aria-selected="false">
              <i className="fas fa-hotel fa-lg" />
              <p>Hotel</p>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" id="train-tab" data-toggle="tab" href="#train" role="tab" aria-controls="train" aria-selected="true">
              <i className="fas fa-train fa-lg" />
              <p>Train</p>
            </a>
          </li>
        </ul>
      </div>           
      <div className="card-body tab-content" id="myTabContent">
        {/* Search Flight */}
        <div className="tab-pane fade" id="flight" role="tabpanel" aria-labelledby="flight-tab">
          <div className="bg-light">
            <h2 className="text-4 mb-3">Book Domestic and International Flights</h2>
            <form id="bookingFlight" method="post">
              <div className="mb-3">
                <div className="custom-control custom-radio custom-control-inline">
                  <input id="oneway" name="flight-trip" className="custom-control-input" defaultChecked required type="radio" />
                  <label className="custom-control-label" htmlFor="oneway">One Way</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input id="roundtrip" name="flight-trip" className="custom-control-input" required type="radio" />
                  <label className="custom-control-label" htmlFor="roundtrip">Round Trip</label>
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-6 col-lg-3 form-group">
                  <input type="text" className="form-control" id="flightFrom" required placeholder="From" />
                  <span className="icon-inside"><i className="fas fa-map-marker-alt" /></span>
                </div>
                <div className="col-md-6 col-lg-3 form-group">
                  <input type="text" className="form-control" id="flightTo" required placeholder="To" />
                  <span className="icon-inside"><i className="fas fa-map-marker-alt" /></span>
                </div>
                <div className="col-md-12 col-lg-6 form-group">
                  <input id="airlines" type="text" className="form-control" required placeholder="Airlines" />
                  <span className="icon-inside"><i className="fas fa-plane fa-lg" /></span>
                </div>
                <div className="col-md-6 col-lg-3 form-group">
                  <input id="flightDepart" type="text" className="form-control" required placeholder="Depart Date" />
                  <span className="icon-inside"><i className="far fa-calendar-alt" /></span>
                </div>
                <div className="col-md-6 col-lg-3 form-group">
                  <input id="flightReturn" type="text" className="form-control" required placeholder="Return Date" />
                  <span className="icon-inside"><i className="far fa-calendar-alt" /></span>
                </div>
                <div className="col-md-6 col-lg-6 travellers-class form-group">
                  <input type="text" id="flightTravellersClass" className="travellers-class-input form-control" name="flight-travellers-class" placeholder="Travellers, Class" readOnly="" required="" onKeyPress={{return: false }}/>                  
                  <span className="icon-inside"><i className="fas fa-caret-down" /></span>
                  <div className="travellers-dropdown" style={{display: 'none'}}>
                    <div className="row align-items-center">
                      <div className="col-sm-6">
                        <p className="mb-sm-0">Adults <small className="text-muted">(12+ yrs)</small></p>
                      </div>
                      <div className="col-sm-6">
                        <div className="qty input-group">
                          <div className="input-group-prepend">
                            <button type="button" className="btn bg-light-4" data-value="decrease" data-target="#flightAdult-travellers" data-toggle="spinner">-</button>
                          </div>
                          <input type="text" data-ride="spinner" id="flightAdult-travellers" className="qty-spinner form-control" defaultValue={1} readOnly />
                          <div className="input-group-append">
                            <button type="button" className="btn bg-light-4" data-value="increase" data-target="#flightAdult-travellers" data-toggle="spinner">+</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="my-2" />
                    <div className="row align-items-center">
                      <div className="col-sm-6">
                        <p className="mb-sm-0">Children <small className="text-muted">(2-12 yrs)</small></p>
                      </div>
                      <div className="col-sm-6">
                        <div className="qty input-group">
                          <div className="input-group-prepend">
                            <button type="button" className="btn bg-light-4" data-value="decrease" data-target="#flightChildren-travellers" data-toggle="spinner">-</button>
                          </div>
                          <input type="text" data-ride="spinner" id="flightChildren-travellers" className="qty-spinner form-control" defaultValue={0} readOnly />
                          <div className="input-group-append">
                            <button type="button" className="btn bg-light-4" data-value="increase" data-target="#flightChildren-travellers" data-toggle="spinner">+</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="my-2" />
                    <div className="row align-items-center">
                      <div className="col-sm-6">
                        <p className="mb-sm-0">Infants <small className="text-muted">(Below 2 yrs)</small></p>
                      </div>
                      <div className="col-sm-6">
                        <div className="qty input-group">
                          <div className="input-group-prepend">
                            <button type="button" className="btn bg-light-4" data-value="decrease" data-target="#flightInfants-travellers" data-toggle="spinner">-</button>
                          </div>
                          <input type="text" data-ride="spinner" id="flightInfants-travellers" className="qty-spinner form-control" defaultValue={0} readOnly />
                          <div className="input-group-append">
                            <button type="button" className="btn bg-light-4" data-value="increase" data-target="#flightInfants-travellers" data-toggle="spinner">+</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="mt-2" />
                    <div className="mb-3">
                      <div className="custom-control custom-radio">
                        <input id="flightClassEconomic" name="flight-class" className="flight-class custom-control-input" defaultValue={0} defaultChecked required type="radio" />
                        <label className="custom-control-label" htmlFor="flightClassEconomic">Economic</label>
                      </div>
                      <div className="custom-control custom-radio">
                        <input id="flightClassPremiumEconomic" name="flight-class" className="flight-class custom-control-input" defaultValue={1} required type="radio" />
                        <label className="custom-control-label" htmlFor="flightClassPremiumEconomic">Premium</label>
                      </div>
                      <div className="custom-control custom-radio">
                        <input id="flightClassBusiness" name="flight-class" className="flight-class custom-control-input" defaultValue={2} required type="radio" />
                        <label className="custom-control-label" htmlFor="flightClassBusiness">Business</label>
                      </div>
                      <div className="custom-control custom-radio">
                        <input id="flightClassFirstClass" name="flight-class" className="flight-class custom-control-input" defaultValue={3} required type="radio" />
                        <label className="custom-control-label" htmlFor="flightClassFirstClass">First Class</label>
                      </div>
                    </div>
                    <button className="btn btn-primary btn-block submit-done" type="button">Done</button>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 form-group ml-auto">
                  <button className="btn btn-search btn-block" type="submit"><i className="fas fa-search" /> Search
                  </button>
                </div>
              </div>
            </form>            
          </div>
        </div>
        {/* Search Flight end */}         
        {/* Search Hotel */}
        <div className="tab-pane fade" id="hotel" role="tabpanel" aria-labelledby="hotel-tab">
          <div className="bg-light">
            <h2 className="text-4 mb-3">Book Domestic and International Hotels</h2>
            <form id="bookingHotels" method="post">
              <div className="form-row">
                <div className="col-md-12 col-lg-6 form-group">
                  <input type="text" className="form-control" id="hotelsFrom" required placeholder="Enter City/Hotel" />
                  <span className="icon-inside"><i className="fas fa-map-marker-alt" /></span> </div>
                <div className="col-md-6 col-lg-3 form-group">
                  <input id="hotelsCheckIn" type="text" className="form-control" required placeholder="Check In" />
                  <span className="icon-inside"><i className="far fa-calendar-alt" /></span> </div>
                <div className="col-md-6 col-lg-3 form-group">
                  <input id="hotelsCheckOut" type="text" className="form-control" required placeholder="Check Out" />
                  <span className="icon-inside"><i className="far fa-calendar-alt" /></span> </div>
                <div className="col-md-6 col-lg-6 travellers-class form-group">
                  <input type="text" id="hotelsTravellersClass" className="travellers-class-input form-control" name="hotels-travellers-class" placeholder="Rooms / People" required onkeypress="return false;" />
                  <span className="icon-inside"><i className="fas fa-caret-down" /></span>
                  <div className="travellers-dropdown">
                    <div className="row align-items-center">
                      <div className="col-sm-7">
                        <p className="mb-sm-0">Rooms</p>
                      </div>
                      <div className="col-sm-5">
                        <div className="qty input-group">
                          <div className="input-group-prepend">
                            <button type="button" className="btn bg-light-4" data-value="decrease" data-target="#hotels-rooms" data-toggle="spinner">-</button>
                          </div>
                          <input type="text" data-ride="spinner" id="hotels-rooms" className="qty-spinner form-control" defaultValue={1} readOnly />
                          <div className="input-group-append">
                            <button type="button" className="btn bg-light-4" data-value="increase" data-target="#hotels-rooms" data-toggle="spinner">+</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="mt-2 mb-4" />
                    <div className="row align-items-center">
                      <div className="col-sm-7">
                        <p className="mb-sm-0">Adults <small className="text-muted">(12+ yrs)</small></p>
                      </div>
                      <div className="col-sm-5">
                        <div className="qty input-group">
                          <div className="input-group-prepend">
                            <button type="button" className="btn bg-light-4" data-value="decrease" data-target="#adult-travellers" data-toggle="spinner">-</button>
                          </div>
                          <input type="text" data-ride="spinner" id="adult-travellers" className="qty-spinner form-control" defaultValue={1} readOnly />
                          <div className="input-group-append">
                            <button type="button" className="btn bg-light-4" data-value="increase" data-target="#adult-travellers" data-toggle="spinner">+</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="my-2" />
                    <div className="row align-items-center">
                      <div className="col-sm-7">
                        <p className="mb-sm-0">Children <small className="text-muted">(1-12 yrs)</small></p>
                      </div>
                      <div className="col-sm-5">
                        <div className="qty input-group">
                          <div className="input-group-prepend">
                            <button type="button" className="btn bg-light-4" data-value="decrease" data-target="#children-travellers" data-toggle="spinner">-</button>
                          </div>
                          <input type="text" data-ride="spinner" id="children-travellers" className="qty-spinner form-control" defaultValue={0} readOnly />
                          <div className="input-group-append">
                            <button type="button" className="btn bg-light-4" data-value="increase" data-target="#children-travellers" data-toggle="spinner">+</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="btn btn-primary btn-block submit-done mt-3" type="button">Done</button>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 form-group">
                  <button className="btn btn-search btn-block" type="submit"><i className="fas fa-search" /> Search</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* Search Hotel end */}
        {/* Search Train */}
        <div className="tab-pane fade show active" id="train" role="tabpanel" aria-labelledby="train-tab">
          <div className="bg-light">
            <h2 className="text-4 mb-3">Book Train Tickets</h2>
            <form id="bookingTrain" method="post">
              <div className="mb-3">
                <div className="custom-control custom-radio custom-control-inline">
                  <input id="train-oneway" name="train-trip" className="custom-control-input" defaultChecked required type="radio" />
                  <label className="custom-control-label" htmlFor="train-oneway">One Way</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input id="train-roundtrip" name="train-trip" className="custom-control-input" required type="radio" />
                  <label className="custom-control-label" htmlFor="train-roundtrip">Round Trip</label>
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-6 col-lg-6 form-group">
                  <input type="text" className="form-control" id="trainFrom" required placeholder="From" />
                  <span className="icon-inside"><i className="fas fa-map-marker-alt" /></span>
                </div>
                <div className="col-md-6 col-lg-6 form-group">
                  <input type="text" className="form-control" id="trainTo" required placeholder="To" />
                  <span className="icon-inside"><i className="fas fa-map-marker-alt" /></span>
                </div>
                <div className="col-md-6 col-lg-6 form-group">
                  <input id="trainsDepart" type="text" className="form-control" required placeholder="Depart Date" />
                  <span className="icon-inside"><i className="far fa-calendar-alt" /></span>
                </div>
                <div className="col-md-6 col-lg-6 form-group">
                  <input id="trainsReturn" type="text" className="form-control" required placeholder="Return Date" />
                  <span className="icon-inside"><i className="far fa-calendar-alt" /></span>
                </div>
                <div className="col-md-6 col-lg-6 travellers-class form-group">
                  <input 
                    id="trainTravellersClass" 
                    className="travellers-class-input form-control" 
                    type="text" 
                    name="train-travellers-class" 
                    placeholder="Travellers, Class" 
                    readonly="" 
                    required="" 
                    onkeypress="return=false;" 
                  />
                  <span className="icon-inside"><i className="fas fa-caret-down" /></span>
                  <div className="travellers-dropdown">
                    <div className="row align-items-center">
                      <div className="col-sm-7">
                        <p className="mb-sm-0">Adults <small className="text-muted">(12+ yrs)</small></p>
                      </div>
                      <div className="col-sm-5">
                        <div className="qty input-group">
                          <div className="input-group-prepend">
                            <button type="button" className="btn bg-light-4" data-value="decrease" data-target="#trainAdult-travellers" data-toggle="spinner">-</button>
                          </div>
                          <input type="text" data-ride="spinner" id="trainAdult-travellers" className="qty-spinner form-control" defaultValue={1} readOnly />
                          <div className="input-group-append">
                            <button type="button" className="btn bg-light-4" data-value="increase" data-target="#trainAdult-travellers" data-toggle="spinner">+</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="my-2" />
                    <div className="row align-items-center">
                      <div className="col-sm-7">
                        <p className="mb-sm-0">Children <small className="text-muted">(2-12 yrs)</small></p>
                      </div>
                      <div className="col-sm-5">
                        <div className="qty input-group">
                          <div className="input-group-prepend">
                            <button type="button" className="btn bg-light-4" data-value="decrease" data-target="#trainChildren-travellers" data-toggle="spinner">-</button>
                          </div>
                          <input type="text" data-ride="spinner" id="trainChildren-travellers" className="qty-spinner form-control" defaultValue={0} readOnly />
                          <div className="input-group-append">
                            <button type="button" className="btn bg-light-4" data-value="increase" data-target="#trainChildren-travellers" data-toggle="spinner">+</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="my-2" />
                    <div className="row align-items-center">
                      <div className="col-sm-7">
                        <p className="mb-sm-0">Infants <small className="text-muted">(Below 2 yrs)</small></p>
                      </div>
                      <div className="col-sm-5">
                        <div className="qty input-group">
                          <div className="input-group-prepend">
                            <button type="button" className="btn bg-light-4" data-value="decrease" data-target="#trainInfants-travellers" data-toggle="spinner">-</button>
                          </div>
                          <input type="text" data-ride="spinner" id="trainInfants-travellers" className="qty-spinner form-control" defaultValue={0} readOnly />
                          <div className="input-group-append">
                            <button type="button" className="btn bg-light-4" data-value="increase" data-target="#trainInfants-travellers" data-toggle="spinner">+</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group mt-3">
                      <select id="train-class" name="train-class" className="custom-select">
                        <option value={0}>All Class</option>
                        <option value={1}>First Class</option>
                        <option value={2}>Second Class</option>
                        <option value={3}>Business</option>
                      </select>
                    </div>
                    <button className="btn btn-primary btn-block submit-done" type="button">Done</button>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 form-group">
                  <button className="btn btn-search btn-block" type="submit"><i className="fas fa-search" /> Search</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* Search Train end*/}
      </div>
    </div>
    );
  }
}

ReactDOM.render(<SearchForm />, document.getElementById('search-form')); 

/* still developing with owl-carousel-react */
class PromoCard extends React.Component{
  render() {
    return (

      <div className="item justify-content-center">
        <div className="text-danger">This section is under construction</div>
      </div>

    // <OwlCarousel options={options}>
    //   <div className="item">
    //     <a href="#">
    //       <img className="img-fluid rounded" src="img/sliders/banner6.jpg" alt="banner 4" />
    //     </a>
    //   </div>
    //   <div className="item">
    //     <a href="#">
    //       <img className="img-fluid rounded" src="img/sliders/banner7.jpg" alt="banner 5" />
    //     </a>
    //   </div>
    //   <div className="item">
    //     <a href="#">
    //       <img className="img-fluid rounded" src="img/sliders/banner8.jpg" alt="banner 6" />
    //     </a>
    //   </div>
    //   <div className="item">
    //     <a href="#">
    //       <img className="img-fluid rounded" src="img/sliders/banner9.jpg" alt="banner 7" />
    //     </a>
    //   </div>
    //   <div className="item">
    //     <a href="#">
    //       <img className="img-fluid rounded" src="img/sliders/banner10.jpg" alt="banner 8" />
    //     </a>
    //   </div>
    // </OwlCarousel>
    );
  }
}

//ReactDOM.render(<PromoCard />, document.getElementById('promo-card'));


class WhyBook extends React.Component {
  render () {
    return (
      
      <div className="container">
        <h2 className="text-9 font-weight-600 text-center">Why Book Train with Us?</h2>
        <p className="lead mb-5 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <div className="row">
          <div className="col-md-4">
            <div className="featured-box text-center">
              <div className="featured-box-icon text-primary"> <i className="fas fa-dollar-sign" /> </div>
              <h3>No Booking Charges</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing!</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="featured-box text-center">
              <div className="featured-box-icon text-primary"> <i className="fas fa-percentage" /> </div>
              <h3>Cheapest Price</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="featured-box text-center">
              <div className="featured-box-icon text-primary"> <i className="far fa-times-circle" /> </div>
              <h3>Easy Cancellation &amp; Refunds</h3>
              <p>Lorem ipsum dolor sit consectetur adipisicing elit sed do!</p>
            </div>
          </div>
        </div>
      </div>
      );
  }
}

ReactDOM.render(<WhyBook />, document.getElementById('why-book'));

class PopularTrain extends React.Component {
  render() {
    return (

    <div className="container">
      <div className="row">
        <div className="col-lg-6">
        <h3 className="text-6 mb-4">Popular Train from Jakarta</h3>
         <div className="border-0 shadow-sm rounded p-4">
            <p className="d-flex align-items-center">
            Jakarta to Surabaya 
              <a href="#" className="btn btn-sm btn-outline-search shadow-none ml-auto">
              <i className="fas fa-search d-block d-sm-none"></i> 
              <span className="d-none d-sm-block">Search Trains</span>
              </a>
            </p>
            <hr />
            <p className="d-flex align-items-center">Jakarta to Yogjakarta<a href="#" className="btn btn-sm btn-outline-search shadow-none ml-auto"><i className="fas fa-search d-block d-sm-none"></i> <span className="d-none d-sm-block">Search Trains</span></a></p>
            <hr />
            <p className="d-flex align-items-center">Jakarta to Semarang <a href="#" className="btn btn-sm btn-outline-search shadow-none ml-auto"><i className="fas fa-search d-block d-sm-none"></i> <span className="d-none d-sm-block">Search Trains</span></a></p>
            <hr />
            <p className="d-flex align-items-center">Jakarta to Malang <a href="#" className="btn btn-sm btn-outline-search shadow-none ml-auto"><i className="fas fa-search d-block d-sm-none"></i> <span className="d-none d-sm-block">Search Trains</span></a></p>
            <hr />
            <p className="d-flex align-items-center">Jakarta to Cirebon <a href="#" className="btn btn-sm btn-outline-search shadow-none ml-auto"><i className="fas fa-search d-block d-sm-none"></i> <span className="d-none d-sm-block">Search Trains</span></a></p>
            <hr />
            <p className="text-center mb-0"><a href="#" className="d-inline-block">View All</a></p>
          </div>
        </div>
        <div className="col-lg-6 mt-4 mt-lg-0">
          <h3 className="text-6 mb-4">Popular Train to Jakarta</h3>
          <div className="border-0 shadow-sm rounded p-4">
            <p className="d-flex align-items-center">Surabaya to Jakarta <a href="#" className="btn btn-sm btn-outline-search shadow-none ml-auto"><i className="fas fa-search d-block d-sm-none"></i> <span className="d-none d-sm-block">Search Trains</span></a></p>
            <hr />
            <p className="d-flex align-items-center">Malang to Jakarta <a href="#" className="btn btn-sm btn-outline-search shadow-none ml-auto"><i className="fas fa-search d-block d-sm-none"></i> <span className="d-none d-sm-block">Search Trains</span></a></p>
            <hr />
            <p className="d-flex align-items-center">Yogjakarta to Jakarta <a href="#" className="btn btn-sm btn-outline-search shadow-none ml-auto"><i className="fas fa-search d-block d-sm-none"></i> <span className="d-none d-sm-block">Search Trains</span></a></p>
            <hr />
            <p className="d-flex align-items-center">Semarang to Jakarta <a href="#" className="btn btn-sm btn-outline-search shadow-none ml-auto"><i className="fas fa-search d-block d-sm-none"></i> <span className="d-none d-sm-block">Search Trains</span></a></p>
            <hr />
            <p className="d-flex align-items-center">Cirebon to Jakarta <a href="#" className="btn btn-sm btn-outline-search shadow-none ml-auto"><i className="fas fa-search d-block d-sm-none"></i> <span className="d-none d-sm-block">Search Trains</span></a></p>
            <hr />
            <p className="text-center mb-0"><a href="#" className="d-inline-block">View All</a></p>
          </div>
        </div>
      </div>
     </div>
    );
  }
}

ReactDOM.render(<PopularTrain />, document.getElementById('popular'));

class Referer extends React.Component {
  render() {
    return (
    
    <section className="text-light shadow-md pt-5 pb-5"
      style={{
        backgroundImage: 'url("img/sliders/rewards.png")',
        opacity: 1,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "soft-light"
      }}
    >
      <div className="container">
        <h2 className="text-9 text-light font-weight-600 text-center">
          Refer &amp; Earn
        </h2>
        <p className="lead text-center mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing $100.
        </p>
        <div className="row">
          <div className="col-md-4">
            <div className="featured-box style-4">
              <div className="featured-box-icon bg-warning text-light rounded-circle">
                {" "}
                <i className="fas fa-bullhorn" />{" "}
              </div>
              <h3 className="text-light">You Refer Friends</h3>
              <p className="text-3 opacity-8">
                Lorem ipsum dolor sit amet $30, consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="col-md-4 mt-4 mt-md-0">
            <div className="featured-box style-4">
              <div className="featured-box-icon bg-info text-light rounded-circle">
                {" "}
                <i className="fas fa-sign-in-alt" />{" "}
              </div>
              <h3 className="text-light">Your Friends Register</h3>
              <p className="text-3 opacity-8">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit $50!
              </p>
            </div>
          </div>
          <div className="col-md-4 mt-4 mt-md-0">
            <div className="featured-box style-4">
              <div className="featured-box-icon bg-success text-light rounded-circle">
                {" "}
                <i className="fas fa-dollar-sign" />{" "}
              </div>
              <h3 className="text-light">Earn You</h3>
              <p className="text-3 opacity-8">
                Lorem ipsum dolor sit amet, consectetur $20 adipisicing.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center pt-4">
          {" "}
          <a href="#" className="btn btn-outline-light">
            Get Started Earn
          </a>{" "}
        </div>
      </div>
    </section>

    );
  }
}

ReactDOM.render(<Referer />, document.getElementById('refer'));

class TrainPartner extends React.Component {
  render() {
    return (

    <div className="bg-light shadow-md p-5">
      <div className="container">
        <h3 className="text-6 mb-4 text-center">Our Affiliate partner</h3>
        <div className="text-center">
          <img
            className="img-fluid"
            src="img/sliders/kai.png"
            alt="KAI"
            style={{ width: 200 }}
          />
        </div>
      </div>
    </div>
    );
  }
}

ReactDOM.render(<TrainPartner />, document.getElementById('train-partner'));

class Footer extends React.Component {
   render() {
     return (
    <div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4 mb-3 mb-md-0">
            <p><strong>Payment Partner</strong></p>
            <ul className="payments-types">
              <li><a href="#" target="_blank"> <img data-toggle="tooltip" src="img/payments/visa.png" alt="visa" title="Visa" /></a></li>
              <li><a href="#" target="_blank"> <img data-toggle="tooltip" src="img/payments/discover.png" alt="discover" title="Discover" /></a></li>
              <li><a href="#" target="_blank"> <img data-toggle="tooltip" src="img/payments/paypal.png" alt="paypal" title="PayPal" /></a></li>
              <li><a href="#" target="_blank"> <img data-toggle="tooltip" src="img/payments/american.png" alt="american express" title="American Express" /></a></li>
              <li><a href="#" target="_blank"> <img data-toggle="tooltip" src="img/payments/mastercard.png" alt="discover" title="Discover" /></a></li>
            </ul>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <p><strong>Subscribe to our newsletter</strong></p>
            <div className="input-group newsletter">
              <input className="form-control" placeholder="Your Email Address" name="newsletterEmail" id="newsletterEmail" type="text" />
              <span className="input-group-append">
                <button className="btn btn-secondary" type="submit">Subscribe</button>
              </span> </div>
          </div>
          <div className="col-md-4 d-flex align-items-md-end flex-column">
            <p><strong>Keep in touch</strong></p>
            <ul className="social-icons">
              <li className="social-icons-facebook"><a data-toggle="tooltip" href="http://www.facebook.com/" target="_blank" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
              <li className="social-icons-linkedin"><a data-toggle="tooltip" href="http://www.linkedin.com/" target="_blank" title="Linkedin"><i className="fab fa-linkedin-in" /></a></li>
              <li className="social-icons-youtube"><a data-toggle="tooltip" href="http://www.youtube.com/" target="_blank" title="Youtube"><i className="fab fa-youtube" /></a></li>
              <li className="social-icons-instagram"><a data-toggle="tooltip" href="http://www.instagram.com/" target="_blank" title="Instagram"><i className="fab fa-instagram" /></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="footer-copyright">
          <ul className="nav justify-content-center">
            <li className="nav-item"> <a className="nav-link active" href="#">About Us</a> </li>
            <li className="nav-item"> <a className="nav-link" href="#">Faq</a> </li>
            <li className="nav-item"> <a className="nav-link" href="#">Contact</a> </li>
            <li className="nav-item"> <a className="nav-link" href="#">Support</a> </li>
            <li className="nav-item"> <a className="nav-link" href="#">Terms of Use</a> </li>
            <li className="nav-item"> <a className="nav-link" href="#">Privacy Policy</a> </li>
          </ul>
          <p className="copyright-text">Copyright © 2019. All Rights Reserved.</p>
        </div>
      </div>
    </div>
    );
  }
}

ReactDOM.render(<Footer />, document.getElementById('footer'));