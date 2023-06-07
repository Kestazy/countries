import { useState, useEffect } from 'react';
import { getAllCountriesInfo, countrysSearchName, getOneCountry } from '../services/CountriesService';
import Countrie from './Countrie';
import Regions from './Regions';
import ContryModal from './ContryModal';

const Main = () => {
    // state visada top level - virsuje
    // visu saliu orginalus steitas
    const [countries, setCountries] = useState([]);
    // pagal regionus saliu steitas
    const [filteredCountrys, setFilteredCountrys] = useState([]);

    // duomenys modalui atvaizduoti
    const [oneCountry, setOneCountry] = useState([]);

    // spinerio statusas
    const [spiner, setSpiner] = useState('border');

    // modano statusas
    const [show, setShow] = useState(false);

    // funkcijos nustatyti modano statusui
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // funkcija duomenu gavimui is service (https://restcountries.com/v3.1/all)
    const getData = () => {
        // gauti duomenis is service aprasyto axios get metodo
        getAllCountriesInfo()
            .then(response => {
                if (response !== undefined) {
                    setCountries(response);
                    setFilteredCountrys(response);
                    setSpiner('true');
                }
            })
    }

    console.log(getAllCountriesInfo);

    // funkcija duomenu gavimui is service (https://restcountries.com/v3.1/name/{name})
    const getCountryName = (searchWord) => {
        countrysSearchName(searchWord)
            .then(response => {
                if (response !== undefined) {
                    setFilteredCountrys(response);
                }
            })
    }

    // funkcija duomenu gavimui is service (`https://restcountries.com/v3.1/name/${oneCountry}?fullText=true`)
    const getOneCountryInfo = (country) => {
        getOneCountry(country).then(response => {
            if (response !== undefined) {
                // console.log(country, response);
                setOneCountry(response);
                handleShow();
            }
        })
    }

    // isfiltruojami unikalus regionai
    const uniqueRegions = [...new Set(countries.map((oneRegion) => oneRegion.region)), "All"];
    console.log(uniqueRegions);

    // funkcija isfiltruoja duomenis pagal regiona
    const filterData = (region) => {
        console.log(region);
        // ifas pargrazinti visus duomenis be filtracijos
        if (region !== 'All') {
            // filtruojamos salys
            const filtered = countries.filter((items) => items.region.includes(region));
            setFilteredCountrys(filtered);
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
            <Regions
                uniqueRegions={uniqueRegions}
                filterData={filterData}
                getCountryName={getCountryName}
            />
            <Countrie
                filteredCountrys={filteredCountrys}
                getOneCountryInfo={getOneCountryInfo}
                spiner={spiner}
            />
            <ContryModal
                oneCountry={oneCountry}
                handleClose={handleClose}
                show={show}
            />
        </div>
    )
}

export default Main