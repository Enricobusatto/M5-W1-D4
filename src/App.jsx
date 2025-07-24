import MyNav from './components/MyNav.jsx'
import Welcome from './components/Welcome.jsx'
import AllTheBooks from './components/AllTheBooks.jsx'
import MyFooter from './components/MyFooter.jsx'

import fantasy from './assets/fantasy.json';
import history from './assets/history.json';
import horror from './assets/horror.json';
import romance from './assets/romance.json';
import scifi from './assets/scifi.json';
import { useState } from 'react';
import ThemeContext from './components/ThemeContext.jsx';



// Unione di tutti i libri in un unico array
const allBooksRaw = [...fantasy, ...history, ...horror, ...romance, ...scifi]; //idea iniziale era di pescare i file dalla cartella madre così che ogni file aggiunto non dovessi modificare il codic
const allBooks = Array.from(new Map(allBooksRaw.map(book => [book.asin, book])).values());
// constante che contiene le categorie uniche
const categories = [...new Set(allBooks.map(book => book.category))];

function App() {
    // console.log ("Tutti i libri:", allBooks);
    const [searchTitle, setSearchTitle] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    
    
    // Filtro  per titolo e categoria
    const filteredBooks = allBooks.filter(book => {
        const categoryMatch = selectedCategory ? book.category === selectedCategory : true;
        const titleMatch = searchTitle
            ? book.title.toLowerCase().includes(searchTitle.toLowerCase())
            : true;
        return categoryMatch && titleMatch;
    });
    return (
        // <StrictMode>
        <>
            <MyNav setSearchTitle={setSearchTitle} setSelectedCategory={setSelectedCategory} categories={categories} searchTitle={searchTitle} selectedCategory={selectedCategory} />
            <Welcome />
            <AllTheBooks filteredBooks={filteredBooks} searchTitle={searchTitle} selectedCategory={selectedCategory}/>
            <MyFooter />
        </>

        // </StrictMode>,
    )
}
export default App;

