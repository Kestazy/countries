import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Countrie = ({ countries }) => {
    console.log(countries);


    return (
        <div className='d-inline-flex flex-wrap justify-content-center'>
            {countries !== undefined && countries.length !== 0 ?
                countries.map((country, index) => (
                    <Card className='m-3 ' style={{ width: '18rem' }} key={index}>
                        <Card.Img variant="top" src={country.flags.png} alt={country.flags.alt} />
                        <Card.Body>
                            <Card.Title>{country.name.common}</Card.Title>
                            <Card.Text>Region: {country.region} ({country.subregion})</Card.Text>
                            <Button variant="primary">Read more about - {country.name.common}</Button>
                        </Card.Body>
                    </Card>
                ))
                : <h1>Duomenys nerasti</h1>
            }
        </div>
    )
}

export default Countrie