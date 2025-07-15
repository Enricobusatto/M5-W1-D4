import 'bootstrap/dist/css/bootstrap.min.css';
import './singlebook.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function SingleBook({ book }) {
    return (
        <Card
            className="card-hover shadow d-flex flex-column"
            style={{ width: '100%', height: '100%', border: '0' }}
        >
            <Card.Img
                variant="top"
                src={book.img}
                style={{ height: '300px', objectFit: 'cover' }}
            />
            <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>Category : {book.category}</Card.Text>
                    <Card.Text className="text-muted">Price: {book.price} $</Card.Text>
                </div>
                <Button variant="success" className="mt-3">
                    Add To Cart
                </Button>
            </Card.Body>
        </Card>

    );
}


export default SingleBook;