import {useState, useEffect} from 'react';
import getAllCountriesInfo from '../services/CountriesService';
import Countrie from './Countrie';

const Main = () => {
    // state visada top level - virsuje
    const [countries, setCountries] = useState([]);

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

    return (
        <div>
            <Countrie countries={countries}/>
        </div>
    )
}

export default Main