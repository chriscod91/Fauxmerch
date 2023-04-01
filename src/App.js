import './App.css';
import NavBar from './components/navBar';
import Footer from "./components/footer";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import "font-awesome/css/font-awesome.min.css";
import Catalog from './components/catalog';
import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import Home from './components/home';
import About from './components/about';
import Admin from './components/admin';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar></NavBar>
      
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/catalog" element={<Catalog/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/admin" element={<Admin/>}></Route>
      </Routes>
      
      <Footer></Footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
 