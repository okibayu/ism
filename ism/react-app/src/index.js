import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, useParams } from 'react-router-dom';
import NavbarTop from './components/reused/NavbarTop';
import Footer from './components/reused/Footer';
import ContentHome from './components/reused/ContentHome';
import ContentFlights from './components/reused/ContentFlights';
import ContentHotels from './components/reused/ContentHotels';
import ContentTrains from './components/reused/ContentTrains';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/scss/main.scss';
import Background from './components/img/bg404.jpg';

function Child () {
  let { id } = useParams();
  let bg404 = {
    width: "100%",
    height: "50vh",
    backgroundImage: `url(${Background})`,
    position: "center"
  };

  return (
    <div className="section p-0 m-0" style={bg404} background-position="center" background-size="contain">
      <div className="row justify-contents-center">
        <div className="col text-center p-5">
          <h3>404 - WHOOPS!</h3>
          <div>
          Looks like something's broken here.<br></br>
          The page you were looking for could not be found.<br></br>
          URL: <span className="text-danger">{id}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

class Main extends React.Component { 

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
            <Route path="/flights" component={ContentFlights} />
            <Route path="/hotels" component={ContentHotels} />
            <Route path="/trains" component={ContentTrains} />
            <Route path="/:id" children={<Child />} />
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
