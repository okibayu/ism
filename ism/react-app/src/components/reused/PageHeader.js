import React from 'react';
import ProgressBar from './Preload'

class PageHeader extends React.Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
      }
    
      toggle() {
        this.setState({ collapse: !this.state.collapse });
      }
      

    render() {
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
                        aria-controls="searchForm" 
                        data-target="#searchForm"
                        >
                        <i className="fas fa-search"></i>
                        Change
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <ProgressBar />
        {headerForm}
        </div>
        )
    }
}

const headerForm = 
    
    <div className="container">
        {/* Search form */}
        <div className="row justify-content-md-center">
            <div className="col-md-auto">
                <div className="collapse bg-white shadow-lg rounded-bottom pl-3 pr-3" id="searchForm">
                    <div className="col-md-12 p-3">
                    <form id="bookingTrain" style={{zIndex: 2}}>
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
                        <div className="col-md-6 col-lg-3 form-group">
                            <input id="trainsDepart" type="text" className="form-control" required placeholder="Depart Date" />
                            <span className="icon-inside"><i className="far fa-calendar-alt" /></span>
                        </div>
                        <div className="col-md-6 col-lg-3 form-group">
                        <input 
                            id="trainsReturn" 
                            type="text" 
                            className="form-control" 
                            required=""
                            placeholder="Return Date" 
                        />
                            <span className="icon-inside"><i className="far fa-calendar-alt" /></span>
                        </div>
                        <div className="col-md-6 col-lg-3 travellers-class form-group">
                        <input 
                            type="text" 
                            id="trainTravellersClass" 
                            className="travellers-class-input form-control" 
                            name="train-travellers-class" 
                            placeholder="Penumpang, Kelas" 
                            readOnly="" 
                            required="" 
                        />
                            <span className="icon-inside"><i className="fas fa-caret-down" /></span>
                            <div className="travellers-dropdown">
                            <div className="row align-items-center">
                                <div className="col-sm-7">
                                <p className="mb-sm-0">Dewasa <small className="text-muted">(12+ thn)</small></p>
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
                                <p className="mb-sm-0">Anak <small className="text-muted">(2-12 thn)</small></p>
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
                                <p className="mb-sm-0">Bayi <small className="text-muted">(&lt; 2 yrs)</small></p>
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
                                <option value={1}>Ekonomi</option>
                                <option value={2}>Bisnis</option>
                                <option value={3}>Eksekutif</option>
                                </select>
                            </div>
                            <button className="btn btn-primary btn-block submit-done" type="button">Done</button>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 form-group">
                            <button className="btn btn-search btn-block" type="submit" href="index-train.html"><i className="fas fa-search" /> Search</button>
                        </div>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            {/* Search form end */}
        </div>;


export default PageHeader
