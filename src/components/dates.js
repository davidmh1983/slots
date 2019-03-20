import React, { Component } from "react";
import Week from "./week.js";

export default class dates extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
        <div className="weekData">18-03-2019 al 24-03-2019</div>
        <div>
          <Week />
        </div>
      </div>
    );
  }
}
