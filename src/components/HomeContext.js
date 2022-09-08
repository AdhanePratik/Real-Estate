import React, { createContext, useEffect, useState } from 'react';
import { homesData } from '../data';

export const HomeContext = createContext();


const HomeContextProvider = ({ children }) => {

    const [homes, setHomes] = useState(homesData);
    const [city, setCity] = useState('Location (any)');
    const [cities, setCities] = useState([]);
    const [property, setProperty] = useState('Property type (any)');
    const [properties, setProperties] = useState([]);
    const [price, setPrice] = useState('Price range (any)');
    const [loading, setLoading] = useState(false);

    //cityType
    useEffect(()=> {
        const allCities = homes.map((home) => {
            return home.city;
        });

        const uniqueCities = ['Location (any)', ...new Set(allCities)];

        setCities(uniqueCities)

    }, []);

    //PropertyType
    useEffect(()=> {
        const allProperties = homes.map((home) => {
            return home.type;
        });

        const uniqueProperties = ['Location (any)', ...new Set(allProperties)];

        setProperties(uniqueProperties);

    }, []);


    const handleClick = () => {
        setLoading(true);

        //functions for checking selection
        const isDefault = (str) => {
            return str.split(' ').includes('(any)');
        };

        const minPrice = parseInt(price.split(' ')[0]);
        const maxPrice = parseInt(price.split(' ')[2]);

        const newHomes = homesData.filter((home) => {
            const homePrice = parseInt(home.price);

            //all values are selected
            if(home.city === city && home.type === property && homePrice >= minPrice && homePrice <= maxPrice)
            {
                return home;
            }

            //default values
            if(isDefault(city) && isDefault(property) && isDefault(price))
            {
                return home;
            }

            //
            if(!isDefault(city) && isDefault(property) && isDefault(price)){
                return home.city === city;
            }

            //
            if(!isDefault(property) && isDefault(city) && isDefault(price)){
                return home.type === property;
            }

            //
            if(!isDefault(price) && isDefault(city) && isDefault(property)){
                if(homePrice >= minPrice && homePrice <= maxPrice){
                    return home;
                }
            }

            //
            if(!isDefault(city) && !isDefault(property) && isDefault(price)){
                return home.city === city && home.type === property;
            }

            //
            if(!isDefault(city) && isDefault(property) && !isDefault(price)){
                if (homePrice >= minPrice && homePrice <= maxPrice){
                    return home.city === city;
                }                
            }

            //
            if(isDefault(city) && !isDefault(property) && !isDefault(price)){
                if(homePrice >= minPrice && homePrice <= maxPrice){
                    return home.type === property;
                }
            }
        });

        setTimeout(() => {
            return (
              newHomes.length < 1 ? setHomes([]) : setHomes(newHomes),
              setLoading(false)
            );
          }, 1000);
        };


    return (
        <HomeContext.Provider value={
            {city, setCity,
            cities,
            property, setProperty,
            properties,
            price, setPrice,
            homes,loading,
            handleClick,
            homes, loading,
        }
        }>
            {children}
        </HomeContext.Provider>
    );
};

export default HomeContextProvider;