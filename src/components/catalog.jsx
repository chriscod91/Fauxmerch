import React, { Component } from "react";
import "./catalog.css";
import Product from "./product";
import { Link } from 'react-router-dom';
import ProductService from "../services/productService";

class Catalog extends Component {
  state = {
    products: [],
    categories: [],
    selectedCategory: "",
  };
  render() {
    let prodsToDisplay = this.state.products;

    //filter the elements inside the prodsToDisplay
    if (this.state.selectedCategory) {
      prodsToDisplay = prodsToDisplay.filter((prod) => prod.category === this.state.selectedCategory);
    }

    return (
      <div className="catalog-page">

        <div className="categories">

          <button onClick={() => this.selectCategory("")} className="btn btn-secondary ml-1">
            Show All
          </button>

          {this.state.categories.map((cat) => (
            <button onClick={() => this.selectCategory(cat)} className="btn btn-info ml-1" key={cat}>
              {cat}
            </button>
          ))}
          <div className="cart">
          
          <Link className="btn btn-info btn-lg" to="/cart" role="button"><i className="fa fa-shopping-cart" aria-hidden="true"></i>
</Link>
          </div>
        </div>

        <div className="products">
          {prodsToDisplay.map((prod) => (
            <Product key={prod.id} data={prod}></Product>
          ))}

        </div>
      </div>
    );
  }

  selectCategory = (cat) => {
    console.log("user selected a cat.");
    this.setState({ selectedCategory: cat });
  };

  //when component is mounted render on screen
  async componentDidMount() {
    console.log("did mount");
    //get data from the service
    let service = new ProductService();
    let data = await service.getCatalog();

    var cats = []; //create a cats array
    for (let i = 0; i < data.length; i++) {
      var category = data[i].category; //for each product inside the array, get the category
      if (!cats.includes(category)) {
        //if the category does not exist inside the solution array

        cats.push(category); //ad it
      }
    }

    //put data on state
    this.setState({ products: data, categories: cats });
  }
}

export default Catalog;

/*
min info for the product cmp:
-image
-title
-product num
--minimum to sell 
-total
*/
