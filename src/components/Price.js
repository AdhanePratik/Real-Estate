import React, { useState, useEffect, useContext } from 'react';
import './City.css';
import { RiWallet3Line, RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri';
import { Menu } from '@headlessui/react';
import { HomeContext } from './HomeContext';


const Price = () => {

    const { price, setPrice } = useContext(HomeContext);

    const [isOpen, setIsOpen] = useState(false);

    const prices = [
        {
            value : 'Price Range (any)',
        },
        {
            value: '100000 - 130000',
        },
        {
            value: '130000 - 160000',
        },
        {
            value: '160000 - 190000',
        },
        {
            value: '190000 - 220000',
        },
        {
            value: '10000 - 30000',
        },
        {
            value: '30000 - 40000',
        },
    ]

    return (
        <Menu as='div' className="dropdown">
            <Menu.Button onClick={() => setIsOpen(!isOpen)} className='icon-location'>
                <RiWallet3Line className='dropdown-icon'/>
                <div className='text-icon'>
                    <div className='text-icon1'>
                        {price}
                    </div>
                    <div>
                        Price range
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
                {prices.map((price, index)=> {
                    return (
                        <Menu.Item
                        onClick={() => setPrice(price.value)}
                        className='city-list' as='li' key={index}>
                            {price.value}
                        </Menu.Item>
                    )
                })}
            </Menu.Items>

        </Menu>
    );
};

export default Price;