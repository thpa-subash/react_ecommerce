import React,{useState} from 'react';
export const DataContext = React.createContext();
export const DataProvider = (props) => {
    const [productData] = useState([
        {
            'id': 1,
            'name': 'Vans Sk8-Hi MTE Shoes',
            'image': 'https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/vans.png',
            'description':'hello i am the best shoes company in the world vans',
            'size': [1, 3, 4, 5, 6],
            'color': ['red', 'white', 'blue', 'black'],
            'price': "140.00",
            'isDiscount': '30.00',
            'category':'shoes',
            
        },
        {
            'id': 2,
            'name': 'PUMA Sk8-Hi MTE Shoes',
            'image': 'https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/vans.png',
            'description':'hello i am the best shoes company in the world PUMA',
            'size': [1, 3, 4, 5, 6],
            'color': ['red', 'white', 'blue', 'black'],
            'price': "140.00",
            'isDiscount': '30.00',
            'category':'shoes',
            
        },
        {
            'id': 3,
            'name': 'Adidas Sk8-Hi MTE Shoes',
            'image': 'https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/vans.png',
            'description':'hello i am the best shoes company in the world adidas',
            'size': [1, 3, 4, 5, 6],
            'color': ['red', 'white', 'blue', 'black'],
            'price': "140.00",
            'isDiscount': '30.00',
            'category':'shoes',
            
        },
        {
            'id': 4,
            'name': 'Adidas Sk8-Hi MTE Shoes',
            'image': 'https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/vans.png',
            'description':'hello i am the best shoes company in the world adidas',
            'size': [1, 3, 4, 5, 6],
            'color': ['red', 'white', 'blue', 'black'],
            'price': "140.00",
            'isDiscount': '30.00',
            'category':'shoes',
            
        },
        {
            'id': 5,
            'name': 'Adidas Sk8-Hi MTE Shoes',
            'image': 'https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/vans.png',
            'description':'hello i am the best shoes company in the world adidas',
            'size': [1, 3, 4, 5, 6],
            'color': ['red', 'white', 'blue', 'black'],
            'price': "140.00",
            'isDiscount': '30.00',
            'category':'shoes',
            
        },
        {
            'id': 6,
            'name': 'Adidas Sk8-Hi MTE Shoes',
            'image': 'https://imageonthefly.autodatadirect.com/images/?USER=eDealer&PW=edealer872&IMG=USC80HOC011A021001.jpg&width=440&height=262',
            'description':'hello i am the best shoes company in the world adidas',
            'size': [1, 3, 4, 5, 6],
            'color': ['red', 'white', 'blue', 'black'],
            'price': "140.00",
            'isDiscount': '30.00',
            'category':'shoes',
            
        }
    ]);
    return (
        <DataContext.Provider value={{ productData }}>
            {props.children}
        </DataContext.Provider>
    )
}