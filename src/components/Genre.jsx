import React from 'react';
import { Link } from 'react-router-dom';

function Genre(props) {
    const { genre } = props;
    return (
        <Link className='badge text-bg-warning py-2 px-3 me-2 text-decoration-none' to={genre.name}>
            {genre.name}
        </Link>
    );
}

export default Genre;