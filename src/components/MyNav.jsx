import 'bootstrap/dist/css/bootstrap.min.css';
import './css.components/myNav.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/logo.svg';

function MyNav() {
    return (
        <Navbar expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#">
                    <img
                        src={logo}
                        alt="logo"
                        style={{ width: 70, borderRadius: 30, marginRight: '10px' }}
                    />
                    Books React
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navbar" />
                <Navbar.Collapse id="main-navbar">
                    <Nav className="me-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">About</Nav.Link>
                        <Nav.Link href="#">Browser</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNav;
