import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Regions = ({ uniqueRegions, setSelectedRegion }) => {

    console.log()


    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Countrys</Navbar.Brand>
                    {
                        uniqueRegions.map((newRegion, index) => (
                            <Nav className="me-auto" key={index} >
                                <Nav.Link href="#" onClick={() => setSelectedRegion(newRegion)}>{newRegion}</Nav.Link>
                            </Nav>
                        ))
                    }

                </Container>
            </Navbar>
        </div>
    )
}

export default Regions