import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav } from 'react-bootstrap';

function MyFooter() {
    return (
        <Container className="py-4 mt-5 border-top">
            <Nav className="justify-content-center mb-3">
                <Nav.Item>
                    <Nav.Link href="#" className="px-2 text-muted">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#" className="px-2 text-muted">FAQs</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#" className="px-2 text-muted">About</Nav.Link>
                </Nav.Item>
            </Nav>
            <p className="text-center text-muted mb-0">© 2025 Books_React_Company, Inc</p>
        </Container>
    );
}

export default MyFooter;
