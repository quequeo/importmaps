import React from 'react'
import ReactDOM from 'react-dom'

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 50
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return React.createElement(
      'div',
      null,
      'Segundos: ',
      this.state.seconds
    );
  }
}

ReactDOM.render(React.createElement(Timer, null), document.getElementById('timer-example'));