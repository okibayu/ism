import React, {Component} from 'react'
import SliderTop from '../SliderTop'
import SearchForm from '../reused/SearchForm'
import PromoCard from '../PromoCard'
import WhyBook from '../WhyBook'
import PopularTrain from '../PopularTrain'
import TrainPartner from '../TrainPartner'
import Referer from '../Referer'

class ContentTrains extends Component {
    render() {
      return ( 
        <div>
          <SliderTop  />
          <SearchForm  />
          <PromoCard  />
          <WhyBook  /> 
          <PopularTrain  />
          <Referer  />
          <TrainPartner  />
        </div>
      )
    }
}

export default ContentTrains