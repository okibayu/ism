import React from 'react'
import loadable from '@loadable/component'
import Loading from '../reused/Loading'

const PageHeader = loadable(() => import('../reused/PageHeader'));
const Contents = loadable(() => import('../trains/Contents'));

class TrainResults extends React.Component {
    render() {
      return ( 
        <section id="content">    
          <PageHeader fallback={<Loading/>}/>
          <div className="container">
            <Contents/>          
          </div>
        </section>
      )
    }
}

export default TrainResults