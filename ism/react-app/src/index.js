import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, useParams } from 'react-router-dom';
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

class DynamicImport extends Component {
  state = {
    component: null
  }
  UNSAFE_componentDidMount () {
    this.props.load()
      .then((component) => {
        this.setState(() => ({
          component: component.default ? component.default : component
        }))
      })
  }
  render() {
    return this.props.children(this.state.component)
  }
}

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
                <img src={icon404}></img> >
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

const TrainResults = (props) => (
  <DynamicImport load={() => import('./components/trains/TrainResults')}>
    {(Component) => Component === null
      ? <Loading />
      : <Component {...props} />}
  </DynamicImport>
)

class Main extends React.Component {
  render() {
    return (
    <BrowserRouter>
      <div id="main-wrapper">
        <header id="header">
          <NavbarTop fallback={<Loading />}/>
        </header>
        <div id="content">
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/" component={ContentHome} />
            <Route path="/flights" component={ContentFlights} />
            <Route path="/hotels" component={ContentHotels} />
            <Route path="/trains" component={ContentTrains} />
            <Route path="/trains/results" component={TrainResults} />
            <Route path="/:id" children={<Child />} />
          </Switch>
        </Suspense>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('content'));
  