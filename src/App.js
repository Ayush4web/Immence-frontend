import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Product from './Components/Product'
import ProductDetails from './Components/ProductDetails'

function App() {
  
  
  return (
    <>
      <Navbar></Navbar>
      <div className="d-flex main">
           <Product></Product>
           <ProductDetails></ProductDetails>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
