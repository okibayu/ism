import React from "react";
import "react-datepicker/dist/react-datepicker.css";

class Date extends React.Component {
    state = {
      startDate: new Date()
    };
  
    handleChange = date => {
      this.setState({
        startDate: date
      });
    };
  }
  export default Date