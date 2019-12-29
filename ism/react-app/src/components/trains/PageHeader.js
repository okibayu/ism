import React from 'react';

className PageHeader extends React.Component {
    render() {
        return (

        {/* Page Header */}
        <section className="page-header text-white bg-page-header mb-0">
            <div className="container">
            <div className="row align-items-center">
                <div className="col-md-8">
                <h6 className="text-white"><i className="fas fa-train"></i> Jakarta (GMR) &nbsp;<i className="fas fa-long-arrow-alt-right"></i> Bandung (BD)</h6>
                <span><i className="fas fa-calendar-alt"></i> Rabu, 3 Juli 2019 - Sabtu, 5 Juli 2019 - <i className="fas fa-male"></i> 1 Dewasa, <i className="fas fa-baby"></i>  0 Bayi</span>
                </div>
                <div className="col-md-4">
                <button className="btn btn-link float-right text-center-sm" data-toggle="collapse" aria-expanded="false" aria-controls="searchForm" data-target="#searchForm">
                    <i className="fas fa-search"></i> Change</button>
                </div>
            </div>
            </div>
        </section>
      {/* Page Header end */}
        )
    }
}

export default PageHeader