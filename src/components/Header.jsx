import React from 'react';

function Header(props) {
    const { video } = props;
    console.log(video);
    return (
        <div>
           <img className='w-100' src={`https://image.tmdb.org/t/p/original${video.backdrop_path}`} alt="" />
           <h1>{video.name}</h1>
        </div>
    );
}

export default Header;