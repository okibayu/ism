import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class SliderTop extends React.Component {
  render() {
    return (
      
    <div id="slider" className="hero-wrap">
      <OwlCarousel
          className="owl-theme slideshow single-slider"
          items={1}
	        autoplay={true}
          autoplayTimeout={4500}
          animateOut= {'fadeOut'}
          animateIn= {'fadeIn'}
          lazyLoad={true}
          loop={true}
          nav={true}
          responsive={{
            0:{items:1,},
            576:{items:1,},
            768:{items:1,},
            992:{items:1,}
        }}
          navText={['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>']}
          >
        <div className="item owl-caption" style={{backgroundImage: 'url(img/sliders/train.jpg)', backgroundPosition: 'center center', backgroundSize: 'cover', width: '100%', height: '500px'}}>
          <h1 className="animated fadeInDown">Train Booking Offers – Avail Best Deals</h1>
          <h4 className="animated fadeInUp">December Best deal Upto 10%<br></br>
            <button className="btn-danger rounded">Book Now!</button>
          </h4>
          <div className="owl-back" />
        </div>
        <div className="item owl-caption" style={{backgroundImage: 'url(img/sliders/train5.png)', backgroundPosition: 'center center', backgroundSize: 'cover', width: '100%', height: '500px'}}>
          <h1 className="animated fadeInDown">Book Your Holiday Travel Early and Save</h1>
          <h4 className="animated fadeInUp">December Discount Upto 20%<br></br>
            <button className="btn-danger rounded">Book Now!</button>
          </h4>
          <div className="owl-back" />
        </div>
        <div className="item owl-caption" style={{backgroundImage: 'url(img/sliders/train3.png)', backgroundPosition: 'center center', backgroundSize: 'cover', width: '100%', height: '500px'}}>
          <h1>Students Get a Fast Track to Savings</h1>
          <h4 className="animated fadeInUp">Save 25% on Travel in Jakarta and Bandung<br></br>
            <button className="btn-danger rounded">Book Now!</button>
          </h4>
          <div className="owl-back" />
        </div>
      </OwlCarousel>
    </div>      
    )
  }
}

export default SliderTop