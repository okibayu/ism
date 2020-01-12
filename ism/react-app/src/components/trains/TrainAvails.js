import React from 'react';
import Filter from '../trains/Filter';
import TrainList from '../trains/TrainList';

class TrainAvails extends React.Component {
  
  render() {
    return (

    <section id="content">    
    <div className="container">
        <Filter />
        <TrainList />
    </div>
    </section>
    )
}
    

export default TrainAvails