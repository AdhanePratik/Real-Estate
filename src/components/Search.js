import React, { useContext } from 'react';
import './Search.css';

import City from '../components/City';
import PropertyType from '../components/PropertyType';
import Price from '../components/Price';

import { HomeContext } from './HomeContext';
import { RiSearch2Line } from 'react-icons/ri';


const Search = () => { 
    const { handleClick } = useContext(HomeContext)
    return (
        <div className='filter'>
            <City />
            <PropertyType />
            <Price />
            <button onClick={() =>{ handleClick()}} className='search-btn'>
                <RiSearch2Line className='svg' />
            </button>
        </div>
    );
};

export default Search;