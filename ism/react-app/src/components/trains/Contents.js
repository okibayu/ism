import React from 'react'
import Filter from '../trains/Filter'
import PageNumber from '../trains/PageNumber'
import loadable from '@loadable/component'
import Loading from '../reused/Loading'

const TrainList = loadable(() => import('../trains/TrainList'));

class AvailContents extends React.Component {
    
    render() {
        return (
            <div>
            <Filter fallback={<Loading />}/> 
            <TrainList fallback={<Loading />}/>
            <PageNumber fallback={<Loading />}/>
            </div>
        )
    }
}

export default AvailContents