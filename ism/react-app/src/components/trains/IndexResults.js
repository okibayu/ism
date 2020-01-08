import React from 'react';
import PageHeader from '../reused/PageHeader';
import Contents from '../trains/Contents'

class IndexResults extends React.Component {
    render() {
      return ( 
        <div>
            <PageHeader /> 
            <Contents />
        </div>
      )
    }
}
    
export default IndexResults