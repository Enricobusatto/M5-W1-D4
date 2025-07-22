import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { useState } from 'react';
import SingleBook from './SingleBook.jsx';
import './css.components/AllTheBooks.css'

import fantasy from '../assets/fantasy.json';
import history from '../assets/history.json';
import horror from '../assets/horror.json';
import romance from '../assets/romance.json';
import scifi from '../assets/scifi.json';

// Unione di tutti i libri in un unico array
const allBooksRaw = [...fantasy, ...history, ...horror, ...romance, ...scifi]; //idea iniziale era di pescare i file dalla cartella madre così che ogni file aggiunto non dovessi modificare il codic
const allBooks = Array.from(new Map(allBooksRaw.map(book => [book.asin, book])).values()); // Rimuove i duplicati basati su 'asin' CHIEDERE AL PROF
    // console.log ("Tutti i libri:", allBooks);


function AllTheBooks() {
    const [searchTitle, setSearchTitle] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    
    // constante che contiene le categorie uniche
    const categories = [...new Set(allBooks.map(book => book.category))];
    
    // Filtro  per titolo e categoria
    const filteredBooks = allBooks.filter(book => {
        const categoryMatch = selectedCategory ? book.category === selectedCategory : true;
        const titleMatch = searchTitle
        ? book.title.toLowerCase().includes(searchTitle.toLowerCase())
        : true;
        return categoryMatch && titleMatch;
    });

    // console.log ("Tutti i libri:", allBooks);

    //*********CODICE PER VERIFICARE DUPLICATI*****************
    // const asinCount = {};
    // allBooks.forEach((book) => {
    //   asinCount[book.asin] = (asinCount[book.asin] || 0) + 1;
    // });
    
    // const duplicatedAsins = Object.entries(asinCount).filter(([_, count]) => count > 1);
    
    // if (duplicatedAsins.length > 0) {
    //   console.warn("❗ Duplicati trovati negli ASIN:", duplicatedAsins);
    // } else {
    //   console.log("✅ Nessun ASIN duplicato trovato.");
    // }

  return (
    // Filtro ricerca
    <Container className="mt-4 mb-4">
      <Form.Select
        className="mb-3"
        aria-label="Select category"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </Form.Select>

      <Form.Control
        className="mb-4"
        type="text"
        placeholder="Search your book..."
        value={searchTitle}
        onChange={(e) => setSearchTitle(e.target.value)}
      />
{/* layout griglia */}
      <Row>
        {filteredBooks.map((book) => (
          <Col key={book.asin} xs={12} sm={6} md={4} lg={4} className="mb-4">
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>

      {filteredBooks.length === 0 && (
        <div className="text-center text-muted mt-4">
          Nessun libro trovato
          {selectedCategory && ` nella categoria "${selectedCategory}"`}
          {searchTitle && ` con il titolo che contiene "${searchTitle}"`}
        </div>
      )}
      
    </Container>
  );
}

export default AllTheBooks;


//CHIEDERE AL PROF SE SI PUO' FAR SI CHE VISTO IL NUM ELEVATO DI LIBRI, SE NE POSSONO VEDERE SOLO 20 PER PAGINA E POI CLICCARE SU "NEXT" O "PREVIOUS" PER VEDERE GLI ALTRI.