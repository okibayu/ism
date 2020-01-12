import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom';
import { Suspense } from 'react';
import loadable from '@loadable/component';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/scss/main.scss';
import Background from './components/img/bg404.jpg';
import icon404 from './components/img/404.png';
import Loading from './components/reused/Loading';

const NavbarTop = loadable(() => import('./components/reused/NavbarTop'));
const ContentHome = loadable(() => import('./components/reused/ContentHome'));
const ContentFlights = loadable(() => import('./components/reused/ContentFlights'));
const ContentHotels = loadable(() => import('./components/reused/ContentHotels'));
const ContentTrains = loadable(() => import('./components/reused/ContentTrains'));
const Footer = loadable(() => import('./components/reused/Footer'));

class Main extends React.Component {
  render() {
    return (
    <Router>
      <div id="main-wrapper">
        <header id="header">
          <NavbarTop fallback={<Loading />}/>
        </header>
        <Suspense fallback={<Loading />}>
        <div id="content">
          <Switch>
            <Route exact path="/" component={ContentHome} />
            <Route path="/flights" component={ContentFlights} />
            <Route path="/hotels" component={ContentHotels} />
            <Route path="/trains" component={ContentTrains} />
            <Route path="/:id" children={<Child/>} />
          </Switch>
        </div>
        </Suspense>
        <Footer />
      </div>
    </Router>
    );
  }
}

function Child () {
  let {id} = useParams();
  let bg404 = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${Background})`,
    position: "cover"
  };

  let icon = {
    src:`url(${icon404})`
  };


  return (
    <div className="section" style={bg404} background-size="contain">
      <div className="container">
        <div className="row align-items-center p-3">
        <div className="col text-center">
          <img src={icon404}></img>
          <h3>WHOOPS!</h3>
            Looks like something's broken here.<br></br>
            The page you were looking for could not be found.<br></br>
            <i className="fas fa-link"></i> <span className="text-danger"> {id}<br></br>
            </span>
        </div>
      </div>
      </div>
    </div>
  );
}

ReactDOM.render(<Main />, document.getElementById('content'));
  