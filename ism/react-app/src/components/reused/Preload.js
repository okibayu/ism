import React from 'react';

className Preload extends React.Component {
    render() {
        return (

        {/* Progress Bar */}
        <section className="progress p-0">
        <div className="progress-bar bg-progress" role="progressbar" aria-valuemin={0} aria-valuemax={100}>
        </div>
        </section>
        {/* Progress Bar end */}
        )
    }
}

export default Preload