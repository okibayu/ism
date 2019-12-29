import React from 'react';
import TrainList from './TrainList';
import PageNumber from './Contents/PageNumber';

className AvailTrain extends React.Component {
    render() {
        return (

        {/* Avail Train */}  
        <section className="train-avail mt-2">
            <TrainList />
            <PageNumber />
        </section>
        {/* Avail Train end */}
        )
    }
}

export default AvailTrain