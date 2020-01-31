import React from 'react'
import loadable from '@loadable/component'
import Loading from '../reused/Loading'

const PageHeader = loadable(() => import('../reused/PageHeader'));
const Contents = loadable(() => import('../trains/Contents'));
const PreBooking = loadable(() => import('./PreBooking'));

class TrainResults extends React.Component {
    render() {
      return ( 
        <section id="content">    
          <PageHeader fallback={<Loading/>}/>
          <div className="container">
            <PreBooking />
            <Contents/>          
          </div>
        </section>
      )
    }
}

export default TrainResults