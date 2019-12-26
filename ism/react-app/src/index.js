import React from 'react';
import ReactDOM from 'react-dom';
import NavbarTop from './components/NavbarTop';
import SliderTop from './components/SliderTop';
import SearchForm from './components/SearchForm';
import PromoCard from './components/PromoCard';
import WhyBook from './components/WhyBook';
import PopularTrain from './components/PopularTrain';
import Referer from './components/Referer';
import TrainPartner from './components/TrainPartner';
import Footer from './components/Footer';

{/* Declared all components */}
class Main extends React.Component {
  render() {
    return (
      <div id="main-wrapper">
        {/* Main Wrapper */}
        <header id="header">
          <NavbarTop />
        </header>
        {/* Start Content */}
        <div id="content">
          <div id="slider" className="hero-wrap">
            <SliderTop />
          </div>
          <section className="train-section">
            <SearchForm />
          </section>
          <div className="section bg-light shadow-md">
            <PromoCard />
          </div>
          <section className="section pb-5 pt-5">
            <WhyBook />
          </section>
          <section className="section bg-light shadow-md">
            <PopularTrain />
          </section>
          <section className="text-light shadow-md pt-5 pb-5"
            style={{
            backgroundImage: 'url("img/sliders/rewards.png")',
            opacity: 1,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundBlendMode: "soft-light"
            }}
          >
            <Referer />
          </section>
          <section className="bg-light shadow-md p-5">
            <TrainPartner />
          </section>
          <section className="footer">
            <Footer />
          </section>
        </div>
        {/* Start Content end */}
        {/* Main Wrapper end */}
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
