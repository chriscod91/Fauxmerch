import React, { Component } from 'react';
import './product.css';
import QuantityPicker from './quantityPicker';

class Product extends Component {
    state = {  } 
    render() { 
        return (
    <React.Fragment>
        <div className='product'>

            <img src="https://picsum.photos/200/200" alt="product"/>
            <h5>Product Title here</h5>
            <div>
               <label>Total: $200.00</label>
               <label>Price: $100.00</label> 
            </div>

            <QuantityPicker></QuantityPicker>
            <button className="btn btn-sm btn-info">Add</button>
        </div>
    </React.Fragment>
      );
    }
}
 
export default Product;