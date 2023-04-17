import React, { Component } from "react";
import "./admin.css";
import ProductService from './../services/productService';

class Admin extends Component {
  state = {};
  render() {
    return (
      <div className="data">
        <button className="btn btn-info" onClick={this.sendData}>
          send data
        </button>
        <button className="btn btn-info" onClick={this.testData}>
          test read
        </button>
        <button className="btn btn-info" onClick={this.clearData}>
          clear data
        </button>
      </div>
    );
  }

  sendData = async () => {
    console.log("sending data.");

    let service = new ProductService();

    await service.seedData();
    console.log("data seeded, try reading to confirm");
  };
  
  testData = async () => {
    let service  = new ProductService();
    let data = await service.getCatalog();
    console.log("test read:", data);
  };



  clearData = () => {
    console.log("clearing data.");
  };
}

export default Admin;
