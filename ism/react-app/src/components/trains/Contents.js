import React from 'react';
import Filter from './Filter';
import AvailTrain from './AvailTrain';

class Contents extends React.Component {
    render() {
        return (

        <section id="content">    
        <div className="container">
            <Filter />
            <AvailTrain />
        </div>
        </section>
        )
    }
}

export default Contents