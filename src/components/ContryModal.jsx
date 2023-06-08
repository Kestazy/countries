import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ContryModal = ({ oneCountry, show, handleClose }) => {

    return (
        <div >
            {
                oneCountry !== undefined || oneCountry.length !== 0 ?
                    oneCountry.map((country, index) => (
                        <Modal aria-labelledby="contained-modal-title-vcenter" show={show} onHide={handleClose} animation={true} key={index} >
                            <Modal.Header className='bg-secondary text-white border-secondary-subtle ' closeButton>
                                <Modal.Title className='text-uppercase fw-bold' >{country.name.common}</Modal.Title>
                            </Modal.Header>
                            <img className='border-bottom border-secondary-subtle' src={country.flags.png} alt={country.flags.alt} />
                            <Modal.Body className='bg-secondary text-white '>
                                <h4 className='border-bottom border-secondary-subtle d-flex justify-content-center pb-2'>Capital: {country.capital}</h4>
                                <p className='mt-4' >Population: {country.population}</p>
                                <p>Area: {country.area} km²</p>
                                <p>Currencies: {(country.currencies === undefined) || (country.currencies.length === 0) || (typeof (Object.keys(oneCountry[0].currencies).map(key => oneCountry[0].currencies[key])) !== 'object') ? "" : Object.keys(oneCountry[0].currencies).map(key => Object.keys(oneCountry[0].currencies[key]).map(item => oneCountry[0].currencies[key][item] + " "))}</p>
                                <p>Languages: {(country.languages === undefined) || (country.languages.length === 0) || (typeof (Object.keys(oneCountry[0].languages)) !== 'object') ? "" : Object.keys(oneCountry[0].languages).map(key => (oneCountry[0].languages[key]))}</p>
                                <span>Borders: </span>
                                {(country.borders !== undefined) ?
                                            Object.keys(oneCountry[0].borders).map((key, index) => {
                                                return (
                                                    <span key={index}>{`${oneCountry[0].borders[key]} `}</span>
                                                )
                                            })
                                    : <p></p>
                                }
                            </Modal.Body>
                            <Modal.Footer className='bg-secondary border-white-subtle '>
                                <Button variant="outline-info" onClick={handleClose}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    ))
                    : <h1>Duomenys nerasti</h1>
            }
        </div>
    )
}

export default ContryModal