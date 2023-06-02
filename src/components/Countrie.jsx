import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Countrie = ({ countries }) => {
    
    console.log(countries);

    return (
        <div className='d-inline-flex flex-wrap justify-content-center bg-dark'>
            {countries !== undefined && countries.length !== 0 ?
                countries.map((country, index) => (
                    <Card className='m-3 border-secondary text-bg-secondary' style={{ width: '18rem' }} key={index}>
                        <Card.Img className='border-bottom border-secondary' variant="top" src={country.flags.png} alt={country.flags.alt} />
                        <Card.Body className='d-inline-flex flex-column justify-content-around'>
                            <Card.Title>{country.name.common}</Card.Title>
                            <Card.Text>Capital: {country.capital}</Card.Text>
                            <Card.Text>Region: {country.region} ({country.subregion})</Card.Text>
                            <Button variant="primary"  >Read more about - {country.name.common}</Button>
                        </Card.Body>
                    </Card>
                ))
                : <h1>Duomenys nerasti</h1>
            }
        </div>
    )
}

export default Countrie