import React,{useContext, useState} from 'react';
import { Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { DataContext } from './Context';
const Navbar = () => {
  const [searchData, setSearchData] = useState();
  console.log(searchData);
    return (
        
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="col-3">
            <Link to='/' className="navbar-brand pl-5" href="#"><h3>Sanjal Express</h3></Link>
            </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
            </button>
            <div className="col-6">
            <form>
            
  <div className="search-product">
              <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Search Products by Category" onChange={(e) => setSearchData(e.target.value)} />

  </div></form>
            </div>
        <div className="col-3 nav-rig">
          <Link to='/cart'>
          <div className="clear-fix bagdes" > <Badge variant="light" >0</Badge></div>
       
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
            </svg> 
            </Link>
&nbsp;&nbsp;
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>
            </div>
        
      </nav>
    
    )
}
export default Navbar;