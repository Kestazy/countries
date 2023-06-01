import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Countrie = ({ countries }) => {
    console.log(countries);


    return (
        <div>
            {countries !== undefined && countries.length !== 0 ?
                countries.map((country, index) => (
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>gg</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                ))
                : <h1>Duomenys nerasti</h1>
            }
        </div>
    )
}

export default Countrie