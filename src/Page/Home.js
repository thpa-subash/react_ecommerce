import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import first from '../images/first.jpg';
import second from '../images/second.jpg';
import third from '../images/third.jpg';
function Home() {
    const [adsBanner] = useState([
        {
            'image': first,
            'text': 'Hello First',
        },
        {
            'image': second,
            'text' :'Hello Second',
        },
        {
            'image': third,
            'text' :'Hello Third',
        }

    ]);
    return (
        <>
            <Navbar />
            <Banner slider={adsBanner}/>
        </>
    )
}

export default Home
