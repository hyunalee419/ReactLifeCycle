import React, { Component } from "react";

export default class Hello extends Component {
  state = {
    text: ""
  };

  static getDerivedStateFromProps(props, state) {
    console.log(props, state);
    return props;
  }

  render() {
    return (
      <div>
        <p>props: {this.props.text}</p>
        <p>state: {this.state.text}</p>
      </div>
    );
  }
}
