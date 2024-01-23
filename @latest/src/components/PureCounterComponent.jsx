import React, { Component, PureComponent } from 'react';

export default class PureCounterComponent extends PureComponent {
  constructor() {
    super();
    this.state = {
      count: 0,
      toggle: false
    };
  }

  handleToggleClick = () => {
    this.setState((prevState) => ({ toggle: !prevState.toggle }));
  };

  handleCounterClick = () => {
    if (this.state.toggle) {
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    }
  };

  render() {
    const { count, toggle } = this.state;
    console.log("this is a Pure Component")

    return (
      <div>
        <h2>Pure Component</h2>
        <h3>Count: {count}</h3>
        <button onClick={this.handleToggleClick}>Set Toggle</button>
        <button onClick={this.handleCounterClick}>Counter</button>
      </div>
    );
  }
}

