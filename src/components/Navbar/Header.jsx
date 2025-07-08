import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary width-100">
            <Container>
                <Navbar.Brand href="#home">Movie App</Navbar.Brand>
                <div className="nav-right">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className='flex' />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Latest</Nav.Link>
                            <Nav.Link href="#link">Popular</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>
    );
}

export default Header;