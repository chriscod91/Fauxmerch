import React, { Component } from "react";
import "./admin.css";
import ProductService from './../services/productService';

class Admin extends Component {
  
  render() {
    return (
      <div className="admin-page">
        <button className="btn btn-info" onClick={this.sendData}>
          send data
        </button>
        <button className="btn btn-info" onClick={this.testRead}>
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

  testRead = async () => {
    let service  = new ProductService();
    let data = await service.getCatalog();
    console.log("test read:", data);
  };



  clearData = () => {
    console.log("clearing data.");
  };
}

export default Admin;
