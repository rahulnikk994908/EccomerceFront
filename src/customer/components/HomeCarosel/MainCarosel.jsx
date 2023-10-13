import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeCarosel from './HomeCarosel'


const MainCarosel = () => {
    const items = HomeCarosel.map((item)=>
    <img className='cursor-pointer' role="presentation" src={item.image} alt=""/>)

    return(
    <AliceCarousel
        
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
    />
)
    };

export default MainCarosel;