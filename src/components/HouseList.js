import React, { useContext } from 'react';

import { HomeContext } from './HomeContext';
import './HouseList.css';
import Home from './Home';

import { Link } from 'react-router-dom';


import { ImSpinner2 } from 'react-icons/im';


const HouseList = () => {
    const { homes, loading } = useContext(HomeContext);

    if (loading) {
        return (
          <ImSpinner2 />
        );
      }
    
      if (homes.length < 1) {
        return (
          <div>
            Sorry, nothing was found.
          </div>
        );
      }


    return (
        <section className='section'>
           <div className='container'>
            <div className='grid'>
                {homes.map((home, index) => {
                    return (
                    <Link to={`/property/${home.id}`} key={index}>
                        <Home home={home} />
                    </Link>
                    );
                })}
            </div>
           </div>
        </section>
    );
};

export default HouseList;