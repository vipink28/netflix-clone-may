import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNetflixOriginals, nfOriginalsSelector } from '../features/tv/tvSlice';

function HomeScreen(props) {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchNetflixOriginals());
    }, [])

    const nfOriginals = useSelector(nfOriginalsSelector);
    console.log(nfOriginals);

    return (
        <div>
            Home
        </div>
    );
}

export default HomeScreen;