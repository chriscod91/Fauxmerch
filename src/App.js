import './App.css';
import NavBar from './components/navBar';
import Footer from "./components/footer";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import Catalog from './components/catalog';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1>Hello with React!!!!</h1>
      
      <Catalog></Catalog>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
