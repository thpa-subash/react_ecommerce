import React,{useState} from 'react'
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import first from '../images/first.jpg';
import second from '../images/second.jpg';
import Product from '../components/Product';
import third from '../images/third.jpg';
function Products() {
    const [adsBanner] = useState([
        {
            'image': first,
            'text': 'Hello First',
        },
        {
            'image': second,
            'text' :'Hello Second',
        },


    ]);
    return (
        <>
            <Navbar />
            <Banner slider={adsBanner} />
            <div className="product">
                <div className="sideFilter"></div>
                <div className="topFilter"></div>
            <Product/>

            </div>
            
        </>
    )
}

export default Products
