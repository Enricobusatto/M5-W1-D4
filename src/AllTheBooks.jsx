import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import fantasy from './assets/fantasy.json';
import './AllTheBooks.css';
// console.log(fantasy);

function AllTheBooks() {
    return (
        <div className="container">
            <div className="row g-2">
                {fantasy.map((book) => (
                    <div className="card card-body col-md-3 h-100 border-0" style={{flex: '0 0 auto'}} key={book.asin}>
                        <div className="overflow-hidden rounded-4 shadow card-hover" style={{ height: '450px' }}>
                            <img
                                src={book.img}
                                className="img-fluid w-100 h-100 object-fit-cover "
                                alt={book.title}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default AllTheBooks;