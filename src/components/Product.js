
import React, { useState } from 'react';
const Product = () => {
    const [size, setSize] = useState("1");
    const [color, setColor] = useState("White");
    const [products] = useState([
        {
            'id': 1,
            'name': 'Vans Sk8-Hi MTE Shoes',
            'image': 'https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/vans.png',
            'size': [1, 3, 4, 5, 6],
            'color': ['red', 'white', 'blue', 'black'],
            'price': "140.00",
            'isDiscount': '30.00',
            
        },
        {
        'id': 2,
        'name': 'Puma Shoes',
        'image': 'data:image/jpeg;base64,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',
        'size': [1, 3, 4, 5, 6],
        'color': ['red', 'white', 'blue', 'black'],
        'price': "140.00",
        'isDiscount': '30.00',
        
    },
    {
        'id': 3,
        'name': 'Adidas Shoes',
        'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNXcZcFflwy6MjPsb8uaEjDp-hvopT799ARQ&usqp=CAU',
        'size': [1, 3, 4, 5, 6],
        'color': ['red', 'white', 'blue', 'black'],
        'price': "140.00",
        'isDiscount': '30.00',
        
        },
        {
            'id': 4,
            'name': 'Reebok Shoes',
            'image': 'data:image/jpeg;base64,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',
            'size': [1, 3, 4, 5, 6],
            'color': ['red', 'white', 'blue', 'black'],
            'price': "140.00",
            'isDiscount': '30.00',
            
        }
    ]);
    const colorHandle = (e) => {
        
        setColor(e.target.value);
    };
    return(
<div className="container">
            <div className="row">
                <div className="col-12 product-heading text-center mt-5 mb-2">
                    <h2>Products</h2>
                </div>
                <p>{ size}</p> 
                <p>{color}</p>
                <div className="product-border">
                {
                    products.map(( product, index ) => 
                        <div className="col-12 col-sm-8 col-md-6 col-lg-4 float-left mt-3 mb-2" key={index}>
                        <div className="card">
                          <img className="card-img" src={product.image} alt="Vans"/>
                          <div className="card-img-overlay d-flex justify-content-end">
                           
                          </div>
                          <div className="card-body">
                                    <h4 className="card-title">{product.name}</h4>
                            
                            <div className="options d-flex flex-fill">
                                        <select className="custom-select mr-1" value={color} onChange={colorHandle}>
                               
                                            {
                                                product.color.map((color, index) =>
                                                    <option key={index} value={color}>{color}</option>
                                                )
                                            }
                              </select>
                                        <select className="custom-select ml-1" value={ size} onChange={(e)=>setSize(e.target.value)}>
                                            <option >Size</option>
                                            {
                                                product.size.map((size, index) =>
                                                    <option key={index} value={size}>{ size}</option>
                                                )
                                            }
                                  
                                        </select>
                                    
                            </div>
                            <div className="buy d-flex justify-content-between align-items-center">
                                        <div className="price text-success"><h5 className="mt-4">{product.price}</h5></div>
                               {/* <a href="#" className="btn btn-danger mt-3"><i className="fas fa-shopping-cart"></i> Add to Cart</a> */}
                            </div>
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