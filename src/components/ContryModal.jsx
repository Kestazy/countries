import React from 'react'
import Card from 'react-bootstrap/Card';
import CloseButton from 'react-bootstrap/CloseButton';

const ContryModal = ({ setModalIsOpenToFalse, oneCountry }) => {

    return (
        <div >
            {
                oneCountry !== undefined && oneCountry.length !== 0 ?
                    oneCountry.map((country, index) => (
                            <Card onClick={setModalIsOpenToFalse} key={index}>
                                <CloseButton />
                                <Card.Img variant="top" src={country.flags.png} alt={country.flags.alt} />
                                <Card.Body>
                                    <Card.Title>{country.name.common}</Card.Title>
                                    <Card.Text>Capital: {country.capital}</Card.Text>
                                    <Card.Text>Population: {country.population}</Card.Text>
                                    <Card.Text>Area: {country.area}</Card.Text>
                                    <Card.Text>Currencies: { Object.keys(oneCountry[0].currencies).map(key => Object.keys(oneCountry[0].currencies[key]).map(item => oneCountry[0].currencies[key][item]))} </Card.Text>
                                    <Card.Text>Languages: { Object.keys(country.languages).map(key => (country.languages[key]))} </Card.Text>
                                    <Card.Text>Borders: {`${country.borders}`}</Card.Text>
                                </Card.Body>
                            </Card>
                    ))
                    
                    : <h1>Duomenys nerasti</h1>
            }
        </div>
    )
}

export default ContryModal