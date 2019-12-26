import React, {Component} from 'react';

class SearchForm extends React.Component {
  render() {
    return (
      <section className="train-section">
        <div id="search-form" className="container pb-1">
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
                        <input id="flightTravellersClass" type="text" className="travellers-class-input form-control" name="flight-travellers-class" placeholder="Travellers, Class" readOnly="" required="" onKeyPress={{return: false }}/>                  
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
        </div>
      </section>
    )
  }
}

export default SearchForm