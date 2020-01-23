import React, { Component } from 'react'

class AvailResults extends React.Component {
  render() {
    return (

      <div id="avail" className="bg-results card shadow border bg-white mb-0 sticky-top" style={{marginTop: '1rem!important'}}>
        <div className="card-body p-0">
          <div className="row align-items-center m-0 p-2 border-bottom" id="aktif-pergi">
            <div className="col-sm-3 col-md-3 col-lg-3 border-right">
              <h6 className="text-warning">Pergi</h6>
              <h5 className="text-2 text-dark">Gambir (GMR) &nbsp;<i className="fas fa-long-arrow-alt-right" /> Bandung (BD)</h5>
              <h5 className="title2">Kamis, 11 September 2019</h5>
              <h3 className="text-2 text-dark">Rp 732.400</h3>
            </div>
            <div className="col-sm-2 col-md-3 col-lg-3">
              <h3 className="title1">Argo Parahyangan 7098</h3>
              <h5 className="title2">Ekonomi (C)</h5>
            </div>
            <div className="col-sm-2 col-md-2 col-lg-2">
              <h4 className="time">22:30</h4>
              <h5 className="station">Gambir (GMR)</h5>
            </div>
            <div className="col-sm-2 col-md-2 col-lg-2">
              <h4 className="time">01:44 <small className="text-muted">(+1 hari)</small></h4>
              <h5 className="station">Bandung (BD)</h5>
            </div>
            <div className="col-sm-2 col-md-2 col-lg-2">
              <a href="#" className="btn btn-outline-primary btn-sm d-block">Change</a>
            </div>
            <div className="col">
            </div>
          </div>
          <div className="row align-items-center m-0 p-2 border-bottom" id="aktif-pulang">
            <div className="col-sm-3 col-md-3 col-lg-3 border-right">
              <h6 className="text-warning">Pulang</h6>
              <h5 className="text-2 text-dark">Bandung (BD) &nbsp;<i className="fas fa-long-arrow-alt-right" /> Gambir (GMR)</h5>
              <h5 className="title2">Sabtu, 13 September 2019</h5>
              <h3 className="text-2 text-dark">Rp 732.400</h3>
            </div>
            <div className="col-sm-2 col-md-3 col-lg-3">
              <h3 className="title1">Argo Parahyangan 7098</h3>
              <h5 className="title2">Ekonomi (C)</h5>
            </div>
            <div className="col-sm-2 col-md-2 col-lg-2">
              <h4 className="time">22:30</h4>
              <h5 className="station">Bandung (BD)</h5>
            </div>
            <div className="col-sm-2 col-md-2 col-lg-2">
              <h4 className="time">01:44 <small className="text-muted">(+1 hari)</small></h4>
              <h5 className="station">Gambir (GMR)</h5>
            </div>
            <div className="col-sm-2 col-md-2 col-lg-2">
              <a href="#" className="btn btn-outline-primary btn-sm d-block">Change</a>
            </div>
            <div className="col">
            </div>
          </div>
          <div className="row align-items-center m-0 p-2 border-bottom" id="total-bayar">
            <div className="col-sm-10 col-md-10 col-lg-10">
              <div className="row justify-content-end">
                <div className="col-sm-2 justify-content-end">
                  <h4 className="text-2 text-dark">TOTAL</h4>
                  <h5 className="text-3 text-dark">Rp 1.464.800</h5>
                </div>
              </div>
            </div>
            <div className="col-sm-2 col-md-2 col-lg-2">
              <a href="#" className="btn btn-warning btn-sm d-block text-dark text-center">BOOKING</a>
            </div>
            <div className="col">
            </div>
          </div>
        </div> 
      </div>
    );
  }
}

export default AvailResults