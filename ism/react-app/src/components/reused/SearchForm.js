import React from 'react'
import { Button, Form, Nav, Tab } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { InputGroup } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown'
import { FormGroup } from 'react-bootstrap'
import FormCheck from 'react-bootstrap/FormCheck'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPlane, faCalendarAlt, faCaretDown } from '@fortawesome/free-solid-svg-icons'

class SearchForm extends React.Component {

  componentDidMount() {
    const $ = window.$;
    
    //Flights
    $('#flightTravellersClass').on('click', function() {
      $('.travellers-dropdown').slideToggle('fast');
    
    $('.qty-spinner, .flight-class').on('change', function() {
    var ids = ['flightAdult', 'flightChildren', 'flightInfants'];
    var totalCount = ids.reduce(function (prev, id) {
      return parseInt($('#' + id + '-travellers').val()) + prev}, 0);
      var fc = $('input[name="flight-class"]:checked  + label').text();
      $('#flightTravellersClass').val(totalCount + ' - ' + fc);
      }).trigger('change');
    });
    // End Flights

    // Hotels
    $('#hotelsTravellersClass').on('click', function() {
      $('.travellers-dropdown').slideToggle('fast');
    
    $('.qty-spinner').on('change', function() {
    var ids = ['adult', 'children'];
    var totalCount = ids.reduce(function (prev, id) {
      return parseInt($('#' + id + '-travellers').val()) + prev}, 0)+ 'People'; 
    var idsRoom = ['hotels-rooms'];
    var totalCountRoom = idsRoom.reduce(function (prev, id) {
      return parseInt($('#hotels-rooms').val()) + prev}, 0)+ 'Room';
      $('#hotelsTravellersClass').val(totalCountRoom + ' / ' + totalCount);
      }).trigger('change');
    });
    // End Hotels

    // Trains
    $('#trainTravellersClass').on('click', function() {
      $('.travellers-dropdown').slideToggle('fast');
    
    $('.qty-spinner, #train-class').on('change', function() {
      var ids = ['trainAdult', 'trainChildren', 'trainInfants'];
      var totalCount = ids.reduce(function (prev, id) {
        return parseInt($('#' + id + '-travellers').val()) + prev}, 0);
      var fc = $('#train-class option:selected').text();
      $('#trainTravellersClass').val(totalCount + ' - ' + fc);
      }).trigger('change');
    });
    // End Trains

    $(document).on('click', function(event) {
    if (!$(event.target).closest(".travellers-class").length) {
        $(".travellers-dropdown").hide();
      }
      $('.submit-done').on('click', function() {
          $('.travellers-dropdown').fadeOut(function() {
              $(this).hide();
          });
      });
    });

    this.$el = $(this.el);

    this.handleClick = this.handleClick;
    this.$el.on('click', this.handleClick);

    this.handleChange = this.handleChange;
    this.$el.on('change', this.handleChange);

    this.slideToggle = this.slideToggle;
    this.$el.slideToggle('fast', this.handleClick);

  }

  componentWillUnmount() {
    this.$el.off('change', this.handleChange);
    this.$el.off('click', this.handleClick);
  }

  render() {
    return (
    <section className="train-section">
      <Container id="search-form" className="container pb-1">
        <Tab.Container defaultActiveKey="train">
          <Card className="card">             
            <Card.Header className="justify-content-lg-around-start pt-0 pb-0">
              <Nav className="nav" id="myTab" role="tablist">
                <Nav.Item>
                  <Nav.Link eventKey="flight">
                    <i className="fas fa-plane fa-lg" style={{transform: 'rotate(-45deg)'}} />
                    <p>Flight</p>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="hotel">
                    <i className="fas fa-hotel fa-lg" />
                    <p>Hotel</p>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="train">
                    <i className="fas fa-train fa-lg" />
                    <p>Train</p>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>           
            <Card.Body className="p-4" id="myTabContent">
              {/* Search Flight */}
              <Tab.Content>
                <Tab.Pane eventKey="flight"
                  className="fade"
                >
                  <div className="bg-light">
                    <h2 className="text-4 mb-3">Book Domestic and International Flights</h2>
                    <Form id="bookingFlight" method="post">
                      <div className="mb-3">
                        <Form.Group id="bookflight">
                          <FormCheck 
                            id="oneway" 
                            defaultChecked 
                            name="selecttype"
                            custom
                            inline
                            label={'One Way'}
                            type={'radio'}
                          />
                          <FormCheck 
                            id="roundtrip"
                            name="selecttype"
                            custom
                            inline
                            label={'Round Trip'}
                            type={'radio'}
                          />
                        </Form.Group>
                      </div>
                      <Form.Row>
                        <Col md={6} lg={3}>
                          <Form.Group>
                            <Form.Control 
                            type="text"  
                            id="flightFrom" 
                            required 
                            placeholder="From" 
                            />
                            <span className="icon-inside">
                              <FontAwesomeIcon icon={faMapMarkerAlt} />
                            </span>
                          </Form.Group>
                        </Col>
                        <Col md={6} lg={3}>
                          <Form.Group>
                            <Form.Control 
                              type="text" 
                              id="flightTo" 
                              required 
                              placeholder="To"
                            />
                            <span className="icon-inside">
                              <FontAwesomeIcon icon={faMapMarkerAlt} />
                            </span>
                          </Form.Group>
                        </Col>
                        <Col md={12} lg={6}>
                          <Form.Group >
                            <Form.Control 
                              id="airlines" 
                              type="text" 
                              required 
                              placeholder="Airlines" 
                            />
                            <span className="icon-inside">
                              <FontAwesomeIcon icon={faPlane} />
                            </span>
                          </Form.Group>
                        </Col>
                        <Col md={6} lg={3}>
                          <Form.Group>
                            <Form.Control 
                              id="flightDepart" 
                              type="text" 
                              required 
                              placeholder="Depart Date" 
                            />
                            <span className="icon-inside">
                              <FontAwesomeIcon icon={faCalendarAlt} />
                            </span>
                          </Form.Group>
                        </Col>
                        <Col md={6} lg={3}>
                          <Form.Group>
                            <Form.Control 
                              id="flightReturn" 
                              type="text" 
                              required 
                              placeholder="Return Date" 
                            />
                            <span className="icon-inside">
                              <FontAwesomeIcon icon={faCalendarAlt} />
                            </span>
                          </Form.Group>
                        </Col>
                        <Col md={6} lg={6}>
                          <Form.Group className="travellers-class">
                            <Form.Control 
                              id="flightTravellersClass"
                              onClick={this.handleClick}
                              type="text" 
                              className="travellers-class-input" 
                              name="flight-travellers-class" 
                              placeholder="Travellers, Class" 
                              readOnly="" 
                              required="" 
                            />                  
                            <span className="icon-inside">
                              <FontAwesomeIcon icon={faCaretDown} />
                            </span>
                            <Dropdown className="travellers-dropdown" style={{display: 'none'}}>
                              <Row className="align-items-center">
                                <Col sm={6}>
                                  <p className="mb-sm-0">Adults <small className="text-muted">(12+ yrs)</small></p>
                                </Col>
                                <Col sm={6}>
                                  <InputGroup className="qty">
                                    <InputGroup.Prepend>
                                      <Button type="button" variant="light" data-value="decrease" data-target="#flightAdult-travellers" data-toggle="spinner">-</Button>
                                    </InputGroup.Prepend>
                                    <Form.Control type="text" data-ride="spinner" id="flightAdult-travellers" className="qty-spinner" defaultValue={1} readOnly />
                                    <InputGroup.Append>
                                      <Button type="button" variant="light" data-value="increase" data-target="#flightAdult-travellers" data-toggle="spinner">+</Button>
                                    </InputGroup.Append>
                                  </InputGroup>
                                </Col>
                              </Row>
                              <hr className="my-2" />
                              <Row className="align-items-center">
                                <Col sm={6}>
                                  <p className="mb-sm-0">Children <small className="text-muted">(2-12 yrs)</small></p>
                                </Col>
                                <Col sm={6}>
                                  <InputGroup className="qty">
                                    <InputGroup.Prepend>
                                      <Button type="button" variant="light" data-value="decrease" data-target="#flightChildren-travellers" data-toggle="spinner">-</Button>
                                    </InputGroup.Prepend>
                                    <Form.Control type="text" data-ride="spinner" id="flightChildren-travellers" className="qty-spinner" defaultValue={0} readOnly />
                                    <InputGroup.Append>
                                      <Button type="button" variant="light" data-value="increase" data-target="#flightChildren-travellers" data-toggle="spinner">+</Button>
                                    </InputGroup.Append>
                                  </InputGroup>
                                </Col>
                              </Row>
                              <hr className="my-2" />
                              <Row className="align-items-center">
                                <Col sm={6}>
                                  <p className="mb-sm-0">Infants <small className="text-muted">(Below 2 yrs)</small></p>
                                </Col>
                                <Col sm={6}>
                                  <InputGroup className="qty">
                                    <InputGroup.Prepend>
                                      <Button type="button" variant="light" data-value="decrease" data-target="#flightInfants-travellers" data-toggle="spinner">-</Button>
                                    </InputGroup.Prepend>
                                    <Form.Control 
                                      type="text" 
                                      data-ride="spinner" 
                                      id="flightInfants-travellers" 
                                      className="qty-spinner" 
                                      defaultValue={0} readOnly
                                    />
                                    <InputGroup.Append>
                                      <Button 
                                      type="button" 
                                      variant="light" 
                                      data-value="increase" 
                                      data-target="#flightInfants-travellers" 
                                      data-toggle="spinner"
                                      >
                                        +
                                      </Button>
                                    </InputGroup.Append>
                                  </InputGroup>
                                </Col>
                              </Row>
                              <hr className="mt-2" />
                              <div className="mb-3">
                                <Form.Group >
                                  <Form.Check
                                    className="flight-class"
                                    id="flightClassEconomic"
                                    name="flight-class"
                                    custom
                                    label="Economic"
                                    type="radio"
                                    defaultValue={0} 
                                    defaultChecked 
                                    required 
                                  />
                                  <Form.Check
                                    className="flight-class"
                                    id="flightClassPremium"
                                    name="flight-class"
                                    custom
                                    label="Premium"
                                    type="radio"
                                    defaultValue={1} 
                                    default 
                                    required 
                                  />
                                  <Form.Check   
                                    className="flight-class"
                                    id="flightClassBusiness"
                                    name="flight-class"
                                    custom
                                    label="Business"
                                    type="radio"
                                    defaultValue={2} 
                                    default 
                                    required 
                                  />
                                  <Form.Check   
                                    className="flight-class"
                                    id="flightClassFirst"
                                    name="flight-class"
                                    custom
                                    label="First Class"
                                    type="radio"
                                    defaultValue={3} 
                                    default 
                                    required 
                                  />
                                </Form.Group>
                              </div>
                              <Button 
                                className="btn btn-primary btn-block submit-done" 
                                type="button"
                              >
                                Done
                              </Button>
                            </Dropdown>
                          
                          </Form.Group >
                        </Col>
                        <Col md={6} lg={{ span: 6, offset: 6 }}>
                        <Form.Group>
                          <Button 
                          variant="warning"
                          className="btn-search btn-block" 
                          type="submit"
                          >
                          <i className="fas fa-search" /> 
                            Search
                          </Button>
                        </Form.Group>
                      </Col>
                      </Form.Row>
                    </Form>
                  </div>
                </Tab.Pane>
              </Tab.Content>
              {/* Search Hotel */}
              <Tab.Content>
                <Tab.Pane eventKey="hotel"
                  className="fade"
                >
                <div className="bg-light">
                  <h2 className="text-4 mb-3">Book Domestic and International Hotels</h2>
                  <Form id="bookingHotels" method="post">
                    <Form.Row>
                      <Col md={12} lg={6}>
                        <Form.Group>
                          <Form.Control type="text" id="hotelsFrom" required placeholder="Enter City/Hotel" />
                          <span className="icon-inside"><i className="fas fa-map-marker-alt" /></span> 
                        </Form.Group>
                        </Col>
                        <Col md={6} lg={3}>
                          <Form.Group>
                            <Form.Control id="hotelsCheckIn" type="text" required placeholder="Check In" />
                            <span className="icon-inside"><i className="far fa-calendar-alt" /></span> 
                          </Form.Group>
                        </Col>
                        <Col md={6} lg={3}>
                          <Form.Group>
                            <Form.Control id="hotelsCheckOut" type="text" required placeholder="Check Out" />
                            <span className="icon-inside"><i className="far fa-calendar-alt" /></span> 
                          </Form.Group>
                        </Col>
                        <Col md={6} lg={6}>
                          <Form.Group className="travellers-class">
                            <Form.Control type="text" 
                            id="hotelsTravellersClass" 
                            onClick={this.handleClick}
                            className="travellers-class-input" 
                            name="hotels-travellers-class" 
                            placeholder="Rooms / People" 
                            required=""
                            />
                            <span className="icon-inside"><i className="fas fa-caret-down" /></span>
                          </Form.Group>
                          <Dropdown className="travellers-dropdown">
                          <Row className="align-items-center">
                            <Col sm={7}>
                              <p className="mb-sm-0">Rooms</p>
                            </Col>
                            <Col sm={5}>
                              <InputGroup className="qty">
                                <InputGroup.Prepend>
                                  <Button type="button" className="btn bg-light-4" data-value="decrease" data-target="#hotels-rooms" data-toggle="spinner">-</Button>
                                </InputGroup.Prepend>
                                <Form.Control type="text" data-ride="spinner" id="hotels-rooms" className="qty-spinner" defaultValue={1} readOnly />
                                <InputGroup.Append className="input-group-append">
                                  <Button type="button" className="btn bg-light-4" data-value="increase" data-target="#hotels-rooms" data-toggle="spinner">+</Button>
                                </InputGroup.Append>
                              </InputGroup>
                            </Col>
                          </Row>
                          <hr className="mt-2 mb-4" />
                          <Row className="align-items-center">
                            <Col sm={7}>
                              <p className="mb-sm-0">Adults <small className="text-muted">(12+ yrs)</small></p>
                            </Col>
                            <Col sm={5}>
                              <InputGroup className="qty">
                                <InputGroup.Prepend>
                                  <Button type="button" className="btn bg-light-4" data-value="decrease" data-target="#adult-travellers" data-toggle="spinner">-</Button>
                                </InputGroup.Prepend>
                                <Form.Control type="text" data-ride="spinner" id="adult-travellers" className="qty-spinner form-control" defaultValue={1} readOnly />
                                <InputGroup.Append>
                                  <Button type="button" className="btn bg-light-4" data-value="increase" data-target="#adult-travellers" data-toggle="spinner">+</Button>
                                </InputGroup.Append>
                              </InputGroup>
                            </Col>
                          </Row>
                          <hr className="my-2" />
                          <Row className="row align-items-center">
                            <Col sm={7}>
                              <p className="mb-sm-0">Children <small className="text-muted">(1-12 yrs)</small></p>
                            </Col>
                            <Col sm={5}>
                              <InputGroup className="qty">
                                <InputGroup.Prepend>
                                  <Button type="button" className="btn bg-light-4" data-value="decrease" data-target="#children-travellers" data-toggle="spinner">-</Button>
                                </InputGroup.Prepend>
                                <Form.Control type="text" data-ride="spinner" id="children-travellers" className="qty-spinner form-control" defaultValue={0} readOnly />
                                <InputGroup.Append>
                                  <Button type="button" className="btn bg-light-4" data-value="increase" data-target="#children-travellers" data-toggle="spinner">+</Button>
                                </InputGroup.Append>
                              </InputGroup>
                            </Col>
                          </Row>
                          <Button className="btn btn-primary btn-block submit-done mt-3" type="button">Done</Button>
                        </Dropdown>
                        </Col>
                        <Col md={6} lg={6}>
                          <FormGroup>
                          <Button 
                          className="btn btn-search btn-block" 
                          type="submit"
                          >
                            <i className="fas fa-search" /> 
                            Search
                          </Button>
                        </FormGroup>
                        </Col>
                    </Form.Row>
                  </Form>
                </div>
                </Tab.Pane>
              </Tab.Content>
              {/* Search Train */}
              <Tab.Content>
                <Tab.Pane eventKey="train"
                  className="fade"
                >
                <div className="bg-light">
                  <h2 className="text-4 mb-3">Book Train Tickets</h2>
                  <Form id="bookingTrain" method="post">
                    <div className="mb-3">
                      <div className="custom-control custom-radio custom-control-inline">
                        <Form.Control id="train-oneway" name="train-trip" className="custom-control-input" defaultChecked required type="radio" />
                        <Form.Label className="custom-control-label" htmlFor="train-oneway">One Way</Form.Label>
                      </div>
                      <div className="custom-control custom-radio custom-control-inline">
                        <Form.Control id="train-roundtrip" name="train-trip" className="custom-control-input" required type="radio" />
                        <Form.Label className="custom-control-label" htmlFor="train-roundtrip">Round Trip</Form.Label>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="col-md-6 col-lg-6 form-group">
                        <Form.Control type="text" className="form-control" id="trainFrom" required placeholder="From" />
                        <span className="icon-inside"><i className="fas fa-map-marker-alt" /></span>
                      </div>
                      <div className="col-md-6 col-lg-6 form-group">
                        <Form.Control type="text" className="form-control" id="trainTo" required placeholder="To" />
                        <span className="icon-inside"><i className="fas fa-map-marker-alt" /></span>
                      </div>
                      <div className="col-md-6 col-lg-6 form-group">
                        <Form.Control id="trainsDepart" type="text" className="form-control" required placeholder="Depart Date" />
                        <span className="icon-inside"><i className="far fa-calendar-alt" /></span>
                      </div>
                      <div className="col-md-6 col-lg-6 form-group">
                        <Form.Control id="trainsReturn" type="text" className="form-control" required placeholder="Return Date" />
                        <span className="icon-inside"><i className="far fa-calendar-alt" /></span>
                      </div>
                      <div className="col-md-6 col-lg-6 travellers-class form-group">
                        <Form.Control 
                          id="trainTravellersClass" 
                          onClick={this.handleClick}
                          className="travellers-class-input form-control" 
                          type="text" 
                          name="train-travellers-class" 
                          placeholder="Travellers, Class" 
                          readOnly=""
                          required=""
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
                                  <Button type="button" className="btn bg-light-4" data-value="decrease" data-target="#trainAdult-travellers" data-toggle="spinner">-</Button>
                                </div>
                                <Form.Control type="text" data-ride="spinner" id="trainAdult-travellers" className="qty-spinner form-control" defaultValue={1} readOnly />
                                <div className="input-group-append">
                                  <Button type="button" className="btn bg-light-4" data-value="increase" data-target="#trainAdult-travellers" data-toggle="spinner">+</Button>
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
                                  <Button type="button" className="btn bg-light-4" data-value="decrease" data-target="#trainChildren-travellers" data-toggle="spinner">-</Button>
                                </div>
                                <Form.Control type="text" data-ride="spinner" id="trainChildren-travellers" className="qty-spinner form-control" defaultValue={0} readOnly />
                                <div className="input-group-append">
                                  <Button type="button" className="btn bg-light-4" data-value="increase" data-target="#trainChildren-travellers" data-toggle="spinner">+</Button>
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
                                  <Button type="button" className="btn bg-light-4" data-value="decrease" data-target="#trainInfants-travellers" data-toggle="spinner">-</Button>
                                </div>
                                <Form.Control type="text" data-ride="spinner" id="trainInfants-travellers" className="qty-spinner form-control" defaultValue={0} readOnly />
                                <div className="input-group-append">
                                  <Button type="button" className="btn bg-light-4" data-value="increase" data-target="#trainInfants-travellers" data-toggle="spinner">+</Button>
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
                          <Button className="btn btn-primary btn-block submit-done" type="button">Done</Button>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-6 form-group">
                        <Button 
                        className="btn btn-search btn-block" 
                        type="submit"
                        >
                          <i className="fas fa-search" /> 
                          Search
                        </Button>
                      </div>
                    </div>
                  </Form>
                </div>
                </Tab.Pane>
              </Tab.Content>
            </Card.Body>
          </Card>
        </Tab.Container>
      </Container>
    </section>
    )
  }
}

export default SearchForm