import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import NavbarTop from './components/reused/NavbarTop';
import SliderTop from './components/SliderTop';
import SearchForm from './components/SearchForm';
import PromoCard from './components/PromoCard';
import WhyBook from './components/WhyBook';
import PopularTrain from './components/PopularTrain';
import Referer from './components/Referer';
import TrainPartner from './components/TrainPartner';
import Footer from './components/reused/Footer';

class Main extends React.Component {
  render() {
    return (
    <Router>
      <div id="main-wrapper">
        <header id="header">
          <NavbarTop />
        </header>
      <Switch>
        <div id="content">
          <div id="slider" className="hero-wrap">
            <Route path="/" component={SliderTop} />
          </div>
          <section className="train-section">
            <Route path="/" component={SearchForm} />
          </section>
          <div className="section bg-light shadow-md">
          <Route path="/" component={PromoCard} />
          </div>
          <section className="section pb-5 pt-5">
            <Route path="/" component={WhyBook} />
          </section>
          <section className="section bg-light shadow-md">
            <Route path="/" component={PopularTrain} />
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
            <Route path="/" component={TrainPartner} />
          </section>
          </div>
      </Switch>
        <section className="footer">
          <Footer />
        </section>
        </div>
    </Router>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
