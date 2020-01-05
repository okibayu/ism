import React from 'react';

class Preload extends React.Component {
    render() {
        return (
        <div>
        {/* Progress Bar */}
        <section className="progress p-0">
        <div className="progress-bar bg-progress" role="progressbar" aria-valuemin={0} aria-valuemax={100}>
        </div>
        </section>
        {/* Progress Bar end */}
        </div>
        )
    }
}

export default Preload