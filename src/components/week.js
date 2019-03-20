import React, { Component } from "react";
import { data } from "../data/data.js";
import Slot from "./slot.js";

export default class week extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="horizontal">
        {data.map(dato => {
          return (
            <div>
              <div className="vertical">
                <span>{dato.day.split("-")[2]}</span>
                {dato.slots.map(s => {
                  return (
                    <div>
                      <Slot time={s.start} />
                    </div>
                  );
                })}
              </div>
              <div />
            </div>
          );
        })}
      </div>
    );
  }
}
