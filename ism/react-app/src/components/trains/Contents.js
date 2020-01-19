import React from 'react';
import Filter from '../trains/Filter';
import TrainList from '../trains/TrainList';

class AvailContents extends React.Component {
    
    render() {
        return (
            <div>
            <Filter />
            <TrainList />
            </div>
        )
    }
}

export default AvailContents