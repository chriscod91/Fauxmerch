import React, { Component } from 'react';
import "./home.css";
import { Link } from 'react-router-dom';

class Home extends Component {
    
    render() { 
        return (
        <div className="jumbotron">
            <div className="main-image">
                <img src="https://img.freepik.com/premium-vector/modern-men-s-clothing_23-2147523102.jpg?w=2000" alt="" />
            </div>
  <h1 className="display-4">Hello, welcome to Fauxmerch!</h1>
  <p className="leader">Where we carry unique stlyes of our own creation.</p>
  <hr className="my-4"/>
  <p>check out our stuff.</p>
  <p className="lead">
    <Link className="btn btn-success btn-lg" to="/catalog" role="button"><i className="fa fa-hand-o-right" aria-hidden="true"></i> " Our Stuff " <i className="fa fa-hand-o-left" aria-hidden="true"></i>
</Link>
  </p>
</div>
      );
    }
}
 
export default Home;