import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Regions = ({ uniqueRegions, filterData }) => {

    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Countrys</Navbar.Brand>
                    {
                        // prasukamas mapiukas ispausdirnti unikaliem regionams
                        uniqueRegions.map((newRegion, index) => (
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