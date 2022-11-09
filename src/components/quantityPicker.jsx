import React, { Component } from "react";

class QuantityPicker extends Component {
  state = {
    name: "Chris codina",
    quantity: 1,
  };
  render() {
    return (
      <div className="qp-page">
        <button
          onClick={this.increaseQuantity}
          className="btn btn-sm btn-primary"
        >
          +
        </button>

        <label>{this.state.quantity}</label>
        
        <button
          onClick={this.decreaseQuantity}
          className="btn btn-sm btn-primary"
        >
          -
        </button>
      </div>
    );
  }
  increaseQuantity = () => {
    //let current =  this.state.quantity;// this is one way to increment
    //current += 1;
    this.setState({ quantity: this.state.quantity + 1 }); //valid way of changing the state
  };

  decreaseQuantity = () => {
    let newVal = this.state.quantity - 1;
    //if newVal is not lower than 1 you can change the value
    //if newVal is greater or equal to 1 you can change the value
    //if newVal is greater than zero you can change the value
    if(newVal > 0 ) {
    this.setState({ quantity: newVal });
    this.setState({ quantity: this.state.quantity -1 });
    }
  };
}

export default QuantityPicker;
