import { useState, useEffect } from 'react';
import getAllCountriesInfo from '../services/CountriesService';
import Countrie from './Countrie';
import Regions from './Regions';

const Main = () => {
    // state visada top level - virsuje
    const [countries, setCountries] = useState([]);
    const [filteredCountrys, setFilteredCountrys] = useState([]);

    // isfiltruojami unikalus regionai
    const uniqueRegions = [...new Set(countries.map((oneRegion) => oneRegion.region)), "all"];
    console.log(uniqueRegions);

    const getData = () => {
        // gauti duomenis is service aprasyto axios get metodo
        getAllCountriesInfo()
            .then(response => setCountries(response)
            )
        getAllCountriesInfo()
            .then(response => setFilteredCountrys(response)
            )
    }

    const filterData = (region) => {
        console.log(region)
        // ifas pargrazinti visus duomenis be filtracijos
        if (region !== 'all') {
            // filtruojamos salys
            const filtered = countries.filter((items) => items.region.includes(region));
            setFilteredCountrys(filtered)
        } else {
            // priskiriamos visos salys
            setFilteredCountrys(countries);
        }
        console.log(filteredCountrys);

    }



    // console.log(countries);
    // kada pakviesime daryti req - uzklausa pasako mums useEffect
    useEffect(() => {
        getData();
    }, [])


    return (
        <div className=''>
            <Regions uniqueRegions={uniqueRegions} filterData={filterData} />
            <Countrie countries={countries} filteredCountrys={filteredCountrys}/>
        </div>
    )
}

export default Main