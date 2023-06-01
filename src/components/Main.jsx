import {useState, useEffect} from 'react';
import getAllCountriesInfo from '../services/CountriesService';

const Main = () => {
    // state visada top level - virsuje
    const [countries, setCountries] = useState([]);

    const getData = () => {
        // gauti duomenis is service aprasyto axios get metodo
        getAllCountriesInfo()
        .then(response => setCountries(response.data)
    )}

        console.log(countries);
    // kada pakviesime daryti req - uzklausa pasako mums useEffect
    useEffect(()=>{
        getData();
    }, [])

    return (
        <div>
            Main
        </div>
    )
}

export default Main