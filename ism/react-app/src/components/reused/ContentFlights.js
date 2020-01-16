import React from 'react';
import PageHeader from '../reused/PageHeader';
import Filter from '../trains/Filter';
import AvailTrain from '../trains/AvailTrains';

class ContentFlights extends React.Component {
    render() {
      return ( 
        <div>
            <PageHeader /> 
            <Filter />
            <AvailTrain />
        </div>
      )
    }
}

export default ContentFlights