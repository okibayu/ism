import React from 'react';

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

export default WhyBook