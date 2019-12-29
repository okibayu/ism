import React from 'react';
import ReactDOM from 'react-dom';
import NavbarTop from 'NavbarTop';
import PageHeader from 'PageHeader';
import ProgressBar from 'Preload';
import SearchForm from 'SearchFormTrain';
import Contents from 'Contents';
import Footer from 'Footer';

class Main extends React.Component {
  render() {
    return (
      <div id="main-wrapper">
        <header id="header">
          <NavbarTop />
        </header>
          {/* <PageHeader />
          <ProgressBar />
          <SearchForm />
          <Contents />
          <Footer /> */}
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('xxx'));