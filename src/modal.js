import React, { Component } from "react";

import "./modal.css";

class Modal extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.show && (
          <div className="modal">
            <h1>{this.props.name}</h1>
            <button onClick={this.props.onHide}>Close Modal</button>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Modal;
