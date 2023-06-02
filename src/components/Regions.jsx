import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Regions = ({ regions, filteredCountrys, filterData }) => {

    console.log(regions)


    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Countrys</Navbar.Brand>
                    {
                        filteredCountrys.map((newRegion, index) => (
                            <Nav className="me-auto" key={index} >
                                <Nav.Link href="#" onClick={() => filterData(newRegion)}>{newRegion}</Nav.Link>
                            </Nav>
                        ))
                    }

                </Container>
            </Navbar>
        </div>
    )
}

export default Regions