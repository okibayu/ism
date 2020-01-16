import React, {Component} from 'react';
import SliderTop from '../SliderTop';
import SearchForm from '../SearchForm';
import PopularTrain from '../PopularTrain';

class ContentFlights extends Component {
    render() {
      return ( 
        <div>
            <SliderTop />
            <SearchForm />
            <PopularTrain />
        </div>
      )
    }
}

export default ContentFlights