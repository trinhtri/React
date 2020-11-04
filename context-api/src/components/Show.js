import React, { Component } from "react";
import NumberContext from '../contexts/NumberContext';

export default class Show extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  render() {
    return <div>
          <NumberContext.Consumer>
          {({ number, updateNumber }) => (
            <div>
              <h2>{number}</h2>
              <button onClick={updateNumber}>Update Number</button>
            </div>
          )}
        </NumberContext.Consumer>
        </div>;
  }
}
