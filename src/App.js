import './App.css';
import React, { useContext } from 'react';
import Home from './Page/Home';
import Details from './components/Details';
import { DataProvider } from './components/Context';
import Section from './components/Section';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.js';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Products from './Page/Products';
import { Link } from 'react-router-dom';
function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Route path='/products' component={Products} exact/>
          <Route path='/product/:id' component={Details} />
          <Route path='/' component={Home} exact/>
          </Router>
      </div>
      </DataProvider>
  );
}

export default App;
