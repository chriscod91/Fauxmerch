import React, { Component } from "react";
import "./admin.css";
import ProductService from './../services/productService';
class Admin extends Component {
  state = {};
  render() {
    return (
      <div className="data">
        <button className="btn btn-info" onClick={this.send}>
          send data
        </button>
        <button className="btn btn-info" onClick={this.test}>
          test read
        </button>
        <button className="btn btn-info" onClick={this.clear}>
          clear data
        </button>
      </div>
    );
  }

  send = async () => {
    console.log("sending data.");

    let service = new ProductService();

    await service.seedData();
    console.log("data seeded, try reading to confirm");
  };
  test = () => {
    console.log("testing data.");
  };

  clear = () => {
    console.log("clearing data.");
  };
}

export default Admin;
