import React from 'react';
import TrainList from './TrainList';
import PageNumber from './PageNumber';

class AvailTrain extends React.Component {
    render() {
        return (

        <section className="train-avail mt-2">
            <TrainList />
            <PageNumber />
        </section>
        )
    }
}

export default AvailTrain