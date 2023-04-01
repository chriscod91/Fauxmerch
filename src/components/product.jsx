import React, { Component } from 'react';
import './product.css';
import QuantityPicker from './quantityPicker';

class Product extends Component {
    state = {
        quantity: 0,
      };
        
    render() { 
        return (
    
        <div className='product'>

            <img src={"/img/products/" + this.props.data.image} alt="product"/>
            <h5>{this.props.data.title}</h5>
            
            <div className="prices">
               <label className='total-value'>Total: ${this.getTotal()}</label>
               <label className='price-value'>Price: ${this.props.data.price.toFixed(2)}</label>
            </div>

        

            <QuantityPicker onQuantityChange={this.handleQuantityChange}></QuantityPicker>
            <button className="btn btn-sm btn-info">Add</button>
        </div>
    
      );
    }

    getTotal = () => {
        let total = this.props.data.price * this.state.quantity;
        return total.toFixed(2);
    };

    handleQuantityChange = (qnty) => {
        this.setState({ quantity: qnty });
    };
}
 
export default Product;