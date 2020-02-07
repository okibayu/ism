import React from 'react'
import ProgressBar from './Preload'
import { Button, Form } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { InputGroup } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown'
import FormCheck from 'react-bootstrap/FormCheck'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPlane, faCalendarAlt, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

class PageHeader extends React.Component {
state = {
    startDate: new Date(),
    endDate: ''
    }

    constructor(props) {
    super(props)

    this.state = {handleClick: 'close', handleChange:''}
    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    }

    handleClick = () => {
    this.setState({ handleClick: this.state.handleClick === 'close' ? 'open' : 'open' });
    }

    handleChange = (event) => {
    this.setState({ value: event.target.value })
    }

    handleChange1 = startDate => {
    this.setState({
        startDate
        });
    }

    handleChange2 = endDate => {
    this.setState({
        endDate
        });
    }

    componentDidMount() {
    const $ = window.$;

        // Trains Dropdown
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
    }

    render() {
        const { startDate, endDate, addDays } = this.state;
    return (        
        <div>
        <section className="page-header text-white bg-page-header mb-0">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-8">
                        <h6 className="text-white"><i className="fas fa-train"></i> Jakarta (GMR) &nbsp;<i className="fas fa-long-arrow-alt-right"></i> Bandung (BD)</h6>
                        <span><i className="fas fa-calendar-alt"></i> Rabu, 3 Juli 2019 - Sabtu, 5 Juli 2019 - <i className="fas fa-male"></i> 1 Dewasa, <i className="fas fa-baby"></i>  0 Bayi</span>
                    </div>
                    <div className="col-md-4">
                        <button 
                        onClick={this.toggle}
                        className="btn btn-link float-right text-center-sm" 
                        data-toggle="collapse" 
                        aria-expanded="false" 
                        aria-controls="searchFormTrain" 
                        data-target="#searchFormTrain"
                        >
                        <i className="fas fa-search"></i>
                        Change
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <ProgressBar />
        
        <div className="container">
            {/* Search form */}
            <div className="row justify-content-md-center">
                <div className="col-md-auto">
                    <div className="collapse bg-white shadow-lg rounded-bottom pl-3 pr-3" id="searchFormTrain">
                        <div className="col-md-12 p-3">
                            <Form id="bookingTrain" method="post">
                                <div className="mb-3">
                                    <Form.Group id="booktrains">
                                        <FormCheck 
                                            id="train-oneway" 
                                            defaultChecked 
                                            name="train-trip"
                                            custom
                                            inline
                                            label={'One Way'}
                                            type={'radio'}
                                        />
                                        <FormCheck 
                                            id="train-roundtrip"
                                            name="train-trip"
                                            custom
                                            inline
                                            label={'Round Trip'}
                                            type={'radio'}
                                        />
                                    </Form.Group>
                                </div>
                                <Form.Row>
                                    <Col md={6} lg={6}>
                                        <Form.Group>
                                        <Form.Control 
                                            type="text" 
                                            className="form-control" 
                                            id="trainFrom" 
                                            required 
                                            placeholder="From" 
                                        />
                                        <span className="icon-inside">
                                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                                        </span>
                                        </Form.Group>
                                    </Col>
                                    
                                    <Col md={6} lg={6}>
                                        <Form.Group>
                                        <Form.Control 
                                            type="text"
                                            id="trainTo" 
                                            required 
                                            placeholder="To" 
                                        />
                                        <span className="icon-inside">
                                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                                        </span>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6} lg={6}>
                                        <Form.Group>
                                        <Form.Control as={DatePicker} 
                                            selected={startDate} 
                                            onChange={this.handleChange1}
                                            onClick={this.handleClick1}
                                            startDate={startDate}
                                            endDate={endDate}
                                            minDate={new Date()}
                                            maxDate={this.setState.endDate}
                                            dateFormat="dd/MM/yyyy"
                                            showMonth 
                                            selectsStart
                                            placeholderText="Depart Date"
                                            showPopperArrow={false}
                                            id="trainsDepart"
                                            type="text"
                                            />
                                        <span className="icon-inside">
                                            <FontAwesomeIcon icon={faCalendarAlt} />
                                        </span>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6} lg={6}>
                                        <Form.Group>
                                        <Form.Control as={DatePicker} 
                                            selected={endDate} 
                                            onChange={this.handleChange2}
                                            onClick={this.handleClick2} 
                                            startDate={startDate}
                                            endDate={endDate}
                                            minDate={startDate}
                                            dateFormat="dd/MM/yyyy"
                                            showMonth
                                            selectsEnd
                                            placeholderText="Return Date"
                                            showPopperArrow={false}
                                            id="trainsReturn"
                                            type="text"
                                            />
                                        <span className="icon-inside">
                                            <FontAwesomeIcon icon={faCalendarAlt} />
                                        </span>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6} lg={6}>
                                    <Form.Group className="travellers-class">
                                    <Form.Control 
                                        id="trainTravellersClass" 
                                        onClick={this.handleClick} 
                                        type="text" 
                                        className="travellers-class-input"
                                        name="train-travellers-class" 
                                        placeholder="Travellers, Class" 
                                        readOnly
                                        required
                                    />
                                    <span className="icon-inside">
                                        <FontAwesomeIcon icon={faCaretDown} />
                                    </span>
                                    <Dropdown 
                                    className="travellers-dropdown"
                                    style={{display: 'none'}}
                                    >
                                        <Row className="align-items-center">
                                        <Col sm={7}>
                                            <p className="mb-sm-0">Adults <small className="text-muted">(12+ yrs)</small></p>
                                        </Col>
                                        <Col sm={5}>
                                            <InputGroup className="qty">
                                            <InputGroup.Prepend>
                                                <Button 
                                                type="button" 
                                                variant="light" 
                                                data-value="decrease" 
                                                data-target="#trainAdult-travellers" 
                                                data-toggle="spinner"
                                                size="sm"
                                                >
                                                <span>-</span>
                                                </Button>
                                            </InputGroup.Prepend>
                                                <Form.Control 
                                                type="text" 
                                                data-ride="spinner" 
                                                id="trainAdult-travellers" 
                                                className="qty-spinner" 
                                                defaultValue={1} 
                                                readOnly 
                                                />
                                            <InputGroup.Append>
                                                <Button 
                                                type="button" 
                                                variant="light" 
                                                data-value="increase" 
                                                data-target="#trainAdult-travellers" 
                                                data-toggle="spinner"
                                                size="sm"
                                                >
                                                <span>+</span>  
                                                </Button>
                                            </InputGroup.Append>
                                            </InputGroup>
                                        </Col>
                                        </Row>
                                        <hr className="my-2" />
                                        <Row className="align-items-center">
                                        <Col sm={7}>
                                            <p className="mb-sm-0">Children <small className="text-muted">(2-12 yrs)</small></p>
                                        </Col>
                                        <Col sm={5}>
                                            <InputGroup className="qty">
                                            <InputGroup.Prepend>
                                                <Button 
                                                type="button" 
                                                variant="light" 
                                                data-value="decrease" 
                                                data-target="#trainChildren-travellers" 
                                                data-toggle="spinner"
                                                size="sm"
                                                >
                                                <span>-</span>
                                                </Button>
                                            </InputGroup.Prepend>
                                            <Form.Control 
                                                type="text" 
                                                data-ride="spinner" 
                                                id="trainChildren-travellers" 
                                                className="qty-spinner" 
                                                defaultValue={0} 
                                                readOnly 
                                            />
                                            <InputGroup.Append>
                                                <Button 
                                                type="button" 
                                                variant="light"
                                                data-value="increase" 
                                                data-target="#trainChildren-travellers" 
                                                data-toggle="spinner"
                                                size="sm"
                                                >
                                                <span>+</span>
                                                </Button>
                                            </InputGroup.Append>
                                            </InputGroup>
                                        </Col>
                                        </Row>
                                        <hr className="my-2" />
                                        <Row className="align-items-center">
                                        <Col sm={7}>
                                            <p className="mb-sm-0">Infants <small className="text-muted">(Below 2 yrs)</small></p>
                                        </Col>
                                        <Col sm={5}>
                                            <InputGroup className="qty">
                                            <InputGroup.Prepend>
                                                <Button 
                                                type="button" 
                                                variant="light"
                                                data-value="decrease" 
                                                data-target="#trainInfants-travellers" 
                                                data-toggle="spinner"
                                                >
                                                <span>-</span>
                                                </Button>
                                            </InputGroup.Prepend>
                                            <Form.Control 
                                                type="text" 
                                                data-ride="spinner" 
                                                id="trainInfants-travellers" 
                                                className="qty-spinner" 
                                                defaultValue={0} 
                                                readOnly 
                                            />
                                            <InputGroup.Append>
                                                <Button 
                                                type="button" 
                                                variant="light" 
                                                data-value="increase" 
                                                data-target="#trainInfants-travellers" 
                                                data-toggle="spinner"
                                                >
                                                <span>+</span>
                                                </Button>
                                            </InputGroup.Append>
                                            </InputGroup>
                                        </Col>
                                        </Row>
                                        <Form.Group className="mt-3 mb-0">
                                        <Form.Control as="select" 
                                            id="train-class" 
                                            name="train-class"
                                        >
                                            <option value={0}>All Class</option>
                                            <option value={1}>Economy</option>
                                            <option value={2}>Business</option>
                                            <option value={3}>Executive/ VIP</option>
                                        </Form.Control>
                                        <Button 
                                            className="btn btn-primary btn-block submit-done mt-3 mb-0" 
                                            type="button"
                                        >
                                            Done
                                        </Button>
                                        </Form.Group>
                                    </Dropdown>
                                    </Form.Group>
                                    </Col>
                                    <Col md={6} lg={6}>
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
                    </div>
                </div>
            </div>
            {/* Search form end */}
        </div>

        </div>
        )
    }
}

export default PageHeader
