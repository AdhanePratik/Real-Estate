import React, { useState, useEffect, useContext } from 'react';
import './City.css';
import { RiMapPinLine, RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri';
import { Menu } from '@headlessui/react';
import { HomeContext } from './HomeContext';


const City = () => {

    const { city, setCity, cities } = useContext(HomeContext);

    const [isOpen, setIsOpen] = useState(false);

    return (
        <Menu as='div' className="dropdown">
            <Menu.Button onClick={() => setIsOpen(!isOpen)} className='icon-location'>
                <RiMapPinLine className='dropdown-icon'/>
                <div className='text-icon'>
                    <div className='text-icon1'>
                        {city}
                    </div>
                    <div>
                        select your place
                    </div>
                    <div className='dropdown-icon1'>
                    {
                        isOpen ? (
                            <RiArrowUpLine />
                        )  : (
                            <RiArrowDownLine />
                        )
                    }
                    </div>
                </div>
            </Menu.Button>
            
            <Menu.Items className='city-items'>
                {cities.map((city, index)=> {
                    return (
                        <Menu.Item
                        onClick={() => setCity(city)}
                        className='city-list' as='li' key={index}>
                            {city}
                        </Menu.Item>
                    )
                })}
            </Menu.Items>

        </Menu>
    );
};

export default City;