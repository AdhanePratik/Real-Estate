import React, { useState, useEffect, useContext } from 'react';
import './City.css';
import { RiHome5Line, RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri';
import { Menu } from '@headlessui/react';
import { HomeContext } from './HomeContext';


const PropertyType = () => {

    const { property, setProperty,properties } = useContext(HomeContext);

    const [isOpen, setIsOpen] = useState(false);

    return (
        <Menu as='div' className="dropdown">
            <Menu.Button onClick={() => setIsOpen(!isOpen)} className='icon-location'>
                <RiHome5Line className='dropdown-icon'/>
                <div className='text-icon'>
                    <div className='text-icon1'>
                        {property}
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
                {properties.map((property, index)=> {
                    return (
                        <Menu.Item
                        onClick={() => setProperty(property)}
                        className='city-list' as='li' key={index}>
                            {property}
                        </Menu.Item>
                    )
                })}
            </Menu.Items>

        </Menu>
    );
};

export default PropertyType;