import React from 'react';
import loadable from '@loadable/component';
import { Suspense } from 'react';
import PageHeader from '../reused/PageHeader';
import Loading from '../reused/Loading';

const Contents = loadable(() => import('../trains/Contents'));

class ContentFlights extends React.Component {
    render() {
      return ( 
        <section id="content">    
            <PageHeader />
            <div className="container">
              <Suspense fallback={<Loading />}>
                <Contents />
              </Suspense>
            </div>
        </section>
      )
    }
}

export default ContentFlights