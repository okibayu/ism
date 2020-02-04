// switch

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>A Toggle-Switch</h1>
        <ToggleSwitch />
      </div>
    );
  }
}

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isToggleOn: false }
    
    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }
  
  render() {
    return (
      <div onClick={this.handleClick} className="ToggleSwitch">
        <div className={this.state.isToggleOn ? 'knob active' : 'knob'} />
        {this.state.isToggleOn ? 'now it\'s on' : 'now it\'s off'}
      </div>
    )
  }
}

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );