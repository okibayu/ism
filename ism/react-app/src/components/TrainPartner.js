import React from 'react';

class TrainPartner extends React.Component {
    render() {
      return (
      <section className="bg-light shadow-md p-5">
        <div className="container">
          <h3 className="text-6 mb-4 text-center">Our Affiliate partner</h3>
          <div className="text-center">
            <img
              className="img-fluid"
              src="img/sliders/kai.png"
              alt="KAI"
              style={{ width: 250 }}
            />
          </div>
        </div>
      </section>
      );
    }
  }

export default TrainPartner