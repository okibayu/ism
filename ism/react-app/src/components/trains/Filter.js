import React from 'react'
import IonRangeSlider from 'react-ion-slider'
import Form from 'react-bootstrap/Form'
import { Accordion, Button, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom';

class Filter extends React.Component {
    render() {    
        return ( 
    <Accordion className="mt-3" 
    id="filterTop">
        <Form method="post">
            <div className="btn-filter">
                <div className="filter-header">
                    <span>Filter :</span>
                </div>
                <div className="filter-header">
                    <Accordion.Toggle as={Button} variant="light" eventKey="0"
                    className="btn btn-sm shadow-sm" 
                    data-toggle="collapse" 
                    data-target="#kelas"
                    >
                        Kelas
                    </Accordion.Toggle>
                    <div className="status" />
                </div>
                <div className="filter-header">
                    <Accordion.Toggle as={Button} variant="light" eventKey="1"
                    className="btn btn-sm shadow-sm" 
                    data-toggle="collapse" 
                    data-target="#kereta" 
                    >
                        Kereta Api
                    </Accordion.Toggle>
                </div>
                <div className="filter-header">
                    <Accordion.Toggle as={Button} variant="light" eventKey="2"
                    className="btn btn-sm shadow-sm" 
                    data-toggle="collapse" 
                    data-target="#jam-berangkat" 
                    >
                        Waktu
                    </Accordion.Toggle>
                </div>
                <div className="filter-header">
                    <Accordion.Toggle as={Button} variant="light" eventKey="3"
                    className="btn btn-sm shadow-sm" 
                    data-toggle="collapse" 
                    data-target="#harga-tiket" 
                    >
                        Harga
                    </Accordion.Toggle>
                </div>
                <div className="filter-header">
                    <Button className="btn btn-link filter-reset" 
                    type="reset"
                    >
                        Reset
                    </Button>
                </div>
                <div className="clearfix" />
                    <div className="card bg-gradient-blue rounded mt-0 mb-0 pb-0">
                        <Accordion.Collapse 
                        eventKey="0" 
                        id="kelas" 
                        aria-labelledby="kelas" 
                        data-parent="#filterTop"
                        >
                            <div className="form-group custom-control custom-checkbox">
                            <ul>
                                <li>
                                    <FormControl className="custom-control-input" type="checkbox" id="ekonomi" />
                                    <label className="custom-control-label" htmlFor="ekonomi">Ekonomi</label>
                                </li>
                                <li>
                                    <FormControl className="custom-control-input" type="checkbox" id="bisnis" />
                                    <label className="custom-control-label" htmlFor="bisnis">Bisnis</label>
                                </li>
                                <li>
                                    <FormControl className="custom-control-input" type="checkbox" id="eksekutif" />
                                    <label className="custom-control-label" htmlFor="eksekutif">Eksekutif</label>
                                </li>
                            </ul>
                            </div>
                        </Accordion.Collapse>
                        <Accordion.Collapse 
                        eventKey="1" 
                        id="kereta" 
                        aria-labelledby="kereta" 
                        data-parent="#filterTop"
                        >
                            <div className="form-group custom-control custom-checkbox">
                            <ul>
                                <li>
                                <FormControl className="custom-control-input" type="checkbox" id="argolawu" />
                                <label className="custom-control-label" htmlFor="argolawu">Argolawu</label>
                                </li>
                                <li>
                                <FormControl className="custom-control-input" type="checkbox" id="parahyangan" />
                                <label className="custom-control-label" htmlFor="parahyangan">Argo Parahyangan</label>
                                </li>
                                <li>
                                <FormControl className="custom-control-input" type="checkbox" id="fajarutama" />
                                <label className="custom-control-label" htmlFor="fajarutama">Fajar Utama</label>
                                </li>
                                <li>
                                <FormControl className="custom-control-input" type="checkbox" id="sembrani" />
                                <label className="custom-control-label" htmlFor="sembrani">Sembrani Priority</label>
                                </li>
                                <li>
                                <FormControl className="custom-control-input" type="checkbox" id="argobromo" />
                                <label className="custom-control-label" htmlFor="argobromo">Argo Bromo</label>
                                </li>
                                <li>
                                <FormControl className="custom-control-input" type="checkbox" id="argomuria" />
                                <label className="custom-control-label" htmlFor="argomuria">Argo Muria</label>
                                </li>
                                <li>
                                <FormControl className="custom-control-input" type="checkbox" id="argosindoro" />
                                <label className="custom-control-label" htmlFor="argosindoro">Argo Sindoro</label>
                                </li>
                                <li>
                                <FormControl className="custom-control-input" type="checkbox" id="argobromoa" />
                                <label className="custom-control-label" htmlFor="argobromoa">Argo Bromo Anggrek</label>
                                </li>
                            </ul>
                            </div>
                        </Accordion.Collapse>
                        <Accordion.Collapse 
                        eventKey="2"
                        id="jam-berangkat" 
                        aria-labelledby="jam-berangkat" 
                        data-parent="#filterTop"
                        >
                            <div className="form-group custom-control custom-checkbox">
                            <ul>
                                <li>
                                <FormControl className="custom-control-input" type="checkbox" id="pagi" />
                                <label className="custom-control-label" htmlFor="pagi">Pagi (00:00 - 11:00)</label>
                                </li>
                                <li>
                                <FormControl className="custom-control-input" type="checkbox" id="siang" />
                                <label className="custom-control-label" htmlFor="siang">Siang (11:00 - 15:00)</label>
                                </li>
                                <li>
                                <FormControl className="custom-control-input" type="checkbox" id="sore" />
                                <label className="custom-control-label" htmlFor="sore">Sore (15:00 - 18:30)</label>
                                </li>
                                <li>
                                <FormControl className="custom-control-input" type="checkbox" id="malam" />
                                <label className="custom-control-label" htmlFor="malam">Malam (18.30:00 - 23:59)</label>
                                </li>
                            </ul>
                            </div>
                        </Accordion.Collapse>
                        <Accordion.Collapse 
                        eventKey="3" 
                        id="harga-tiket" 
                        aria-labelledby="harga-tiket" 
                        data-parent="#filterTop"
                        >
                            <div className="form-group custom-control">
                                <div className="card-body pt-0 pb-1 pl-0 pr-4 w-60">
                                <IonRangeSlider
                                    type="double"
                                    min={100000} 
                                    max={500000} 
                                    from={200000} 
                                    to={400000} 
                                    step={10000} 
                                    skin="round"
                                    grid={false}
                                    grid_snap={true}
                                    prefix="Rp "
                                    hide_min_max={true}
                                    hide_from_to={false}
                                    prettify_separator="."
                                />
                                </div>  
                            </div>
                        </Accordion.Collapse>
                    </div>
                </div>
            </Form>
        {/* Sort Desktop */}
        <div id="sort-avail" className="card bg-white shadow-sm rounded pt-0 mb-3">
            <div className="card-body">
                <div className="row align-items-center">
                    <div className="col-sm-2 col-md-3 col-lg-3 pl-0">
                    <Link to="#">Kereta Api <i className="fas fa-sort" /></Link>
                    </div>
                    <div className="col-sm-2 col-md-2 col-lg-2 pl-0">
                    <Link to="#">Berangkat <i className="fas fa-sort" /></Link>
                    </div>
                    <div className="col-sm-2 col-md-2 col-lg-2 pl-0">
                    <Link to="#">Tiba <i className="fas fa-sort" /></Link>
                    </div>
                    <div className="col-sm-2 col-md-1 col-lg-1 pl-0">
                    <Link to="#">Durasi <i className="fas fa-sort" /></Link>
                    </div>
                    <div className="col-sm-2 col-md-2 col-lg-2 pl-0">
                    <Link to="#">Harga  <i className="fas fa-sort" /></Link>
                    </div>
                    <div className="col-sm-2 col-md-2 col-lg-2">
                    &nbsp;
                    </div>
                </div> 
            </div>
        </div>
        {/* Sort Desktop end */}    
    </Accordion> 
        )
    }
}

export default Filter