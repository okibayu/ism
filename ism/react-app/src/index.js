import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavbarTop from '../src/components/reused/NavbarTop'
import Footer from '../src/components/reused/Footer'
import ContentHome from '../src/components/reused/ContentHome'
import ContentFlights from '../src/components/reused/ContentFlights'
import ContentHotels from '../src/components/reused/ContentHotels'
import ContentTrains from '../src/components/reused/ContentTrains'
import IndexResults from '../src/components/trains/IndexResults'
import Notfound from '../src/components/reused/Notfound'
// import 'bootstrap/dist/css/bootstrap.css';

class Main extends React.Component { 

  componentDidMount() {
    const $ = window.$;
    // Toggle
    $('[data-toggle=\'tooltip\']').tooltip({container: 'body'});
  }
  componentWillUnmount() {
    this.$el.tooltip({container: 'destroy'});
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
            <Route path="/trains" component={ContentTrains} />
            <Route path="/trains/available" component={IndexResults} />
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
