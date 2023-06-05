import React from 'react'
import Card from 'react-bootstrap/Card';
import CloseButton from 'react-bootstrap/CloseButton';

const ContryModal = ({ setModalIsOpenToFalse, oneCountry }) => {

    // for (let folders in oneCountry) {

    //     console.log(folders)
    //     console.log(oneCountry[folders])

    //     for (let dors in oneCountry[folders]) {

    //         console.log(dors)
    //         console.log(oneCountry[folders][dors])

    //         for (let deeper in oneCountry[folders][dors]) {

    //             console.log(deeper)
    //             console.log(oneCountry[folders][dors][deeper])
    //         }
    //     }
    // }

    return (
        <div >
            {
                oneCountry !== undefined && oneCountry.length !== 0 ?
                    oneCountry.map((country, index) => (
                        oneCountry.map((items) => (
                            <Card onClick={setModalIsOpenToFalse} key={index}>
                                <CloseButton />
                                <Card.Img variant="top" src={country.flags.png} alt={country.flags.alt} />
                                <Card.Body>
                                    <Card.Title>{country.name.common}</Card.Title>
                                    <Card.Text>Capital: {country.capital}</Card.Text>
                                    <Card.Text>Population: {country.population}</Card.Text>
                                    <Card.Text>Area: {country.area}</Card.Text>
                                    <Card.Text>Currencies: {country.currencies.EUR.name}</Card.Text>
                                    <Card.Text>Languages: {items.languages[0]}</Card.Text>
                                    <Card.Text>Borders: {country.borders}</Card.Text>
                                </Card.Body>
                            </Card>
                        ))
                    ))
                    : <h1>Duomenys nerasti</h1>
            }
        </div>
    )
}

export default ContryModal