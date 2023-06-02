import {useState, useEffect} from 'react';
import getAllCountriesInfo from '../services/CountriesService';
import Countrie from './Countrie';
import Regions from './Regions';

const Main = () => {
    // state visada top level - virsuje
    const [countries, setCountries] = useState([]);
    const [filteredCountrys, setFilteredCountrys] = useState([]);
    const [selectedRegion, setSelectedRegion] = useState('')

    const uniqueRegions = [ ...new Set(countries.map((oneRegion) => oneRegion.region)), "all"];

    console.log(uniqueRegions);
    console.log(selectedRegion);

    const getData = () => {
        // gauti duomenis is service aprasyto axios get metodo
        getAllCountriesInfo()
        .then(response => setCountries(response)
    )}

        // console.log(countries);
    // kada pakviesime daryti req - uzklausa pasako mums useEffect
    useEffect(()=>{
        getData();
    }, [])

    console.log(selectedRegion)

    return (
        <div className=''>
            <Regions uniqueRegions={uniqueRegions} setSelectedRegion={setSelectedRegion}/>
            <Countrie countries={countries}/>
        </div>
    )
}

export default Main