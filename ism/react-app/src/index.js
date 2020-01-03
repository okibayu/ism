import NavbarTop from './components/reused/NavbarTop'
import Footer from './components/reused/Footer'
import ContentHome from './components/reused/ContentHome'
import ContentFlights from './components/reused/ContentFlights'
import ContentHotels from './components/reused/ContentHotels'
import ContentTrains from './components/reused/ContentTrains'
import Notfound from './components/Notfound'
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
  
class Main extends React.Component {
  render() {

    return (
    <Router>
      <div id="main-wrapper">
        <header id="header">
          <NavbarTop />
        </header>
        <div id="content">
          <Switch>
            <Route exact path="/" component={ContentHome} />
            <Route path="/flights" component={ContentFlights} />
            <Route path="/hotels" component={ContentHotels} />
            <Route path="/trains" component={ContentTrains} />
            <Route component={Notfound} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
