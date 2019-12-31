import React, {Component} from 'react';
import SliderTop from '../SliderTop';
import SearchForm from '../SearchForm';
import PromoCard from '../PromoCard';
import WhyBook from '../WhyBook';
import PopularTrain from '../PopularTrain';
import Referer from '../Referer';
import TrainPartner from '../TrainPartner';

class ContentHome extends Component {
    render() {
      return ( 
        <div>
            <SliderTop />
            <SearchForm />
            <PromoCard />
            <WhyBook /> 
            <PopularTrain />
            <Referer />
            <TrainPartner />
        </div>
      )
    }
}
    

export default ContentHome