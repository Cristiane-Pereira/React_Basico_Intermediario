import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import './style.css';

class ClassState extends Component {
  state = {
    reverse: false,
  };

  handleRotate = () => {
    const { reverse } = this.state;
    this.setState({ reverse: !reverse });
  };

  render() {
    const { reverse } = this.state;
    const reverseClass = reverse ? 'reverse' : '';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
          <button onClick={this.handleRotate} type="button">
            Reverse {reverseClass}
          </button>
        </header>
      </div>
    );
  }
}

export default ClassState;
