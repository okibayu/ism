import React from 'react'
import Filter from '../trains/Filter'
import TrainList from '../trains/TrainList'
import PageNumber from '../trains/PageNumber'

class AvailContents extends React.Component {
    
    render() {
        return (
            <div>
            <Filter />
            <TrainList />
            <PageNumber />
            </div>
        )
    }
}

export default AvailContents