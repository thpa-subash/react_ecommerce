
import React, {useContext, useState } from 'react';
import Button from 'react-bootstrap/Button'

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { DataContext } from './Context';
import { Link } from 'react-router-dom';
const Product = () => {
    const [size, setSize] = useState("1");
    const [color, setColor] = useState("White");
    const product = useContext(DataContext);
    console.log(product);
    const colorHandle = (e) => {
        
        setColor(e.target.value);
    };
    
    return(
<div className="container">
            <div className="row">
                <div className="col-12 product-heading text-center mt-5 mb-2">
                    <h2>Products</h2>
                </div>
                
                <div className="product-border" id="ads">
                
                  {
                        product.productData.map((pro) =>
                        <div className="col-md-4 float-left">
                            <div className="card rounded">
                                <div className="card-image">
                                    <span className="card-notify-badge">Low KMS</span>
                                    <span className="card-notify-year">2018</span>
                                    <img className="img-fluid" src={pro.image} alt="Alternate Text" />
                                </div>
                                <div className="card-image-overlay m-auto">
                                        <span className="card-detail-badge">{ pro.category}</span>
                                        <span className="card-detail-badge">{ pro.price}</span>
                                    <span className="card-detail-badge">13000 Kms</span>
                                </div>
                                <div className="card-body text-center">
                                    <div className="ad-title m-auto">
                                            <h5>{ pro.name }</h5>
                                    </div>
                                    <Link className="ad-btn" href="#">ADD TO CART</Link>
                                </div>
                            </div>
                        </div>

                        )
                  }
                    </div>
                </div>
                
</div>
    );
}
export default Product;