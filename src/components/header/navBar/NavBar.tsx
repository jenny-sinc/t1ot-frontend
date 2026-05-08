import { Navbar, Nav, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Logo from '../logo/Logo';
import { RootState } from '../../../store';

export default function NavBar() {

    const screenSize = useSelector((state: RootState) => state.ui.screenSize);
    return (

        <Navbar expand="md" bg='primary' data-bs-theme="light" className="navbar navbar-expand-md">
            <Container fluid>
                <Navbar.Toggle aria-controls="navbarColor01 no-border" />
                <Navbar.Collapse id="navbarColor01">
                    <Nav
                        className='nav nav-underline'
                    // activeKey="#home"
                    >
                        <Nav.Item>
                            <Nav.Link href="#home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#about">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#contribute">Contribute</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}