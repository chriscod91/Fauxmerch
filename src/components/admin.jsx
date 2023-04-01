import React, { Component } from "react";
import "./admin.css";
class Admin extends Component {
  state = {};
  render() {
    return (
      <div className="data">
        <button className="btn btn-info" onClick={this.seed}>
          seed data
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

  seed = () => {
    console.log("seeding data.");
  };
  test = () => {
    console.log("testing data.");
  };

  clear = () => {
    console.log("clearing data.");
  };
}

export default Admin;
