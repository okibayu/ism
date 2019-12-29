import React from 'react';
import ReactDOM from 'react-dom';
import NavbarTop from './components/NavbarTop';
import PageHeader from './components/reused/PageHeader';
import ProgressBar from './components/reused/Preload';
import SearchForm from './components/trains/SearchFormTrain';
import Contents from './components/trains/Contents';
import Footer from './components/Footer';

class Main extends React.Component {
  render() {
    return (
      <div id="main-wrapper">
        <header id="header">
          <NavbarTop />
        </header>
          <PageHeader />
          <ProgressBar />
          <SearchForm />
          <Contents />
          <Footer />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));