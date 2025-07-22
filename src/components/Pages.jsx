import { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';

function Pages({active, pages , setActive}) {

    let items = [];
    for (let number = 1; number <= pages; number++) {
        items.push(
            <Pagination.Item key={number} active={number == active} onClick={() => handlePage(number)}>
                {number}
            </Pagination.Item>,
        );
    }

    function handlePage(newPage) {
        window.location.search = `?page=${newPage}`;
        setActive(newPage);

    }
    return (
        <Pagination>{items}</Pagination>
    )
}
export default Pages