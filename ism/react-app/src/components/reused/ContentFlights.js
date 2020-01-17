import React from 'react'
import PageHeader from '../reused/PageHeader'
import PopularTrain from '../PopularTrain'

class ContentFlights extends React.Component {
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