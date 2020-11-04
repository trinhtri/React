import React, { Component } from "react";

import NumberContext from "../contexts/NumberContext";

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 5
    };

    this.updateNumber = this.updateNumber.bind(this);
  }

  updateNumber() {
    console.log('vao')
    this.setState({
      number: Math.random()
    });
  }

  render() {
    return (
      <NumberContext.Provider
        value={{
          number: this.state.number,
          updateNumber: this.updateNumber
        }}
      >
        {this.props.children}
      </NumberContext.Provider>
    );
  }
}
