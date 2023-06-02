import { useState, useEffect } from 'react';
import getAllCountriesInfo from '../services/CountriesService';
import Countrie from './Countrie';
import Regions from './Regions';

const Main = () => {
    // state visada top level - virsuje
    const [countries, setCountries] = useState([]);
    const [filteredCountrys, setFilteredCountrys] = useState([]);

    const uniqueRegions = [...new Set(countries.map((oneRegion) => oneRegion.region)), "all"];

    console.log(uniqueRegions);

    const getData = () => {
        // gauti duomenis is service aprasyto axios get metodo
        getAllCountriesInfo()
            .then(response => setCountries(response)
            )
    }

    const filterData = (region) => {
        // ifas pargrazinti visus duomenis be filtracijos
        if (region !== 'all') {
            const filtered = countries.filter((items) => items.region.includes(region));
            setFilteredCountrys(filtered)
        } else {
            setFilteredCountrys(countries);
        }
        // isfiltruoju prekes pagal kategorijas

    }



    // console.log(countries);
    // kada pakviesime daryti req - uzklausa pasako mums useEffect
    useEffect(() => {
        getData();
    }, [])


    return (
        <div className=''>
            <Regions Regions={uniqueRegions} filteredCountrys={filteredCountrys} filterData={filterData} />
            <Countrie countries={countries} />
        </div>
    )
}

export default Main