import React from 'react';
import PageHeader from './components/reused/PageHeader';
import ProgressBar from './components/reused/Preload';
import SearchForm from './components/trains/SearchFormTrain';
import Contents from './components/trains/Contents';
import Footer from './components/Footer';

class AvailContent extends React.Component {
  render() {
    return (
      <div>          
        <PageHeader />
        <ProgressBar />
        <SearchForm />
        <Route path='/train/available' component={AvailTrains} />
        <Footer />
      </div>
    );
  }
}

export default AvailContent