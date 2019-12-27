import React from 'react';

className PageNumber extends React.Component {
    render() {
        return (

        {/* Page Number */} 
        <ul className="pagination justify-content-center mt-4 mb-0">
        <li className="page-item disabled"> <a className="page-link" href="#" tabIndex={-1}><i className="fas fa-angle-left" /></a> </li>
        <li className="page-item active"><a className="page-link" href="#">1</a></li>
        <li className="page-item"> <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a> </li>
        <li className="page-item"><a className="page-link" href="#">3</a></li>
        <li className="page-item"> <a className="page-link" href="#"><i className="fas fa-angle-right" /></a> </li>
        </ul>
        {/* Page Number end */}
        )
    }
}

export default PageNumber