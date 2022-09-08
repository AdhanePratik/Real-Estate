import React from 'react';
import './Home.css';


const Home = ({ home }) => {
    const { image, type, city, address, surface, price } = home;
    return (
        <div className='cards'>
            <img src={image} alt='' />
            <div className='info1'>
                <div className='info'>{type}</div>
                <div className='info3'>{city}</div>
                <div className='info4'>{price}/-Rs</div>
            </div>
            <div className='info5'>{surface}</div>
            <div className='address'>{address}</div>
        </div>
    );
};

export default Home;