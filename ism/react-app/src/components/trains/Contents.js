import React from 'react'
import Filter from '../trains/Filter'
import PageNumber from '../trains/PageNumber'
import loadable from '@loadable/component'
import Loading from '../reused/Loading'
import PreBooking from '../trains/PreBooking'

const TrainList = loadable(() => import('../trains/TrainList'));

class AvailContents extends React.Component {
    render() {
        return (
            <>
            <PreBooking />
            <Filter fallback={<Loading />} />
            <TrainList fallback={<Loading />} />
            <PageNumber />
            </>
        )
    }
}

export default AvailContents