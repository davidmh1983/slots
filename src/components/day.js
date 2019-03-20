import React, { Component } from "react";

export default class day extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="">
        {this.props.dato.map(d => {
          return <span>HEY</span>;
        })}
      </div>
    );
  }
}
