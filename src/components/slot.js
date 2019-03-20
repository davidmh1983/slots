import React, { Component } from "react";
import Modal from "react-responsive-modal";

export default class week extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      active: true
    };
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  changeSlot = () => {
    this.onCloseModal();
    this.setState({ active: false });
  };

  render() {
    let active = this.state.active === false ? "disabled" : "";
    return (
      <div>
        <button
          className={active + " slot"}
          disabled={!this.state.active}
          onClick={this.onOpenModal}
        >
          {this.props.time}
        </button>
        <Modal open={this.state.open} onClose={this.onCloseModal} center>
          <div className="centered">
            <h2>Estás seguro que quieres cambiar el tiempo de tu visita?</h2>
            <button className="mybutton" onClick={this.changeSlot}>
              Sí
            </button>
          </div>
        </Modal>
      </div>
    );
  }
}
