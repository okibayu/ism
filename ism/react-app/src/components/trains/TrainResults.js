import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import loadable from '@loadable/component'
import { Suspense } from 'react'
import PageHeader from '../reused/PageHeader'
import Loading from '../reused/Loading'

const Contents = loadable(() => import('../trains/Contents'));

class TrainResults extends React.Component {
    render() {
      return ( 
        <BrowserRouter>
        <section id="content">    
            <PageHeader />
            <div className="container">
              <Route>
              <Suspense fallback={<Loading />}>
                <Contents />
              </Suspense>
              </Route>
            </div>
        </section>
        </BrowserRouter>
      )
    }
}

export default TrainResults