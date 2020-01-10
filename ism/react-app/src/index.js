import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavbarTop from './components/reused/NavbarTop';
import Footer from './components/reused/Footer';
import ContentHome from './components/reused/ContentHome';
import ContentFlights from './components/reused/ContentFlights';
import ContentHotels from './components/reused/ContentHotels';
import ContentTrains from './components/reused/ContentTrains';
import AvailFlights from './components/trains/AvailFlights';
import AvailHotels from './components/trains/AvailHotels';
import AvailTrains from './components/trains/AvailTrains';
import Notfound from './components/reused/Notfound';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/scss/main.scss';

class Main extends React.Component { 

  componentDidMount() {
  const $ = window.$;
   //eslint-disable-line
    $('[data-toggle=\'tooltip\']').tooltip({container: 'body'});
  }

  render() {
    return (
    <BrowserRouter>
      <Route>
      <div id="main-wrapper">
        <header id="header">
          <NavbarTop />
        </header>
        <div id="content">
          <Switch>
            <Route exact path="/" component={ContentHome} />
            <Route path="/flights/#" component={ContentFlights} />
            <Route path="/hotels/#" component={ContentHotels} />
            <Route path="/trains/" component={ContentTrains} />
            <Route path="/trains/available" component={AvailTrains} />
            <Route path="/flights/available" component={AvailFlights} />
            <Route path="/hotels/available" component={AvailHotels} />
            <Route component={Notfound} />
          </Switch>
        </div>
        <Footer />
      </div>
      </Route>
    </BrowserRouter>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('content'));
