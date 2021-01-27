import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Product from './components/Product';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Product/>
    </div>
  );
}

export default App;
