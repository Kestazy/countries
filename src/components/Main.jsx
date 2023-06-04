import { useState, useEffect, useRef } from 'react';
import getAllCountriesInfo from '../services/CountriesService';
import countrysSearchName from '../services/CountrysSearchName';
import Countrie from './Countrie';
import Regions from './Regions';

const Main = () => {
    // state visada top level - virsuje
    const [countries, setCountries] = useState([]);
    const [filteredCountrys, setFilteredCountrys] = useState([]);

    // statai salies paieskai pagal pavadinima
    const [name, setName] = useState([]);
    const inputRef = useRef()

    // funkcija duomenu gavimui is service (https://restcountries.com/v3.1/name/{name})
    const getCountryName = (uniqContry) => {
        countrysSearchName(uniqContry)
            .then(response => {
                if (response !== undefined) {
                    setFilteredCountrys(response)
                } else {
                    setFilteredCountrys(countries)
                }
            })
    }


    const getData = () => {
        // gauti duomenis is service aprasyto axios get metodo
        getAllCountriesInfo()
            .then(response => {
                setCountries(response)
                setFilteredCountrys(response)
            })
    }

    // isfiltruojami unikalus regionai
    const uniqueRegions = [...new Set(countries.map((oneRegion) => oneRegion.region)), "All"];
    console.log(uniqueRegions);

    // funkcija isfiltruoja duomenis pagal regiona
    const filterData = (region) => {
        console.log(region)
        // ifas pargrazinti visus duomenis be filtracijos
        if (region !== 'All') {
            // filtruojamos salys
            const filtered = countries.filter((items) => items.region.includes(region));
            setFilteredCountrys(filtered)
        } else {
            // priskiriamos visos salys
            setFilteredCountrys(countries);
        }
        console.log(filteredCountrys);
    }

    // paieska pagal salies pavadinimas
    function focus(e) {
        e.preventDefault();
        inputRef.current.focus()
        console.log(name)
        getCountryName(name)
        
    }

    // console.log(countries);
    // kada pakviesime daryti req - uzklausa pasako mums useEffect
    useEffect(() => {
        getData();
    }, [])


    return (
        <div className=''>
            <Regions uniqueRegions={uniqueRegions} filterData={filterData} focus={focus} inputRef={inputRef} setName={setName} name={name} />
            <Countrie countries={countries} filteredCountrys={filteredCountrys} />
        </div>
    )
}

export default Main