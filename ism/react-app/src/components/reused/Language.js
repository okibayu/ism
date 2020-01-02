import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href=""
    ref={ref}
    onClick={e => {
      e.preventDefault();
      onClick(e)
    }}
  >
    <i className="fas fa-globe" />&nbsp;
    {children}
  </a>
));

class Languages extends React.Component {
  render() {
    return (

      <Dropdown>
        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
          EN
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item Key="1" value="id" active>Bahasa</Dropdown.Item>
          <Dropdown.Item Key="2" value="en">English</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      );
    }
  }

export default Languages