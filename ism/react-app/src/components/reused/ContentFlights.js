import React, {Component} from 'react';
import PageHeader from './PageHeader';
import PopularTrain from '../PopularTrain';

class ContentFlights extends Component {
    render() {
      return ( 
        <div>
            <PageHeader /> 
            <PopularTrain />
        </div>
      )
    }
}
    

export default ContentFlights