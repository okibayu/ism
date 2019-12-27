import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class PromoCard extends React.Component{
  render() {
    return (
        <div className="container pb-1">
            <OwlCarousel
                className="owl-carousel owl-theme"
                loop
                margin={10}
                nav
                dots
                autoplay={true} 
                responsive={{
                    0:{items:1,},
                    576:{items:2,},
                    768:{items:2,},
                    992:{items:3,}
                }}
                navText={['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>']}
            >
                <div className="item">
                    <a>
                    <img className="img-fluid rounded" src="img/sliders/banner6.jpg" alt="banner 4" />
                    </a>
                </div>
                <div className="item">
                    <a>
                    <img className="img-fluid rounded" src="img/sliders/banner7.jpg" alt="banner 5" />
                    </a>
                </div>
                <div className="item">
                    <a>
                    <img className="img-fluid rounded" src="img/sliders/banner8.jpg" alt="banner 6" />
                    </a>
                </div>
                <div className="item">
                    <a>
                    <img className="img-fluid rounded" src="img/sliders/banner9.jpg" alt="banner 7" />
                    </a>
                </div>
                <div className="item">
                    <a>
                    <img className="img-fluid rounded" src="img/sliders/banner10.jpg" alt="banner 8" />
                    </a>
                </div>
            </OwlCarousel>
        </div>
    );
  }
}

export default PromoCard