import React, {Component} from 'react';

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

export default PopularTrain