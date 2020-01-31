import React, {Component} from 'react';
import loadable from '@loadable/component';
import Loading from './Loading';

const SliderTop = loadable(() => import('../SliderTop'));
const SearchForm = loadable(() => import('../reused/SearchForm'));
const PromoCard = loadable(() => import('../PromoCard'));
const WhyBook = loadable(() => import('../WhyBook'));
const PopularTrain = loadable(() => import('../PopularTrain'));
const TrainPartner = loadable(() => import('../TrainPartner'));
const Referer = loadable(() => import('../Referer'));

class ContentTrains extends Component {
    render() {
      return ( 
        <div>
          <SliderTop fallback={<Loading />} />
          <SearchForm fallback={<Loading />} />
          <PromoCard fallback={<Loading />} />
          <WhyBook fallback={<Loading />} /> 
          <PopularTrain fallback={<Loading />} />
          <Referer fallback={<Loading />} />
          <TrainPartner fallback={<Loading />} />
        </div>
      )
    }
}

export default ContentTrains