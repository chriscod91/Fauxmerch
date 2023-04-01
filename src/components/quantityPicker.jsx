import React, { Component } from "react";

class QuantityPicker extends Component {
  state = {
    
    quantity: 0,
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

        <label className="qnt">{this.state.quantity}</label>
        
        <button
          onClick={this.decreaseQuantity}
          className="btn btn-sm btn-primary"
        >
          -
        </button>
      </div>
    );
  }

  decreaseQuantity = () => {
    var qnty = this.state.quantity - 1;
    //if newVal is not lower than 1 you can change the value
    //if newVal is greater or equal to 1 you can change the value
    //if newVal is greater than zero you can change the value
    if(qnty > -1 ) {
    this.setState({ quantity: qnty });
    this.props.onQuantityChange(qnty);
    }
  };

  increaseQuantity = () => {
    let qnty =  this.state.quantity + 1;// this is one way to increment
    //current += 1;
    
    this.setState({ quantity: qnty }); //valid way of changing the state
    
    this.props.onQuantityChange(qnty);
  };


}

export default QuantityPicker;
