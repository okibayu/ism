import React, {Component} from 'react';

class Referer extends React.Component {
    render() {
      return (
      
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
      );
    }
  }

export default Referer