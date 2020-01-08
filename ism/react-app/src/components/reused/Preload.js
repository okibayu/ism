import React from 'react';


class ProgressBar extends React.Component {

componentDidMount() {
    const $ = window.$;

    $(".progress-bar").animate({
        width: "100%"
    }, 5000);
}

    render() {
        return (
        <section className="progress p-0">
            <div className="progress-bar bg-progress" role="progressbar" aria-valuemin={0} aria-valuemax={100}>
            </div>
        </section> 
        )
    }
}

export default ProgressBar