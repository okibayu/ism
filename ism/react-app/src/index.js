import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, useParams } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './components/scss/main.scss'
import Background from './components/img/bg404.jpg'
import icon404 from './components/img/404.png'
import Loading from './components/reused/Loading'
import NavbarTop from './components/reused/NavbarTop'
import Footer from './components/reused/Footer'

const ContentHome = lazy(() => import('./components/reused/ContentHome'));
const ContentFlights = lazy(() => import('./components/reused/ContentFlights'));
const ContentHotels = lazy(() => import('./components/reused/ContentHotels'));
const ContentTrains = lazy(() => import('./components/reused/ContentTrains'));
const TrainAvailList = lazy(() => import('./components/trains/AvailTrainList'));

function Child () {
  let {id} = useParams();
  const bg404 = {
        width: "100%",
        backgroundImage: `url(${Background})`,
        position: "cover"
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

class Main extends React.Component {
  render() {
    return (
    <BrowserRouter>
      <div id="main-wrapper">
        <header id="header">
          <NavbarTop />
        </header>
        <div id="content">
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route exact path="/" component={ContentHome} />
              <Route path="/flight" component={ContentFlights} />
              <Route path="/hotel" component={ContentHotels} />
              <Route path="/train" component={ContentTrains} />
              <Route path="/avail" component={TrainAvailList} />
              <Route path="/booking" component={ContentHome} />
              <Route path="/inputpax" component={ContentHome} />
              <Route path="/:id" children={<Child />} />
            </Switch>
          </Suspense>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('content'));
  