import React from 'react';
import PageHeader from '../reused/PageHeader';
import Contents from '../trains/Contents';

class ContentFlights extends React.Component {
    render() {
      return ( 
        <section id="content">    
            <PageHeader />
            <div className="container">
              <Contents />
            </div>
        </section>
      )
    }
}

export default ContentFlights