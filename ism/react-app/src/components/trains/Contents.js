import React from 'react';
import Filter from './Filter';
import AvailTrain from './AvailTrain';

className Contents extends React.Component {
    render() {
        return (

        {/* Content */}
        <section id="content">    
        <div className="container">
            <Filter />
            <AvailTrain />
        </div>
        </section>
        {/* Content end */}
        )
    }
}

export default Contents